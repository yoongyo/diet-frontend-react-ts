module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#f1f3f5'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
