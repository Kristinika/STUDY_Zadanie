/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./news.html",
    "./news_open.html",
    "./profile.html"
  ],
  theme: {
    extend: {
      classes: {
        'hyphens-auto': { hyphens: 'auto' },
      },
    },
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
    screens: {
      'tn': '370px',
      'lt': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

