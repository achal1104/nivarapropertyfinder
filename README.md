# Nivara AI - AI Rental Property Finder (React + Vite + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/

## Structure
- src/lib/data.js - sample listings, chat STEPS, matching score, helpers
- src/components/ - Auth, App (chat), Cal (date picker), Card, Detail, ui
- src/index.css - Royal Plum theme (CSS variables) + Tailwind

## Demo data
Users, chats, bookings and the 12 sample listings live in the browser (localStorage / data.js).
Next: replace with Spring Boot REST (JWT, MySQL), OpenAI via backend, WhatsApp Cloud API + reminders, admin panel.
