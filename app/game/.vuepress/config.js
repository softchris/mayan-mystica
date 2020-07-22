const path = require('path');

module.exports = {
	title: 'Azure Maya Mystery',
	description: 'Discover the Secrets',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	dest: 'game/.vuepress/dist/',
	base: '/AzureMayaMystery/',
	themeConfig: {
		search: false,
	},
	head: [['script', { src: '/scripts/bugs.js' }]],
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
