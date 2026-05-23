# Mercato Pratola Centrale

Showcase website for **Mercato Pratola Centrale — Ristorante e Lounge Bar**.

## Stack

- React 19 + Vite
- Bootstrap 5 (grid, navbar, forms, cards)
- CSS Modules + shared global styles for brand theming
- Single-page app with three scroll sections

## Sections

1. **Home** — Hero, tagline, introduction, CTAs
2. **Menu** — Food & lounge bar menu by category
3. **Contact** — Hours, address, map placeholder, reservation form

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.jsx
├── main.jsx
├── data/
│   └── menuData.js
├── styles/
│   ├── variables.css
│   └── global.css
└── components/
    ├── Navbar/
    ├── Hero/
    ├── Menu/
    ├── MenuItem/
    ├── Contact/
    ├── ContactForm/
    ├── SectionHeading/
    └── Footer/
```
