module.exports = {
	title: 'Azure Maya Mystery',
	description: 'Discover the Secrets',
	base: '/AzureMayaMystery/',
	dest: '.vuepress/dist/AzureMayaMystery/',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:7071',
				ws: true,
				changeOrigin: true,
			},
		},
	},
};
