# DIDOR Restaurant API

FastAPI backend for saving table reservations and delivery order requests.

## Requirements

- Python 3.11+
- pip
- SQLite for local development, or PostgreSQL for deployment

## Start on Windows (PowerShell)

From the repository root:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r backend/requirements.txt
Copy-Item backend/.env.example backend/.env
cd backend
py run.py
```

The API starts at http://127.0.0.1:8000. The backend loads settings from `backend/.env` when started from the `backend` folder.

Open http://127.0.0.1:8000/docs for interactive API documentation.

## Endpoints

- `GET /api/health` — health check
- `GET /api/menu` — menu items and server-controlled prices
- `POST /api/reservations` — save a reservation request
- `POST /api/orders` — save a delivery order request

The API creates its database tables and seeds the 14 menu items at startup. Local development uses SQLite (`backend/didor.db`). Set `DATABASE_URL` to a PostgreSQL connection string for deployment.

## Example reservation

```json
{
  "hall_type": "table",
  "name": "Test Customer",
  "phone": "+992 900 000 000",
  "guests": 4,
  "date": "2027-01-15",
  "time": "19:00",
  "notes": "Window table, if available"
}
```

For VIP bookings, also provide `vip_cabin_id` such as `vip-1`.

## Example delivery order

```json
{
  "name": "Test Customer",
  "phone": "+992 900 000 000",
  "address": "Dushanbe, example street, house 10",
  "items": [
    {"menu_item_id": "m1", "quantity": 2},
    {"menu_item_id": "m5", "quantity": 1}
  ]
}
```

The backend calculates totals from its own menu catalog; it never trusts prices sent by the browser.

## Run validation tests

From the `backend` folder:

```powershell
py -m pytest
```

## Important

Requests are saved with status `pending`. This starter backend does not yet send SMS/WhatsApp notifications, process payments, or provide an authenticated staff dashboard. A saved request is not the same as a restaurant-confirmed reservation or accepted delivery order. Do not expose the database or add public endpoints that list customers' phone numbers and addresses.
