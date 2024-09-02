/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#eaeefb',
        'soft-grey': '#f6f6f6',
      },
    },
  },
  plugins: [],
}

