# CSRD Report Generator

A web application for creating, editing, and generating CSRD-compliant reports using AI-assisted prompts.

## Project Structure

```
csrd-report-generator/
├── frontend/          # React + Vite frontend application
├── backend/          # Node.js + Express backend application
├── input/            # Input files and configurations
├── output/           # Generated reports and outputs
└── src/             # Shared source code
```

## Quick Start

1. Install dependencies:
```bash
npm run install-all
```

2. Start development servers:
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Development

- Frontend runs on port 3000 with Vite's development server
- Backend runs on port 4000 with Node.js/Express
- Frontend proxies API requests to the backend automatically

## Testing

Run all tests:
```bash
npm test
```

Or individually:
```bash
npm run test:frontend
npm run test:backend
```

## Environment Setup

See `ENV_SETUP.md` for detailed environment configuration instructions.

## Documentation

- `ENV_SETUP.md` - Environment configuration guide
- `API_DOCS.md` - API documentation (coming soon)
- `AUTH_TESTING.md` - Authentication testing guide (coming soon)
