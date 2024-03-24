/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./news.html",
    "./news_open.html",
    "./profile.html"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange': '#FD7C58',
      'text': '#242629',
      'blue': '#02409F',
      'blue-button': '#4170B7',
      'blue-light': '#E6F2FF',
      'purple': '#866FA1',
      'coral': '#C2767D',
      'gray': '#AAAAAA',
    },
  },
  plugins: [],
}

