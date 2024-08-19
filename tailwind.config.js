/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "midnightgreen": "#014E56",
        "raptureblue": "#79C8C7",
        "policeblue": "#2C6269",
        "lightcoral": "#F67E7E",
        "white": "#FFFFFF",
        "deep-jungle-green": "#004047",
        "sacramento-state-green": "#012F34",
        "dark-green": "#002529"
      },
      // backgroundImage: (theme) => {

      // },
      fontFamily: {
        Livvic: ["livvic", 'sans serif'],
      },
      content: {
        Logo: "url('.../assets/logo.svg')"
      }
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px"
    }
  },
  plugins: [],
}

