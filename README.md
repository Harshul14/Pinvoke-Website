# Pinvoke – Smart Credit Card Widgets & Alarms

## 📖 Project Overview
**Pinvoke** is a modern, glass‑morphic web‑site that showcases the Android application *Pinvoke*. The site demonstrates the app’s core value‑propositions – interactive home‑screen widgets, persistent lock‑screen alarms, and privacy‑first local data storage – using a sleek, responsive UI built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **React**.

The website is fully **static‑site‑generated** (SSG) and can be deployed to Vercel, Netlify, or any static‑hosting platform. It also serves as a showcase for:
- Advanced UI animations (smooth scrolling, entrance fades, glassmorphism).
- A clean component architecture (Navbar, Footer, Hero, Features, Gallery, About, TechStack, CTA).
- Integrated **Privacy Policy** and **Terms & Conditions** pages that are automatically linked from the footer.
- A custom favicon and branding icon that matches the app logo.

---

## ✨ Key Features
- **Dynamic Navbar** that shrinks on scroll and uses the Pinvoke logo.
- **Hero section** with CTA buttons that smoothly scroll to the *Powerful Features* section.
- **Feature grid** with animated cards, icons, and descriptive text.
- **Gallery** with screenshots of the Android app.
- **Responsive design** with dark‑mode colors, glass‑like translucency, and micro‑animations.
- **Privacy Policy & Terms** pages rendered from markdown files.
- **Smooth scrolling** (via `html { scroll-behavior: smooth; }`).
- **SEO‑optimised metadata** (title, description, icons) in `layout.tsx`.

---

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-------------|
| Framework | **Next.js 14** (app router) |
| Styling | **Tailwind CSS** with custom theme variables |
| Animations | **Framer Motion** |
| Icons | **Lucide‑react**, custom PNG/WebP assets |
| Fonts | **Google Fonts – Inter** (via Next.js) |
| Language | **TypeScript** (tsx components) |
| Build | **Vite** (via Next.js) |
| Deployment | Vercel / Netlify / static hosting |

---

## 📂 Repository Structure
```
Pinvoke-Website/
├─ public/                # Static assets (images, favicon)
│   ├─ images/            # App logo & screenshots
│   └─ ...
├─ src/
│   ├─ app/               # Next.js app router (layout, pages)
│   │   ├─ privacy/       # Privacy Policy page
│   │   └─ terms/         # Terms & Conditions page
│   ├─ components/        # Re‑usable UI components
│   │   ├─ Navbar.tsx
│   │   ├─ Footer.tsx
│   │   ├─ Hero.tsx
│   │   ├─ Features.tsx
│   │   ├─ Gallery.tsx
│   │   ├─ About.tsx
│   │   ├─ TechStack.tsx
│   │   └─ CTA.tsx
│   └─ globals.css        # Tailwind + custom utilities (smooth scroll, glass)
├─ README.md              # <-- you are reading this file
└─ package.json
```

---

## 🚀 Getting Started (Local Development)
### Prerequisites
- **Node.js ≥ 20** (LTS) and **npm ≥ 10** (or **yarn**/**pnpm** if you prefer)
- Git client

### Clone the repository
```bash
# HTTPS
git clone https://github.com/Harshul14/Pinvoke-Website.git
# or SSH
# git clone git@github.com:Harshul14/Pinvoke-Website.git
```

### Install dependencies
```bash
cd Pinvoke-Website
npm install   # or `yarn` / `pnpm install`
```

### Run the development server
```bash
npm run dev   # Next.js starts on http://localhost:3000
```
Open the URL in your browser – you should see the landing page with the animated Navbar, Hero, and all sections.

### Build for production
```bash
npm run build   # Generates a `.next` folder with static assets
npm start       # Serves the production build locally
```

### Deploy (quick Vercel example)
```bash
# Install the Vercel CLI if you haven't already
npm i -g vercel
vercel login               # authenticate
vercel                     # follow the prompts, it will auto‑detect a Next.js project
```
The site will be live at a generated `*.vercel.app` domain. You can connect a custom domain in the Vercel dashboard.

---

## 📜 Usage Guide
- **Navigation**: The top NavBar contains the Pinvoke logo and links (`Features`, `Gallery`, `About`, `Tech`). Clicking **Get Started** or **Learn More** scrolls smoothly to the *Powerful Features* section.
- **Footer**: Provides quick links to the *Privacy Policy* and *Terms & Conditions* pages.
- **Responsive**: Layout collapses gracefully on mobile – the NavBar switches to a hamburger‑style menu (currently hidden but easy to extend).

---

## 🛠️ Development Tips
- **Adding a new component**: Create a `.tsx` file in `src/components/`, export a default function, and import it where needed (e.g., inside `PageContent`).
- **Styling**: Use Tailwind utility classes. For custom utilities (glass, scroll‑behavior) edit `src/globals.css`.
- **Animations**: Wrap elements with `<motion.div>` from `framer-motion`. Adjust `initial`, `animate`, and `transition` props for entrance effects.
- **SEO**: Update `metadata` in `src/app/layout.tsx` – add `title`, `description`, and an array of icons for different `sizes`.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome‑thing`).
3. Commit your changes with clear messages.
4. Open a Pull Request targeting `main`.
5. Ensure the CI builds the project (`npm run build`).

---

## 📄 License
This project is released under the **MIT License** – feel free to use, modify, and distribute it.

---

## 📞 Contact
**Harshul Varshney** – [developer.harshul@gmail.com](mailto:developer.harshul@gmail.com)

---

*Happy coding, and enjoy showcasing Pinvoke!*
