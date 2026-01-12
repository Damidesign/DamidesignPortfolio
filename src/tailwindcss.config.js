/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← Fixed: ** for recursive, no extra /
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
