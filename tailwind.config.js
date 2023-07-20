/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "920px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: "Manrope",
      },
      colors: {
        primary: "#01174F",
        grey: "#787878",
        secondary: "#556489",
        lightBlue: "#00C5FF",
        border: "#DBDBDB",
        primaryBg: "#E3F0FF",
        buttonPrimary: "#0070C0"
      },
      backgroundImage: {
        'home-back': "url('/images/general/home-back.png')",
      }
    },
    fontFamily: {
      spartan: ["Spartan", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 30px",
          // "@screen sm": {
          //   maxWidth: "520px",
          // },
          // "@screen md": {
          //   maxWidth: "880px",
          // },
          // "@screen lg": {
          //   maxWidth: "1300px",
          // },
          // "@screen xl": {
          //   maxWidth: "1400px",
          // },
          "@screen 2xl": {
            maxWidth: "1800px",
          margin: '0 auto',

          },
        },
        ".button-primary-gradient": {
          background: "linear-gradient(142deg, #02BCF3 31.68%, #DF1BA7 78.47%)"
        },
        ".shadow-primary": {
          boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)"
        },
        ".card-shadow": {
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        },
      });
    },
  ],
}

