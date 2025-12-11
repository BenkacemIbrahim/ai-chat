# AI Chat Application

Full‑stack AI chat platform combining a Laravel 11 REST API and a Next.js 15 client. It provides user authentication, message history, and AI responses powered by Groq.

## Project Structure

This monorepo contains both the backend API and the frontend client.

- `backend/`: Laravel 11 REST API (MySQL, Sanctum auth, Groq integration)
- `frontend/`: Next.js 15 client (Tailwind CSS, shadcn/ui)

## Key Features
- **⚡ Lightning Speed**: Powered by Groq API for near-instant AI responses.
- **🧠 Advanced Reasoning**: Leveraging generic LLM capabilities for complex problem solving.
- **🛡️ Enterprise Security**: Built with secure authentication and data protection standards.
- **🌐 Global Access**: Designed for multi-language support (backend capable).
- **🗣️ Voice Enabled**: Frontend interface supports voice interaction patterns.
- **💻 Developer Ready**: Clean API structure and modern tech stack.

## Prerequisites

- PHP 8.2+
- Composer (latest)
- Node.js v20+
- MySQL 8.0 (or MariaDB)

## Getting Started

### 1. Database Setup
Create a MySQL database named `ai_chat`.
```sql
CREATE DATABASE ai_chat;
```

### 2. Backend Setup
Navigate to `backend` and follow the [Backend README](./backend/README.md).

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

### 3. Frontend Setup
Navigate to `frontend` and follow the [Frontend README](./frontend/README.md).

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

By default the client calls `http://localhost:8000` for API requests.

## Workspace Scripts

- Backend: `composer install`, `php artisan migrate`, `php artisan serve`
- Frontend: `npm run dev`, `npm run build`, `npm run lint`

## Architecture Overview

- Authentication: Laravel Sanctum issues bearer tokens on login and registration. The frontend stores `auth_token` and includes it as `Authorization: Bearer <token>` for protected routes
  - Routes: `backend/routes/api.php:1`
- Messages: User messages are stored in `messages` and exposed via a paginated API
  - Controller: `backend/app/Http/Controllers/MessageController.php:1`
- Chat: Requests are proxied to Groq and the assistant reply is persisted alongside the user message
  - Controller: `backend/app/Http/Controllers/ChatController.php:1`
  - Service: `backend/app/Services/GroqService.php:1`
- CORS: Configured to allow the local Next.js dev origin and credentials
  - Config: `backend/config/cors.php:1`

## Environment Configuration

Backend `.env` (minimum):

- `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
- `GROQ_API_KEY` (required)
- Optional Groq overrides: `GROQ_BASE_URI`, `GROQ_CHAT_PATH`, `GROQ_DEFAULT_MODEL` (defaults in `backend/config/services.php:1`)

Frontend `.env.local`:

- Provide the backend URL if you change it from the default `http://localhost:8000`

## API Overview

Detailed API documentation lives in [backend/README.md](./backend/README.md#api-reference), including authentication flow, endpoints, parameters, and example payloads.

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
