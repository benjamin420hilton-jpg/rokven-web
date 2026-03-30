/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0a0c0e',
        'surface': '#0f1215',
        'border': '#1e2328',
        'accent': '#c8f542',
        'accent2': '#4af0c4',
        'muted': '#3a4048',
        'text-main': '#e8eaed',
        'text-dim': '#6b7480',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}