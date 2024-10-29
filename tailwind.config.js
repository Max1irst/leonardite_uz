/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../src/assets/images/hero_field.png')",
      },
      colors: {
        'honey-yellow': '#FDF3D1',
        'sun-flower': '#F6C746',
        'honey-gray': '#E5E7E9'
      },
    },
  },
  plugins: [],
}

