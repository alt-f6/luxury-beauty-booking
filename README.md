# Chingiz Sharifov — Booking App

Mobile-first booking funnel for a hair colour studio in Baku. Client picks a service and hair
length, leaves contact details, and gets routed to WhatsApp to confirm — with a Telegram
notification sent to the studio on submit.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript (strict)
- Tailwind CSS v4
- Framer Motion, canvas-confetti, lucide-react

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` (see `.env.example`):

```
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

Without these, `POST /api/book` still responds successfully but simulates the Telegram push
instead of sending it — useful for local development without live credentials.

## Deploy

Deploys on Vercel out of the box — no `vercel.json` needed. After importing the repo, set
`TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the project's Environment Variables settings
(without them the booking API simulates success instead of notifying Telegram).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
