# CrackerBill — Fire Cracker Retail Billing Software (website)

Marketing site for a fire cracker retail billing & barcode inventory
console. Plain static HTML/CSS/JS — no build step, no framework.

**Contact:** 9500373594

## Structure

```
.
├── index.html              Single-page site (hero, features, how it works,
│                            screenshots, pricing, contact)
├── css/style.css            Design tokens + all styling
├── js/main.js                Hero spark animation, screenshot tabs, scroll reveal
└── assets/screenshots/       Product screenshots used in the Screenshots section
```

## Run locally

No build tools needed. Either:

```bash
# open directly
open index.html          # macOS
xdg-open index.html      # Linux

# or serve it (recommended, avoids any file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

See `DEPLOY.md` for step-by-step GitHub Pages deployment instructions.
