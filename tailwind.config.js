/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indigo: {
          primary: '#9277FF',
          secondary: '#7C5DFA',
        },
        red: {
          primary: '#FF9797',
          secondary: '#EC5757',
        }, 
        slate: {
          primary : '#DFE3FA',
          secondary : '#7E88C3',
        }, 
        dark: {
          primary : '#252945 ',
          secondary : '#252925',
        }, 
    }, 
  },
  plugins: [],
}

}