---

## Deployment (Vercel)

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option 2 — Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Vite — no build settings needed
5. Click **Deploy**

> `vercel.json` is already configured to redirect all routes to `index.html` so React Router works correctly in production.

---

## Data Layer

All content lives in `src/data/mockData.js`. It exports:

- `COURSES` — kitesurfing, windsurfing, and wing foiling courses with pricing
- `EQUIPMENT_RENTALS` — hourly/daily rental options per sport
- `CAMPS` — 7-day camp packages with full inclusions
- `SERVICES_LIST` — overview cards for each sport/service
- `BLOG_POSTS` — articles with metadata
- `TESTIMONIALS` — student reviews
- `STATS` — headline numbers
- `INSTRUCTORS` — instructor profiles

To connect a backend, replace these exports with API calls.

---

## License

MIT