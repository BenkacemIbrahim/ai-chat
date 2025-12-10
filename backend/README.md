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
