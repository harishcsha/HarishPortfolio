# Harish C Jingade — Portfolio Website

A fully responsive React.js portfolio with parallax scrolling, video hero, dark/light theme, and an interactive gallery with lightbox.

## Tech Stack
- **React 19** + Vite 8
- **CSS Custom Properties** for theme tokens (no CSS-in-JS)
- **IntersectionObserver** for scroll-triggered animations
- **Custom hooks** for smooth parallax & mouse tracking

## Project Structure
```
src/
├── assets/images/         # profile.png, hero_bg1.png, hero_bg2.png
├── components/
│   ├── Nav/               # Responsive nav with mobile drawer
│   ├── Hero/              # Video hero with parallax + sound controls
│   ├── About/             # About section
│   ├── Experience/        # Accordion cards
│   ├── Gallery/           # Albums + lightbox with swipe support
│   ├── Skills/            # Skill group cards
│   ├── Education/         # Education + awards
│   ├── Contact/           # Contact section
│   ├── Footer/            # Footer
│   └── common/            # ThemeToggle
├── context/
│   └── ThemeContext.jsx    # Dark/light theme state
├── data/
│   └── portfolio.js       # All content: experience, skills, gallery albums
├── hooks/
│   └── useParallax.js     # useScrollY, useMouseParallax, useInView
├── styles/
│   └── globals.css        # Design tokens, theme vars, shared utilities
├── App.jsx
└── main.jsx
```

## Getting Started
```bash
npm install
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build to dist/
npm run preview    # Preview production build
```

## Swap Your Own Video
Open `src/components/Hero/Hero.jsx` and replace:
```jsx
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
```
with:
```jsx
<source src="/your-video.mp4" type="video/mp4" />
```
Put your video file in the `public/` folder.

## Add Real Gallery Images
In `src/data/portfolio.js`, replace the `picsum.photos` URLs in each album's `images` array with your own image paths. Use `src/assets/images/` for bundled images, or `public/` for direct file references.

## Theme
Dark/light theme is stored in `localStorage` under `hcj-theme`. Toggle via the button in the navbar.
