const path = require('path')
module.exports = {
	configureWebpack: {
		devtool: 'source-map',
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
            https:true,
			port: 443,
			disableHostCheck: true // 解决 Invalid Host header
		}
	}
}
