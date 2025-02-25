/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm-landscape': { raw: '(max-width: 950px) and (orientation: landscape)' },
        xs: '420px',
      },
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
