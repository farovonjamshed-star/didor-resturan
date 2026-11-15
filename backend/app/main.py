from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from .catalog import get_menu, seed_menu
from .config import get_cors_origins
from .database import Base, SessionLocal, engine, get_db
from .models import MenuItem, Order, OrderItem, Reservation
from .schemas import (
    MenuItemOut,
    OrderCreate,
    OrderCreated,
    ReservationCreate,
    ReservationCreated,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        seed_menu(db)
    yield


app = FastAPI(
    title="DIDOR Restaurant API",
    version="1.0.0",
    description="API for DIDOR Restaurant menu, delivery orders, and reservations.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_cors_origins(),
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "didor-api"}


@app.get("/api/menu", response_model=list[MenuItemOut])
def menu(db: Session = Depends(get_db)):
    return get_menu(db)


@app.post(
    "/api/reservations",
    response_model=ReservationCreated,
    status_code=status.HTTP_201_CREATED,
)
def create_reservation(payload: ReservationCreate, db: Session = Depends(get_db)):
    reservation = Reservation(
        hall_type=payload.hall_type,
        vip_cabin_id=payload.vip_cabin_id,
        customer_name=payload.name,
        phone=payload.phone,
        guests=payload.guests,
        reservation_date=payload.date,
        reservation_time=payload.time.strftime("%H:%M"),
        notes=payload.notes,
        status="pending",
    )
    db.add(reservation)
    db.commit()
    db.refresh(reservation)
    return {
        "id": reservation.id,
        "status": reservation.status,
        "message": "Reservation request saved. It is not confirmed until the restaurant approves it.",
    }


@app.post(
    "/api/orders",
    response_model=OrderCreated,
    status_code=status.HTTP_201_CREATED,
)
def create_order(payload: OrderCreate, db: Session = Depends(get_db)):
    menu_ids = [line.menu_item_id for line in payload.items]
    menu_items = db.scalars(
        select(MenuItem).where(MenuItem.id.in_(menu_ids))
    ).all()
    menu_by_id = {item.id: item for item in menu_items}

    missing = [item_id for item_id in menu_ids if item_id not in menu_by_id]
    if missing:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Unknown menu item IDs: {', '.join(missing)}",
        )

    total = sum(menu_by_id[line.menu_item_id].price * line.quantity for line in payload.items)
    order = Order(
        customer_name=payload.name,
        phone=payload.phone,
        address=payload.address,
        total_amount=total,
        status="pending",
    )
    for line in payload.items:
        menu_item = menu_by_id[line.menu_item_id]
        order.items.append(
            OrderItem(
                menu_item_id=menu_item.id,
                item_name=menu_item.name,
                unit_price=menu_item.price,
                quantity=line.quantity,
            )
        )

    db.add(order)
    db.commit()
    db.refresh(order)
    return {
        "id": order.id,
        "status": order.status,
        "total_amount": total,
        "message": "Order request saved. It is not confirmed until the restaurant approves it.",
    }
