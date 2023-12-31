
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
      ]
    },
  },
  modules: [
    "@nuxt/content",
  ]
})