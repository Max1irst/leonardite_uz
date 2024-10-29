/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../src/assets/images/hero_field.png')",
      },
      colors: {
        white: '#FFFBF0',
        'honey-yellow': '#FEDC7B',
        'sun-flower': '#FFCF00',
        'honey-gray': '#F2E2CE'
      },
    },
  },
  plugins: [],
}

