const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
};
