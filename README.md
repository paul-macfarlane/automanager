# Automanager

Application for automating not-so-fun managerial tasks. The first task that will be automated is roadmap generation.

## Tech Stack

- Next.js App Router
- Tailwind
- ShadCN
- Turso/Lib SQL
- DrizzleORM

## Running Locally

1. Download [Node.js](https://nodejs.org/en/download)
2. Install [Turso CLI](https://docs.turso.tech/cli/installation)
3. Install dependencies `npm install`
4. Run the database `npm run db:local`
5. Copy `.env.example` to `.env` (`cp .env.example .env`)
6. Run the database migrations `npm run db:migrate`
7. Run the app `npm run dev` which will run it at http://localhost:3000

To inspect the database you can run `npm run db:studio` to view drizzle studio.
