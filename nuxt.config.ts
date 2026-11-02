// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],

  css: ["~/assets/css/globals.css"],

  googleFonts: {
    families: {
      "Bricolage Grotesque": [500, 700, 800],
      "IBM Plex Sans": [400, 500, 600],
      "JetBrains Mono": [400, 500],
    },
    display: "swap",
  },

  i18n: {
    baseUrl: "https://wesleyaraujo.dev",
    strategy: "prefix_except_default",
    defaultLocale: "pt",
    detectBrowserLanguage: false,
    langDir: "locales",
    locales: [
      { code: "pt", language: "pt-BR", file: "pt.json", name: "PT" },
      { code: "en", language: "en-US", file: "en.json", name: "EN" },
    ],
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },

  compatibilityDate: "2024-07-09",
});
