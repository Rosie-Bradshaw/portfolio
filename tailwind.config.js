/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.js","./output.css","./dist/**/*{html,js}", "./src/**/*{html,js"],
  theme: {
    fontFamily:{
      'display':['R']
    },
    extend: {},
  },
  plugins: [],
}
