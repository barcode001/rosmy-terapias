# Starter Template - React + Vite + Sass

This is my personal starter template for fast website builds. It includes:

- ⚛️ React
- ⚡ Vite
- 🎨 Sass support
- 📱 Responsive layout
- 🔄 Scroll animations (useScrollReveal)
- 📦 Clean folder structure with reusable components

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🔧 Build for Production

```bash
npm run build
```

## 🛠️ Customize

- Edit `/components` for Navbar, Footer, Hero, etc.
- Use `rem()` function in Sass for scalable sizing.
- Add animations with `useScrollReveal.js`.

---

## 📁 Structure
```
src/
├── assets/
├── components/
├── hooks/
├── pages/
├── styles/
└── main.jsx
```

## 📦 Deployed with Netlify
 
 ```bash
npm run build
netlify deploy --prod
```