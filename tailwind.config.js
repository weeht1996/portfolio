/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        scale: 'calc(2vw)',
      },
      fontSize: {
        clamp: 'calc(24px - 1.2vmin)',
      },
    },
  },
  plugins: [],
}
