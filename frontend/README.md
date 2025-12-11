# AI Chat Frontend

The modern web client for the AI Chat application, built with Next.js 15.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **AI Integration**: Vercel AI SDK

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Environment Configuration**
   Copy the example environment file.
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` to match your backend URL (default `http://localhost:8000`) and add any necessary API keys.

   Notes:
   - The client currently calls `http://localhost:8000` directly in hooks and components (see `frontend/hooks/use-auth.tsx:28` and `frontend/components/chat/authenticated-chat.tsx:64`). If you change the backend URL, update these references or provide an environment variable and refactor accordingly.

3. **Start Dev Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable UI components
- `lib/`: Utility functions and shared logic
- `hooks/`: Custom React hooks

Key Screens & Flows

- Authentication: Login and Signup using the backend API (`/api/login`, `/api/register`, `/api/me`)
  - Hook: `frontend/hooks/use-auth.tsx:50`
- Chat: Authenticated chat interface sends messages to the backend `/api/chat` and renders conversation history
  - Component: `frontend/components/chat/authenticated-chat.tsx:64`
- Documentation UI: Navigation and content components are present under `components/docs/*` for product documentation and guides
  - Navigation: `frontend/components/docs/docs-navigation.tsx:1`

## Scripts
- `npm run dev`: Runs the development server
- `npm run build`: Builds the application for production
- `npm start`: Starts the production server
- `npm run lint`: Runs ESLint

## Development Tips

- Ensure the backend is running at `http://localhost:8000` and that CORS allows `http://localhost:3000` (`backend/config/cors.php:1`)
- For local testing without authentication, you can browse the chat preview page; full chat requires login
- The Next.js route `app/api/chat/route.ts:1` demonstrates a server-side streaming integration using the Vercel AI SDK; the UI uses the Laravel backend by default
