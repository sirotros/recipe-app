/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#0D6EFD",
        secondary: "#6C757D",
        success: "#198754",
        info: "#0DCAF0",
        warning: "#FFC107",
        danger: "#c0263f",
        light: "#d9d9d9",
        dark: "#404040"
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    container: {
      center: true,
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },  
  plugins: [],
}