import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FF7308",
    light: "#FFCD69",
  },
  secondary: "#0F1B61",
  black: "#000000",

  React: "#61DAFB", // Official React color
  Redux: "#764ABC", // Official Redux purple
  Typescript: "#3178C6", // Official TypeScript blue
  Angular: "#DD0031", // Official Angular red
  ES6: "#F7DF1E", // JavaScript ES6 yellow (like the JS logo)
  HTML: "#E34F26", // Official HTML5 orange
  CSS: "#1572B6", // Official CSS3 blue
  Bootstrap: "#7952B3", // Official Bootstrap purple
  Firebase: "#FFCA28", // Official Firebase yellow
  Vercel: "#000000", // Official Vercel black
  "Chakra UI": "#319795", // Chakra UI teal
  "Material UI": "#007FFF", // Material UI blue
  Javascript: "#F7DF1E", // Official JavaScript yellow
  Strapi: "#2F2E8B", // Strapi official purple
  NodeJS: "#68A063", // Node.js official green
  SQL: "#CC2927", // SQL Server red (inspired by Microsoft SQL Server logo)
  MongoDB: "#47A248" // Official MongoDB green
};

const fonts = {
  heading: `'Poppins',sans-serif`,
  body: `'Inter', sans-serif`,
};
export const myTheme = extendTheme({ colors, fonts });
