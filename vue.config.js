
const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
                '@static': path.resolve(__dirname, 'static')
            }
        },
        devServer: {
            // 设置代理，方便本地开发的时候，规避跨域问题，5001是server端那边的运行接口
            proxy: {
                '/fcgi': {
                    target: 'https://qzi.html5.qq.com',
                    changeOrigin: true
                },

            },
            https: true,
            port: 443,
            disableHostCheck: true // 解决 Invalid Host header
        },
        css: {
            loaderOptions: {
                // 但是在配置 `data` 选项的时候
                // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
                // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
                scss: {
                    prependData: `@import "~@/assets/scss/util.scss";`
                }
            }
        }
    }
}

