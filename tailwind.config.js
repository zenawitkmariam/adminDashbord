/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'blue': '#1fb6ff',
        'darkblue': '#101043',
        'white': '#ffffff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'lightgray': '#d3dce6',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    extend: {
      colors:{
        primary:'#1fb6ff',
        blue:{
          50:'#101043',
          100:'#dbeafe',
          200:'#bfdbfe',
          300:'#93c5fd',
          400:'#60a5fa',
          500:'#3b82f6',
          600:'#2563eb',
          700:'#1d4ed8',
          800:'#1e40af',
          900:'#1e3a8a'
        },
        gray:{
          50:'rgb(249 250 251)',
          100:'rgb(243 244 246)',
          200:'rgb(229 231 235)',
          300:'rgb(209 213 219)',
          400:'rgb(156 163 175)',
          500:'rgb(107 114 128)',
          600:'rgb(75 85 99)',
          700:'rgb(55 65 81)',
          800:'rgb(31 41 55)',
          900:'rgb(17 24 39)'
        }
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [
  ],
}