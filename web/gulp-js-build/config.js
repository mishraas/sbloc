module.exports = {

	source:{
		appDir: "./app",
		fontDir: ["./fonts/**/*",
					"./node_modules/bootstrap-sass/assets/fonts/**/*"
				],
		imageDir: "./images",
		sassDir: "./styles",
		ngTemplatesList: [
			'./app/components/**/*.html',
			'./app/core/**/*.html'
		],

	},

	target:{	
		publicDir: "../public",
		fontDir: "/fonts",
		imageDir: "/images"
		},

	lintDirList: [
			'./app/**/*.js',
			'!./app/**/*templates.js'
				],
	cssMainFileName:"styles",
	jsMainFileName:"index",
	ngTemplateName:"templates",
	tempDir:"/temp"




}