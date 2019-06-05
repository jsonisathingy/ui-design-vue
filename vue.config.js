const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
            }
        }
    },
    runtimeCompiler: true,
    devServer: {
        host: 'localhost',
        proxy: {
            '/openidm': {
                target: 'http://localhost:8080/openidm',
                pathRewrite: { '^/openidm': '' },
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
          @import "~bootstrap/scss/_functions.scss";
          @import "~bootstrap/scss/_mixins.scss";
          @import "~bootstrap/scss/_variables.scss";  
          @import "@/scss/theme-variables.scss";
        `
            }
        }
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
};
