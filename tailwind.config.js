/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      height: {
        '132': '40rem',
        '130': '38rem',
        '128': '36rem',
        '120': '34rem'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

