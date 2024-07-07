// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       container: {
//         center: true,
//         padding: "1rem",
//       },

//       screens: {
//         xs: "450px",
//         // => @media (min-width: 450px) { ... }
        

//         sm: "575px",
//         // => @media (min-width: 576px) { ... }

//         md: "768px",
//         // => @media (min-width: 768px) { ... }

//         lg: "992px",
//         // => @media (min-width: 992px) { ... }

//         xl: "1200px",
//         // => @media (min-width: 1200px) { ... }

//         "2xl": "1400px",
//         // => @media (min-width: 1400px) { ... }
//       },

//       fontWeight: {
//         normale: 400,
//         "extra-bold": 650,
//       },
//       fontFamily: {
//         lato: ["Lato", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
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
        xs: "450px",
        sm: "575px",
        md: "768px",
        lg: "992px",
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
