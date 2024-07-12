
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        xxs:"400px",
        xs: "450px",
        sm: "575px",
        md: "768px",
        mdlg: "850px",
        lg: "992px",
        lgxl: "1100px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontWeight: {
        normale: 400,
        "extra-bold": 650,
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
