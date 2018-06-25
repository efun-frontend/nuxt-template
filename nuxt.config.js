module.exports = {
    srcDir: 'client/',
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            hid: 'description',
            name: 'description',
            content: 'Nuxt.js project'
        }],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css'],
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Add element-ui in our app, see plugins/element-ui.js file
     */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/i18n.js'
    ],
    router: {
        // base: '/test'
        //动态增加index.html路由
        extendRoutes(routes, resolve) {
            var _routes = Object.assign([], routes);
            _routes.forEach((route, index) => {
                routes.push(Object.assign({}, route, {
                    name: route.name + '_html',
                    path: route.path + (route.path === '/' ? '' : '/') + 'index.html'
                }))
            })
        }
    },
    //extend webpack config
    build: {
        vendor: ['axios'],
        extend(config, {
            isDev,
            isClient
        }) {
            config.resolve.alias = Object.assign(config.resolve.alias, {
                '@components': '@/components'
            });
            return config;
        }
    }
}