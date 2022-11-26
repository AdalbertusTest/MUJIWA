const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/client/**/*.{jsx,js,tsx,ts}',
      './resources/views/**/*.blade.php',
      './resources/views/vendor/**/*.blade.php'
  ],
  theme: {
    extend: {
        colors: {
            brand: '#0099FF'
        },
        fontFamily: {
            inter: ['Inter', ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@headlessui/tailwindcss')
  ],
}
