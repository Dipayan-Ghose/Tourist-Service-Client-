/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        touristtheme:{
          primary: '#12c763',
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
