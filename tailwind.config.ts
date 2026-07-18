import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./animations/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extracted from the Keynote (.key) source
        cream: "#F7F6F1",
        "cream-deep": "#EFEDE3",
        ink: "#151310",
        "ink-soft": "#2A2620",
        muted: "#8A857B",
        gold: "#C8912E",
        "gold-bright": "#F8BA00",
        "gold-soft": "#E0B458",
      },
      fontFamily: {
        // Cinzel headings + Lato body + Caveat handwriting + Playfair italic accents
        serif: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-lato)", "Lato", "Helvetica", "Arial", "sans-serif"],
        accent: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        hand: ["var(--font-caveat)", "Caveat", "cursive"],
        sign: ["var(--font-gincu)", "Caveat", "cursive"],
      },
      letterSpacing: {
        nav: "0.18em",
        kicker: "0.32em",
      },
      transitionTimingFunction: {
        // Apple Keynote default "cinematic" ease
        keynote: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
