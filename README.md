# DIDOR Restaurant

A responsive restaurant website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Multilingual interface: Tajik, Russian, and English
- Restaurant menu with category filters and search
- Dish details and shopping cart
- Delivery request prepared for WhatsApp
- Table, VIP room, and banquet reservation request prepared for WhatsApp
- Responsive navigation and layout

## Requirements

- Node.js (current LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create the production build
- `npm run preview` — preview the production build
- `npm run lint` — run the TypeScript compiler check
- `npm run typecheck` — run the TypeScript compiler check

## Orders and reservations

At present, the delivery and reservation forms prepare a message and open WhatsApp. The visitor must press **Send** in WhatsApp. This website does not currently store requests in a database, send them to a backend API, or independently confirm that the restaurant received or accepted an order.

A real booking/order system will need a backend API, server-side validation, secure configuration for secrets, and a database. Do not put private API keys in frontend source code.

## Environment variables

See `.env.example` for the project's example environment settings. Never commit real API keys or passwords.
