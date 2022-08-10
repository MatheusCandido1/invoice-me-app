/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          main: "#ECEEF2",
          panel: "#F4F7FF"
        },
        dark: {
          main: "#060C2C"
        },
        gray: {
          dark: '#696C72',
          main: '#979BA4',
          lighter: '#fafcfe',
          light: '#bfc4d2',
          buttonBackground: '#f4f6fa'
        },
        primary: {
          dark: '#1F54CF',
          main: "#235EE7",
          light: "#7B9EF0",
          lighter: "#D3DEFA",
          lightest: "#E9EEFC"
        },
        secondary: {
          main: "#2A8873",
          light: "#88dac1",
        },
        danger: {
          main: "#E7235E",
          dark: "#cf1f54",
        },
        success: {
          main: "#40a693",
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
