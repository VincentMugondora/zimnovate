# Zimnovate (Full-Stack)

A full-stack website for **Zimnovate** (digital agency) built with:

- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose

Pages: Home, About, Services, Portfolio, Contact

## Project Layout

- `ZimNovate/` — React + Vite frontend
- `backend/` — Express API + MongoDB
- `docs/` — Design + PRD specifications used to build the app

## Local Development

### 1) Backend (API)

Requirements:

- Node.js
- MongoDB running locally (or a cloud MongoDB URI)

Setup:

1. Create an env file:

- Copy `backend/.env.example` to `backend/.env`
- Set `MONGODB_URI` to your MongoDB connection string

2. Install dependencies:

- From `backend/`, run `npm install`

3. Start the API:

- From `backend/`, run `npm run dev`

API will run on `http://localhost:5000` by default.

### 2) Frontend (Vite)

Setup:

1. Install dependencies:

- From `ZimNovate/`, run `npm install`

2. Start the frontend:

- From `ZimNovate/`, run `npm run dev`

Frontend will run on `http://localhost:5173` by default.

The frontend is configured to proxy `/api/*` to `http://localhost:5000` via `ZimNovate/vite.config.js`.

## Environment Variables

Backend (`backend/.env`):

- `PORT=5000`
- `MONGODB_URI=mongodb://127.0.0.1:27017/zimnovate`
- `JWT_SECRET=change-me`
- `CORS_ORIGIN=http://localhost:5173`

## API Endpoints

- `GET /api/health` — health check
- `POST /api/contact` — contact form submission
- `GET /api/portfolio` — portfolio items

## Notes

- The Contact form validates on the client and validates/sanitizes on the server.
- Portfolio page fetches from the API and falls back to local placeholder data if the API is unavailable.
