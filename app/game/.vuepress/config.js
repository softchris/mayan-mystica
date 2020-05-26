module.exports = {
	title: 'Azure Maya Mystery',
	description: 'Discover the Secrets',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	dest: 'build/AzureMayaMystery',
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
