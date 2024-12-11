# CSRD Report Generator

A web application for generating CSRD (Corporate Sustainability Reporting Directive) documentation with AI integration.

## Project Status

### Phase 1: Foundation and Architecture 
- Project Setup
- Environment & Port Configuration
- Basic API Endpoint & Health Check
- Testing Setup
- CI/CD Pipeline

Next Phase: Phase 2 - Core Document Management

## Development Setup

### Prerequisites
- Node.js (LTS version)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SGLBCH/csrd-report-generator.git
   cd csrd-report-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.development` files in both `frontend/` and `backend/` directories
   - See `ENV_SETUP.md` for detailed configuration

### Running the Application
```bash
# Start both frontend and backend in development mode
npm run dev

# Run tests
npm run test
```

Frontend: http://localhost:3000
Backend: http://localhost:4000

## Project Structure
```
csrd-report-generator/
├── frontend/          # React + Vite frontend
├── backend/           # Node.js + Express backend
├── .github/           # GitHub Actions workflows
└── docs/             # Project documentation
```

For more details about the project roadmap and features, see `input/ROADMAP.md`.
