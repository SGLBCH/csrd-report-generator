# Roadmap for the CSRD Documentation Web App (Revised English Version)

**Goal:** Build a scalable CSRD (Corporate Sustainability Reporting Directive) documentation generator with AI integration. This updated roadmap emphasizes stable foundations, clear port configurations, robust testing at every step, and delaying external authentication (Google OAuth) until the application’s core features are tested and stable.

---

## Overview and Objectives
- **Primary Goal:** A web application that allows users to create, edit, and generate CSRD-compliant reports using AI-assisted prompts.
- **Key Improvements Over Previous Attempt:**
  - Establish clear environment setups, port configurations, and testing frameworks from the start.
  - Avoid early complexities like Google OAuth during initial development and testing phases.
  - Incrementally integrate features, ensuring each layer is thoroughly tested before moving on.
  - Only integrate Google OAuth near the end, after local auth and core functionalities are stable.

---

## Phase 1: Foundation and Architecture
**Objectives:**  
Set up a robust local development environment with clear port assignments, environment variables, basic routing, and test scaffolding. The focus is on ensuring that the application is easy to run and test without any external dependencies (like Google OAuth) at this early stage.

**Tasks:**
1. **Project Setup:**
   - Initialize frontend (React + Vite) and backend (Node.js + Express).
   - Establish a clear directory structure (e.g., `frontend/`, `backend/`, `shared/`).
2. **Environment & Port Configuration:**
   - Assign fixed default ports: e.g., Frontend at `http://localhost:3000`, Backend at `http://localhost:4000`.
   - Use `.env` files for both frontend and backend. Document all environment variables in `ENV_SETUP.md`.
   - Ensure the frontend uses a proxy to communicate with the backend locally.
3. **Basic API Endpoint & Health Check:**
   - Implement a simple health-check endpoint (`/api/health`) to verify backend connectivity.
4. **Testing Setup:**
   - Configure Jest (or Vitest) for backend unit/integration tests.
   - Set up basic test infrastructure in the frontend as well.
   - Create a simple test (e.g., a health-check test) and run it locally and in CI.
5. **CI/CD Pipeline:**
   - Configure GitHub Actions (or similar) to run tests on every push.
   - Ensure the pipeline fails on test failures.

**Deliverables:**
- Working frontend-backend setup accessible at known local ports.
- `ENV_SETUP.md` with clear documentation.
- A passing basic test (health-check).
- A functional CI pipeline.

**Timeline:** Weeks 1–2

---

## Phase 2: Core Document Management (No Auth Yet)
**Objectives:**  
Develop and test the essential document creation, editing, and retrieval functionalities without the complexity of user authentication. This allows stable testing of core logic before adding access restrictions.

**Tasks:**
1. **Database Setup:**
   - Choose and configure a database (MongoDB or PostgreSQL).
   - Implement a Document model/schema (title, content, timestamps, versions).
   - Consider migrations and schema validation.
2. **CRUD Endpoints for Documents:**
   - `POST /documents` to create
   - `GET /documents` to list
   - `GET /documents/:id` to retrieve a single doc
   - `PUT /documents/:id` to update
   - `DELETE /documents/:id` to remove
   - Add basic validation at the API layer.
3. **Frontend Integration:**
   - Simple Document List page (no login required).
   - Basic UI for creating, editing, and deleting documents.
4. **Testing:**
   - Unit tests for the document model and services.
   - Integration and end-to-end tests for basic document flows.

**Deliverables:**
- Fully functional CRUD for documents.
- Passing test suite (unit + integration + basic E2E).
- `API_DOCS.md` documenting endpoints.

**Timeline:** Weeks 3–4

---

## Phase 3: Local Mock Authentication & User Context
**Objectives:**  
Introduce a simple local authentication mechanism to test protected routes without involving external providers. Users can be created and managed locally to simulate real authentication scenarios.

**Tasks:**
1. **Local User Model & Mock Auth:**
   - Implement a user model with local storage (username/password).
   - Add routes for signup/login/logout (purely local).
   - Protect certain document routes so they require a valid session/token.
2. **Frontend Auth Integration:**
   - Basic login page (username/password).
   - Dashboard that requires being logged in.
3. **Testing:**
   - Unit tests for auth services.
   - Integration tests for protected routes.
   - E2E tests to ensure a user can log in and access their documents.

**Deliverables:**
- Local mock authentication working.
- Auth-protected endpoints functional and testable.
- Documentation of the auth flow in `AUTH_TESTING.md`.

**Timeline:** Weeks 5–6

---

## Phase 4: Advanced Document Editor (Multi-Chapter Form)
**Objectives:**  
Expand the document creation/editing interface into a multi-chapter, collapsible form with autosave, validation, and navigation. Focus on usability and data integrity before integrating external complexities.

**Tasks:**
1. **Form Structure & Validation:**
   - Implement a React-based form with 10 collapsible chapters.
   - Client-side and server-side validation.
   - Autosave on field changes (debouncing requests).
2. **Form Navigation & Drafts:**
   - Users can navigate between chapters without losing data.
   - Backend supports partial updates (e.g., `PATCH /documents/:id`).
3. **Testing:**
   - Unit tests for form components.
   - E2E tests for chapter navigation, validation, and autosave behavior.

