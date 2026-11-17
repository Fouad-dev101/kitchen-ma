# Kitchen.ma – Website concept

A fast, responsive, French-language website concept for **Kitchen.ma**, a custom-kitchen maker (cuisiniste) in Casablanca, Morocco.
Built with plain HTML, CSS and JavaScript: no framework, no build step.

> **Status:** demo / pitch build. Not affiliated with Kitchen.ma. Visuals are generated placeholder illustrations to be replaced with real project photos.

**Live demo:** https://YOUR-USERNAME.github.io/kitchen-ma/

## Features

- Sticky navigation with blur on scroll and anchor links to every homepage section
- Mobile burger menu with a full-height tray sliding in from the right
- Hero with glass-effect quote form (`bg-white/5` + backdrop blur)
- Sections: services, why us, portfolio, reviews, contact, final CTA
- Dedicated pages (services, portfolio, reviews, contact, privacy policy) using a tiny hash router, so it works on static hosting
- Quote form sends the project details to WhatsApp (no backend)
- Page-load fade-up animation, scroll reveals, hover micro-interactions
- Light/dark aware colours, `prefers-reduced-motion` respected, safe-area insets for phones
- Placeholder kitchen illustrations generated in SVG (see `K()` in `assets/js/main.js`)

## Project structure

```
.
├── index.html            # markup for all views
├── assets/
│   ├── css/style.css     # design tokens, layout, animations
│   └── js/main.js        # content data, form, nav tray, router
├── .nojekyll
├── .gitignore
└── README.md
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on GitHub Pages

1. Push to a repository named `kitchen-ma`.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.
3. Your site goes live at `https://YOUR-USERNAME.github.io/kitchen-ma/`.

## Customise

| What | Where |
| --- | --- |
| Phone, address, hours | `INFO` and the footer in `index.html` / `main.js` |
| WhatsApp number | `wa.me/...` in `assets/js/main.js` |
| Services, process, projects, reviews | `SV`, `ST`, `WK`, `RV` arrays in `assets/js/main.js` |
| Colours | CSS variables at the top of `assets/css/style.css` |
| Real photos | replace `K(i)` calls with `<img>` tags (use `loading="lazy"`) |

## Tech

HTML5 · CSS3 (custom properties, grid, backdrop-filter) · Vanilla JS · Google Fonts (Cormorant Garamond, Figtree)

## Author

Fouad Sabbani – full-stack developer, Al Hoceima, Morocco
GitHub: [@Fouad-dev101](https://github.com/Fouad-dev101)
