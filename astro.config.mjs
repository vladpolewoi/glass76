// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
// import path from 'path'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {},
  vite: {
    define: {
      'process.env': {},
    },
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //   },
    // },
  },
})
