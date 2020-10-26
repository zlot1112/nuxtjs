import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxtjs',
    title: 'nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  router: {
    middleware: ['auth'],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost', // Baseurl
    proxyHeaders: false,
    credentials: false,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL | '/api/',
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  auth: {
    local: {
      strategies: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
        },
      },
      user: {
        // property: 'user',
        autoFetch: false,
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/login',
      home: '/',
    },
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      base: 'light',
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: {
            grid: true,
          },
        },
      },
    },
  },
}
