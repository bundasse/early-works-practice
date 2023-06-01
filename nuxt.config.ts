// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
      ],
      css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
      ],
      build : {
          transpile:[
            "@fortawesome/vue-fontawesome",
            "@fortawesome/vue-fontawesome-svg-core",
            "@fortawesome/free-brand-svg-icons",
          ]
      }
})
