// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore - Nuxt auto-imports this function
export default defineNuxtConfig({
  // Disable SSR to use client-side rendering only
  ssr: false,
  modules: [
    '@nuxt/content'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'So Umm Yeah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Personal website of a Learning Experience Designer & Creative Technologist' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { innerHTML: "document.documentElement.classList.add('js-enabled'); document.body && document.body.classList.add('js-enabled');" }
      ]
    },
    // Use baseURL from env var for GitHub Pages if available
    baseURL: process.env.GITHUB_PAGES === 'true' ? '/soummyeah-website/' : '/'
  },

  // Configure Nuxt Content for markdown
  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  typescript: {
    shim: false,
    strict: false,
    typeCheck: false
  },

  nitro: {
    // Use github_pages preset when running in GitHub Actions
    preset: process.env.NITRO_PRESET || 'static',
    prerender: {
      crawlLinks: true,
      // Don't fail build on errors during prerendering
      failOnError: false,
      routes: [
        '/',
        '/about',
        '/blog',
        '/speaking',
        '/projects'
      ]
    },
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: '.output/public'
    }
  },

  // Set CI mode to avoid TTY prompts
  cli: {
    tty: false
  },

  // Set a specific port to avoid conflicts
  devServer: {
    port: 3000
  },

  compatibilityDate: '2025-08-17'
});