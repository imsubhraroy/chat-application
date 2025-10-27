/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: true,
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./views/**/*.{html,ejs}",  // your template files
    "./public/**/*.{js,ts}",    // your client-side scripts
  ],
}

