# BANBAN Landing — Quick Start

## Static

1. Copy `static/` folder into a web server or open `index.html` in the browser.
2. Place images in `/assets/`:
   - `logo.png` (top-left)
   - `graduation.png` (hero image)

## React (Vite)

1. Create a Vite React project: `npm create vite@latest banban -- --template react`
2. Replace `index.html`, `src/main.jsx`, `src/App.jsx`, and `src/styles.css` with the files above.
3. `npm install` then `npm run dev`.

---

# Notes
- I used Tailwind CDN for quicker prototyping (so no build step required for the static version).
- Assets are referenced under `/assets/`; replace them with your assets for the final look.
- The React version includes the same layout and animation logic using `IntersectionObserver`.
