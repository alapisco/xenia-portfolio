/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
    extend: {
      colors: {
        brand: {
          bg: '#5A4E69', // purple
          accent: '#E8BFD8', // light pink
          text: '#ffffffff', // soft white
        },
      },
      boxShadow: {
        soft: '0 6px 16px rgba(90,78,105,0.08)',
      },
    },
  },
  plugins: [],
};
