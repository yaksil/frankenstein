module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'yeseva': ['"Yeseva One"', 'mono'],
        'curse': ['Elephant', 'mono'],
        'roboto': ['Roboto', 'serif'],
      },
      colors: {
        'curse-red': '#B44545',
        'curse-green': '#219589'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
