/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../src/assets/images/hero_field.png')",
      },
      colors: {
        white: '#F3F3F3',
        'white-100': '#F8F2ED',
        'white-200': '#FBFBF9',
        'honey-gray': '#B5B5B5',
        'honey-black': '#131313',
        'honey-gray-100': '#646464'
      },
    },
  },
  plugins: [],
}

