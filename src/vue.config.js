// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/scotland-yard-game/' : '/',
  pwa: {
    name: 'Minha Aplicação Vue PWA',
    themeColor: '#42b983',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#ffffff'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1 ano
            }
          }
        },
        {
          urlPattern: /\.(?:png|gif|jpg|jpeg|svg|json|html|css|js)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 dias
            }
          }
        },
        {
          urlPattern: /^https:\/\/meu-api\.com\/.*$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            networkTimeoutSeconds: 10,
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 5 * 60 // 5 minutos
            }
          }
        }
      ]
    }
  }
};
