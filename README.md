# Algectra Employee Management System

React frontend application for employee management, ready to connect with FastAPI backend.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will run on `http://localhost:3000`

## Backend Integration

The Vite config includes a proxy setup for API calls. Make sure your FastAPI backend is running on `http://localhost:8000`.

API calls should be made to `/api/*` which will be proxied to your FastAPI backend.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

