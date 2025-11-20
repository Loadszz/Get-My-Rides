import type { NextConfig } from 'next'
const path = require('path')
const nextConfig: NextConfig = {
	images: {
		qualities: [75, 100],
	},
	webpack(config) {
		// config.resolve.alias = {
		// 	...config.resolve.alias,
		// 	'@/*': path.resolve(__dirname, 'src'), // пример для @ → src
		// }
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											// Keep viewBox attribute
											removeViewBox: false,
										},
									},
								},
								'removeDimensions',
							],
						},
					},
				},
			],
		})
		return config
	},
}

export default nextConfig
