/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          gold: '#D4AF37', // Custom premium gold accent
          navy: '#0B192E', // Deep navy
          dark: '#121212', // Premium dark background
          lightDark: '#1E1E1E', // Lighter container dark
          gray: '#8E8E93', // Muted text gray
          light: '#F8F9FA', // Light text or background
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
