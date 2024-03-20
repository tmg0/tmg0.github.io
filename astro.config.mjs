import process from 'node:process'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import Oxlint from 'unplugin-oxlint/vite'

const isDev = process.env.NODE_ENV === 'development'

// https://astro.build/config
export default defineConfig({
  site: 'https://tmg0.github.io',
  integrations: [mdx(), sitemap(), vue(), tailwind()],
  vite: {
    plugins: [
      Oxlint({
        watch: isDev,
        includes: ['src/**/*.{js,mjs,ts,vue,astro}'],
        deny: ['correctness'],
        packageManager: 'npm',
      }),
    ],
  },
})
