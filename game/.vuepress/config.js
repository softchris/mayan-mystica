module.exports = {
	title: 'Azure Maya Mystery',
	description: 'Discover the Secrets',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')]
	},
	head: [
		[
			'script',
			{},
			`
        var _hmt = _hmt || []; 
        (function() { 
		var hm = document.createElement("script"); 
		hm.type = "text/javascript",
        hm.src = "https://download.playfab.com/PlayFabClientApi.js"; 
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s); 
        })(); 
    `
		]
	],
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated'
	}
};