**Deliverables:**
- Complex multi-chapter form with autosave and validation.
- Stable tests verifying form integrity and user experience.

**Timeline:** Weeks 7–9

---

## Phase 5: AI Integration for Document Generation
**Objectives:**  
Integrate OpenAI GPT API to generate documents after all other core features are stable. Maintain a reliable process with queues, rate limiting, and error handling.

**Tasks:**
1. **Prompt Configuration:**
   - Define prompts in separate config files for versioning and clarity.
   - Optimize prompts for token usage and clarity.
2. **AI Endpoints & Queueing:**
   - `POST /documents/:id/generate` to initiate AI-driven generation.
   - Implement a queue system (e.g., BullMQ) for asynchronous generation.
   - Add rate limiting, retries, and error handling.
3. **Frontend Integration:**
   - “Generate” button in the document editor.
   - Progress indicators, loading states, and error feedback.
4. **Testing:**
   - Mock the OpenAI API in tests.
   - Verify prompt correctness, error scenarios, and performance.
   - E2E tests for the generation workflow.

**Deliverables:**
- AI-powered document generation endpoint.
- Integrated front-end interface with progress tracking.
- Test coverage for error handling and performance.

**Timeline:** Weeks 10–11

---

## Phase 6: File Management & Dashboard Integration
**Objectives:**  
Allow users to view generated documents, download them, regenerate if necessary, and manage files via cloud storage.

**Tasks:**
1. **Cloud Storage Setup:**
   - Integrate AWS S3 or Google Cloud Storage for storing generated documents.
   - Add `GET /documents/:id/download` endpoint.
2. **Dashboard Enhancements:**
   - Display a list of generated documents with metadata (name, date).
   - Actions: download, regenerate, delete.
3. **Testing:**
   - Integration tests for file storage handling (mock S3).
   - E2E tests for dashboard interactions.

**Deliverables:**
- Feature-rich dashboard integrating file management.
- Reliable tests and mocking strategies for storage.

**Timeline:** Week 12

---

## Phase 7: Performance, Port Validation & Comprehensive Testing
**Objectives:**  
Optimize performance, re-check port configurations and environment variables, ensure stable local testing flows, and verify that everything works seamlessly before introducing external auth.

**Tasks:**
1. **Full Test Run & Optimization:**
   - Run full suite of unit, integration, and E2E tests.
   - Identify and fix performance bottlenecks (queries, caching, bundle sizes).
2. **Port & Env Verification:**
   - Confirm that local ports and environments are well documented and still correct.
   - Ensure OAuth callback URLs can be easily integrated later.
3. **Error Handling & Monitoring Setup:**
   - Add error boundaries on the frontend.
   - Improve logging and debugging capabilities.

**Deliverables:**
- Optimized, fully tested, and stable application.
- Verified environment and port configurations documented clearly.

**Timeline:** Weeks 13–14

---

## Phase 8: Integrate Google OAuth (Only After Stable Core)
**Objectives:**  
Now that the application is stable, integrate Google OAuth for a production-ready authentication flow. This ensures minimal friction during earlier testing phases.

**Tasks:**
1. **Google OAuth Setup:**
   - Add environment variables for Google OAuth Client ID/Secret.
   - Implement Google login routes and callback endpoints.
   - Update the frontend to use Google Sign-In as an option.
2. **User Session & Security:**
   - Ensure secure token handling.
   - Update protected endpoints to accept Google-authenticated sessions.
3. **Testing:**
   - Manual tests to confirm smooth Google login.
   - Integration tests using test domains or local tunneling.
   - Validate that local testing is still possible with mock auth (fallback).

**Deliverables:**
- Fully integrated Google OAuth.
- Dual-mode auth: Google in production, mock/local auth for testing.
- Updated `AUTH_TESTING.md` with instructions on how to test both local and Google auth flows.

**Timeline:** Week 15

---

## Phase 9: Deployment & Continuous Improvement
**Objectives:**  
Deploy the application, establish continuous delivery pipelines, and gather user feedback for future enhancements.

**Tasks:**
1. **Production Deployment:**
   - Deploy frontend (Vercel/Netlify) and backend (AWS/GCP).
   - Use managed database (MongoDB Atlas/PostgreSQL service).
2. **CI/CD Pipeline:**
   - Automated builds, tests, and deployments on main branch merges.
3. **Monitoring & Feedback:**
   - Set up monitoring (Sentry, logs).
   - Collect user feedback and create a feature backlog.
4. **Future Enhancements:**
   - Collaboration features, multilingual support, analytics.

**Deliverables:**
- Production-ready, hosted application.
- Feedback mechanism and prioritized backlog.

**Timeline:** Week 16 and beyond

---

## Key Highlights
- **Delayed External Auth:**  
  Local mock auth first, stable testing environment, then integrate Google OAuth late in the process. This prevents blockers early on.
  
- **Clear Port & Env Setup:**  
  All environment variables and ports are documented early to avoid confusion later.

- **Test-Driven at Each Stage:**  
  Every feature includes unit, integration, and E2E tests to catch issues early and maintain confidence.

- **Phased AI Integration:**  
  Only introduce AI after stable CRUD and form handling are implemented, reducing complexity in initial stages.

By following this roadmap, you ensure a stable, testable application at every stage, minimizing the risk of getting stuck on authentication or port configuration issues before the core system is fully functional.

