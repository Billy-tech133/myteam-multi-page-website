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
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem',   // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '4rem',    // 64px
        '7xl': '6.25rem', // 100px
        'custom-size': '2.5rem' // Example of a custom font size      },
      // backgroundImage: (theme) => {
      },
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
      md: "1060px",
      xl: " 1500px"
    }
  },
  plugins: [],
}

