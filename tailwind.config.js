/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#5A4E69', // purple
          accent: '#E8BFD8', // light pink
          text: '#FFF9F5', // soft white
        },
      },
      boxShadow: {
        soft: '0 6px 16px rgba(90,78,105,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
    container: { center: true, padding: '1rem' },
  },
  plugins: [],
};
