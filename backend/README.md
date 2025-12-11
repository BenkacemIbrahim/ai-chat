# AI Chat Backend

The RESTful API for the AI Chat application, built with Laravel 11.

## Features
- **High-Performance AI**: Integrated with **Groq API** for lightning-fast inference.
- **Authentication**: Laravel Sanctum (Token based)
- **Database**: MySQL with Eloquent ORM
- **API Resources**: Users, Messages
- **Real-time**: (Planned/Implemented features)

## Installation

1. **Install Dependencies**
   ```bash
   composer install
   ```

2. **Environment Configuration**
   Copy the example environment file and configure your database and Groq credentials.
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set:
   - Database: `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
   - Groq API: `GROQ_API_KEY` (Get one from [Groq Console](https://console.groq.com))
   - Optional Groq overrides: `GROQ_BASE_URI`, `GROQ_CHAT_PATH`, `GROQ_DEFAULT_MODEL`


3. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

4. **Run Migrations**
   Create the database tables.
   ```bash
   php artisan migrate
   ```

5. **Start Dev Server**
   ```bash
   php artisan serve
   ```
   The API will be available at `http://localhost:8000`.

## Directory Structure
- `app/Models`: Eloquent models (User, Message)
- `app/Http/Controllers`: API Logic
- `routes/api.php`: API Route definitions

## Configuration

- CORS: `backend/config/cors.php:1` allows local development origins and supports credentials
- Groq service defaults: `backend/config/services.php:1`
- Sanctum middleware: `backend/bootstrap/app.php:1`

## API Reference

Base URL: `http://localhost:8000/api`

Authentication

- Scheme: Bearer token (Sanctum)
- Obtain a token via `/login` or `/register`
- Send header `Authorization: Bearer <token>` to access protected endpoints

Endpoints

- POST `/register`
  - Body: `{ "name": string, "email": string, "password": string }`
  - Response: `{ "user": UserResource, "token": string }`
  - Controller: `backend/app/Http/Controllers/AuthController.php:14`

- POST `/login`
  - Body: `{ "email": string, "password": string }`
  - Response: `{ "user": UserResource, "token": string }`
  - Controller: `backend/app/Http/Controllers/AuthController.php:41`

- POST `/logout` (auth required)
  - Header: `Authorization: Bearer <token>`
  - Response: `{ "message": "Logged out" }`
  - Controller: `backend/app/Http/Controllers/AuthController.php:59`

- GET `/me` (auth required)
  - Response: `UserResource`
  - Controller: `backend/app/Http/Controllers/AuthController.php:65`

- GET `/messages` (auth required)
  - Query: `per_page` (optional, integer 1–200)
  - Response: `{ "data": Message[], "meta": { total, per_page, current_page, last_page } }`
  - Controller: `backend/app/Http/Controllers/MessageController.php:1`
  - Validation: `backend/app/Http/Requests/MessagesIndexRequest.php:1`

- POST `/messages` (auth required)
  - Status: Not implemented (returns 404)
  - Controller: `backend/app/Http/Controllers/MessageController.php:28`

- POST `/chat` (auth required)
  - Body: `{ "userId": number, "message": string }`
  - Response: `{ "userMessage": Message, "assistantMessage": Message | null }`
  - Errors: `422` with `{ error: { status, message, type, code } }` if Groq call fails
  - Controller: `backend/app/Http/Controllers/ChatController.php:12`
  - Service: `backend/app/Services/GroqService.php:1`
  - Validation: `backend/app/Http/Requests/ChatRequest.php:1`

Models

- `UserResource`: `backend/app/Http/Resources/UserResource.php:1`
- `Message`: `backend/app/Models/Message.php:1`

Example

Request:

```http
POST /api/chat HTTP/1.1
Host: localhost:8000
Authorization: Bearer <token>
Content-Type: application/json

{ "userId": 1, "message": "Explain WebSockets in one paragraph." }
```

Success Response:

```json
{
  "userMessage": { "id": 123, "user_id": 1, "role": "user", "content": "Explain WebSockets in one paragraph.", "model": null },
  "assistantMessage": { "id": 124, "user_id": 1, "role": "assistant", "content": "WebSockets provide...", "model": "llama-3.3-70b-versatile" }
}
```

Error Response:

```json
{
  "userMessage": { "id": 123, "user_id": 1, "role": "user", "content": "Explain WebSockets in one paragraph.", "model": null },
  "assistantMessage": null,
  "error": { "status": 401, "message": "Invalid API key", "type": "invalid_api_key", "code": "401" }
}
```

## Testing

- PHPUnit config: `backend/phpunit.xml:1`
- Example test: `backend/tests/Feature/ExampleTest.php:1`
