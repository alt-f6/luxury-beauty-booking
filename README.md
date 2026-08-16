# Luxury Beauty Booking

A mobile-first booking funnel built for a premium hair colour studio in Baku. Clients pick a service and hair length, leave their contact details, and land straight in WhatsApp to confirm, while the studio gets an instant Telegram notification.

Live product, not a demo: real client data, real WhatsApp handoff, real studio ops behind it.

## Highlights

- Three-step guided booking flow with animated transitions and zero reloads
- Bilingual experience (Azerbaijani / Russian) with instant, layout-stable language switching
- Light and dark themes, persisted per visitor
- WhatsApp deep link generated from the booking, prefilled and ready to send
- Telegram notification pushed to the studio on every submission
- Fully responsive, tuned for one-handed mobile use

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript (strict mode)
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

Without these, `POST /api/book` still responds successfully but simulates the Telegram push instead of sending it, which keeps local development friction-free.

## Deployment

Ships on Vercel with zero configuration. After importing the repository, set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the project's Environment Variables settings.

## Scripts

- `npm run dev` start the dev server
- `npm run build` production build
- `npm run start` run the production build
- `npm run lint` run ESLint
