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

## Scripts
- `npm run dev`: Runs the development server
- `npm run build`: Builds the application for production
- `npm start`: Starts the production server
- `npm run lint`: Runs ESLint
