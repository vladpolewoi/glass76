const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        blue: colors.blue,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
