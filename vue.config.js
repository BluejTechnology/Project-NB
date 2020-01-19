module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	devServer: {
		// host:'qzi.html5.qq.com',
		proxy: {
			'/fcgi':{
				target:'https://qzi.html5.qq.com',
				ws: true,
				changeOrigin: true,
            },
            '/active_cny':{
				target:'https://mvp-1300522992.cos.ap-chengdu.myqcloud.com',
				ws: true,
                changeOrigin: true,
                pathRewrite:{"/active_cny":''}
            }
        },
        port:8080,
        https:false,
        disableHostCheck: true
	},
	css:{
		loaderOptions:{
			// 但是在配置 `data` 选项的时候
			// `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
			// 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
			scss:{
			prependData: `@import "~@/assets/scss/util.scss";`
			}
		}
	}
}
