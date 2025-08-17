// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore - Nuxt auto-imports this function
export default defineNuxtConfig({
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
      ]
    }
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
    preset: 'static',
    prerender: {
      crawlLinks: true,
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