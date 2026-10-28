/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-dark': '#121E15',
        'forest-surface': '#1A2C1F',
        'forest-border': '#273E2E',
        'wood-gold': '#C99B63',
        'wood-dark': '#B0824B',
        'wood-light': '#F5EBD9',
        'eco-green': '#2ECC71',
      },
      fontFamily: {
        title: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
