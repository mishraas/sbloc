module.exports =

{

	source:{
		appDir: "./app",
		fontDir: "./fonts",
		imageDir: "./images",
		sassDir: "./styles",
		ngTemplatesList: [
			'./app/components/**/*.html',
			'./app/core/**/*.html'
		],

	},

	target:{	
		publicDir: "../public",
		fontDir: ["/fonts/**/",
					"./node_modules/bootstrap/fonts/**/*"
				],
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