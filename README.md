# Puku Design System

Design tokens, components and usage guidance for Puku, built with Claude.

**Live site:** https://mdaslamalrabbi-del.github.io/My-Component-Project/

## What's in this folder

```
My-Component-Project/
├── index.html            ← the design system website (start here)
├── assets/
│   ├── css/style.css     ← site styles, light and dark themes
│   └── js/app.js         ← site behavior, component previews and data
├── components/           ← source code for 71 components, ready to copy
│   ├── react/            ← React / Next.js (.tsx)
│   ├── react-native/     ← React Native (.tsx)
│   ├── flutter/          ← Flutter (.dart)
│   └── vue/              ← Vue 3 (.vue)
├── .nojekyll             ← tells GitHub Pages to serve files as they are
└── README.md
```

The website is fully static: plain HTML, CSS and JavaScript, with no build step and no server code. The only outside request is the Inter and JetBrains Mono fonts from Google Fonts.

See [`components/README.md`](components/README.md) for the list of every component and its files.

## Deploy it on your own hosting

Upload these to your hosting's public folder (often `public_html` or `www`), keeping the folder structure exactly as it is:

- `index.html`
- the `assets/` folder

That's all the website needs. The `components/` folder is for developers and doesn't need to be uploaded.

### Common hosts

- **cPanel / shared hosting:** open File Manager, go to `public_html`, upload `index.html` and the `assets` folder.
- **Netlify:** drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel:** import this GitHub repository; framework preset "Other", no build command, output directory `.`.
- **GitHub Pages:** already set up. It updates automatically every time `main` changes.

## Preview on your computer

Double-click `index.html`, or run a small local server from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
