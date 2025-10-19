/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "type-normal",
    "type-fire",
    "type-water",
    "type-electric",
    "type-grass",
    "type-ice",
    "type-fighting",
    "type-poison",
    "type-ground",
    "type-flying",
    "type-psychic",
    "type-bug",
    "type-rock",
    "type-ghost",
    "type-dragon",
    "type-dark",
    "type-steel",
    "type-fairy",
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          blue: "#3B82F6",
          red: "#EF4444",
          yellow: "#F59E0B",
          green: "#10B981",
        },
      },
    },
  },
  plugins: [],
};
