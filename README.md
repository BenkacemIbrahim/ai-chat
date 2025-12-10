# AI Chat Application

A full-stack AI Chat application built with a modern tech stack.

## Project Structure

This project is organized as a monorepo containing both the backend API and the frontend client.

- **backend/**: PHP Laravel 11 API (MySQL, Sanctum Auth, Groq API)
- **frontend/**: Next.js 15 Client (Tailwind CSS, shadcn/ui)

## Key Features
- **⚡ Lightning Speed**: Powered by Groq API for near-instant AI responses.
- **🧠 Advanced Reasoning**: Leveraging generic LLM capabilities for complex problem solving.
- **🛡️ Enterprise Security**: Built with secure authentication and data protection standards.
- **🌐 Global Access**: Designed for multi-language support (backend capable).
- **🗣️ Voice Enabled**: Frontend interface supports voice interaction patterns.
- **💻 Developer Ready**: Clean API structure and modern tech stack.

## Prerequisites

- **PHP**: 8.2 or higher
- **Composer**: Latest version
- **Node.js**: v20 or higher
- **MySQL**: 8.0 or MariaDB

## Getting Started

### 1. Database Setup
Create a MySQL database named `ai_chat`.
```sql
CREATE DATABASE ai_chat;
```
Or use the provided `setup.sql` if you are manually setting up tables (though Laravel migrations are preferred).

### 2. Backend Setup
Navigate to the `backend` directory and follow the [Backend README](./backend/README.md).

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

### 3. Frontend Setup
Navigate to the `frontend` directory and follow the [Frontend README](./frontend/README.md).

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
