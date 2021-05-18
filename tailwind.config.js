module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme)=> ({
      red: theme("color.red.primary")
    }),
    colors: {
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb"
      },
      blue: {
        medium: "#005c98"
      },
      black: {
        light: "#005c98",
        faded: "#00000059"
      },
      white: "#fffffff",
    },
    red: {
      primary: "#ad4956"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
