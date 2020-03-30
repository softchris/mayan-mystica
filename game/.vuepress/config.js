module.exports = {
	title: 'Azure Maya Mystery',
	description: 'Discover the Secrets',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},

	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
	},
};
