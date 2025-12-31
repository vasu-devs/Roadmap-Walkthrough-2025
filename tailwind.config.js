/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        background: '#ffffff',
        primary: '#10b981', // Emerald 500 (Kept as accent)
        secondary: '#52525b', // Zinc 600 (Darker for light mode visibility)
        tertiary: '#f4f4f5', // Zinc 100 (Subtle backgrounds)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
