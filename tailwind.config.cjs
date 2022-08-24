/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
		...colors,
		'ht-white': "#DCD7C9",
		'ht-whiter': "#ebe8e0",
		'ht-brown': "#A27B5C",
		'ht-dark-brown': '#624a37',
		'ht-dark': "#2C3639",
		'ht-input': '#3e494c',
		'ht-darker': "#161b1d",
		'ht-green': "#61A35D",
		'ht-blue': "#BFD1E5",
		'ht-light-green': "hsl(117, 28%, 60%)",
		"vai-olive": "#4E6E58",
		"vai-grey": "#131E29",
		"vai-orange": "#D18329",
    },
    fontFamily:{
		'sans': ['Open Sans', defaultTheme.fontFamily.sans],
		'serif': defaultTheme.fontFamily.serif,
		'mono': defaultTheme.fontFamily.mono,
		'western': ['Oldenburg', 'Serif']
    },
    lineHeight:{
		...defaultTheme.lineHeight,
      	'6xl': '3.75rem'
    },
    extend: {},
  },
  plugins: [],
}
