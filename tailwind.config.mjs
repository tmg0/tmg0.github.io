/** @type {import('tailwindcss').Config} */
import Typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [Typography],
}
