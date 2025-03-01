// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypeCallouts from 'rehype-callouts'

import mdx from '@astrojs/mdx'

export default defineConfig({
  i18n: {
    locales: ['en', 'ru', 'ro'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    mdx({
      extendMarkdownConfig: false,
    }),
  ],
  experimental: {
    svg: true,
  },
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [rehypeCallouts],
  },
  vite: {
    define: {
      'process.env': {},
    },
    plugins: [tailwindcss()],
  },
})
