# DIDOR Restaurant

Responsive multilingual restaurant website built with React, TypeScript, Vite, and Tailwind CSS, with a FastAPI backend.

## Features

- Tajik, Russian, and English interface
- Restaurant menu with category filters and search
- Dish details and shopping cart
- Delivery order requests saved to the backend
- Table, VIP room, and banquet reservation requests saved to the backend
- Server-side validation and server-calculated order totals
- SQLite for local development; PostgreSQL supported for deployment

## Requirements

- Node.js and npm
- Python 3.11+ and pip

## Run the backend (Windows PowerShell)

From the repository root:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r backend/requirements.txt
Copy-Item backend/.env.example backend/.env
cd backend
py run.py
```

API: http://127.0.0.1:8000  
Interactive API docs: http://127.0.0.1:8000/docs

## Run the frontend

Open a second terminal in the repository root:

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Vite starts at http://localhost:3000. The frontend uses `VITE_API_URL` from the root `.env` file; the default is http://127.0.0.1:8000.

## API endpoints

- `GET /api/health` — health check
- `GET /api/menu` — server menu and prices
- `POST /api/reservations` — save a reservation request
- `POST /api/orders` — save a delivery order

## Database

The backend creates its tables and seeds the 14 menu items on startup. Local development uses SQLite at `backend/didor.db`. To use PostgreSQL, set `DATABASE_URL` in `backend/.env` to a PostgreSQL connection string.

## Order and reservation status

New requests are saved with status `pending`. Saving a request does not mean the restaurant has confirmed a reservation or accepted a delivery order. Staff notification, authenticated staff tools, status updates, payments, and deployment configuration are not included yet.

## Security notes

- Order totals are calculated from server-side menu prices, not browser-submitted prices.
- Input is validated by the backend.
- No public endpoint exposes customer order or reservation records.
- Configure `CORS_ORIGINS` to the exact deployed frontend origin before production.
- Add rate limiting, authenticated staff access, database backups, HTTPS, and secret management before public production use.
- Never commit real API keys, database passwords, or `.env` files.
