# Deployment guide (quick)

This file contains quick, repeatable steps to deploy the Appointy project.

## 1) Prepare environment variables
- Copy `backend/.env.example` -> `backend/.env` and fill real secrets.
- For the frontends (`frontend/`, `admin/`) copy `.env.example` -> `.env` or set platform env vars (Vite requires `VITE_` prefix for client-side envs).

## 2) Build & run locally (Docker)
- Ensure Docker is installed.
- Copy `backend/.env.example` to `backend/.env` and fill values.
- From repo root run:

```powershell
# build and run
docker compose up -d --build
```

- Backend will be available at `http://localhost:4000`.

## 3) Deploying backend (Render / Railway / Heroku / Cloud providers)
- Create a new service and select Node environment.
- Add the env vars from `backend/.env` into the provider's environment config.
- Start command: `npm run start`
- Port: the platform usually provides `PORT` automatically; keep `process.env.PORT || 4000` in code.

## 4) Deploying frontends (Vercel / Netlify / Cloudflare Pages)
- For each frontend (root `frontend/` and `admin/`) set build command: `npm run build` and publish directory: `dist`.
- Add env vars in project settings (VITE_BACKEND_URL, VITE_CURRENCY).

## 5) Verifications
- Backend root: `GET /` should return "API Working".
- `GET /test-db` endpoint returns database connection state.
- Frontend should be able to login and call the backend via `VITE_BACKEND_URL`.

## 6) Notes and tips
- Use MongoDB Atlas for production DB; set `MONGODB_URI` accordingly (do not include the DB name if you want the code to append `/appointy`).
- Keep secrets out of the repo. Use provider secret store or copy only `.env.example` into repo.
- If you want a single container stack, consider adding the frontends as static sites served by a simple Nginx container or uploading the builds to Vercel/Netlify.

---
