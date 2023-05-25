/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/src/images/mobile-hero.jpg')",
        "hero-tablet": "url('/src/images/tablet-hero.jpg')",
        "hero-desktop": "url('/src/images/desktop-hero.jpg')",
        "benefits-banner": "url('/src/images/kingship banner.jpg')",
      },
    },
  },
  plugins: [],
};
