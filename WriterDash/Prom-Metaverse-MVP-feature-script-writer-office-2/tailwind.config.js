/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
       
      },
    },
  },
  plugins: [],
  mode: 'jit',
}




