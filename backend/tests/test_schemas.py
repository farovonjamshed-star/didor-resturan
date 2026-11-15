from datetime import date, timedelta

import pytest
from pydantic import ValidationError

from app.schemas import OrderCreate, ReservationCreate


def test_valid_table_reservation():
    payload = ReservationCreate(
        hall_type="table",
        name="Test Customer",
        phone="+992 900 000 000",
        guests=4,
        date=date.today() + timedelta(days=1),
        time="19:00",
    )
    assert payload.hall_type == "table"
    assert payload.guests == 4


def test_past_reservation_date_is_rejected():
    with pytest.raises(ValidationError):
        ReservationCreate(
            hall_type="table",
            name="Test Customer",
            phone="+992 900 000 000",
            guests=4,
            date=date.today() - timedelta(days=1),
            time="19:00",
        )


def test_banquet_requires_at_least_fifty_guests():
    with pytest.raises(ValidationError):
        ReservationCreate(
            hall_type="banquet",
            name="Test Customer",
            phone="+992 900 000 000",
            guests=10,
            date=date.today() + timedelta(days=1),
            time="19:00",
        )


def test_unknown_vip_cabin_is_rejected():
    with pytest.raises(ValidationError):
        ReservationCreate(
            hall_type="vip",
            vip_cabin_id="vip-unknown",
            name="Test Customer",
            phone="+992 900 000 000",
            guests=4,
            date=date.today() + timedelta(days=1),
            time="19:00",
        )


def test_duplicate_order_lines_are_rejected():
    with pytest.raises(ValidationError):
        OrderCreate(
            name="Test Customer",
            phone="+992 900 000 000",
            address="Dushanbe, example street 10",
            items=[
                {"menu_item_id": "m1", "quantity": 1},
                {"menu_item_id": "m1", "quantity": 2},
            ],
        )


def test_order_quantity_must_be_positive():
    with pytest.raises(ValidationError):
        OrderCreate(
            name="Test Customer",
            phone="+992 900 000 000",
            address="Dushanbe, example street 10",
            items=[{"menu_item_id": "m1", "quantity": 0}],
        )
