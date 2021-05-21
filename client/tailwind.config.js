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
        'cvrse-red': '#B44545',
        'cvrse-green': '#219589',
        'dashboard-bg': '#f4f8fb',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
