/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  darkMode: "class", // keep dark mode support
  // tailwind.config.js
theme: {
  fontFamily: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui'],
  },
}
,
  plugins: [],
};
