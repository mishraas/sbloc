module.exports ={
	appDir:"./app/",
	targetDir:"../public/",
	staticDir:"./web/",
	sass:"./styles/*.scss",
	fontDir:"./fonts/**/*",
	imageDir:"./images/**/*",
	ngTemplateSourceDir:[
		'./app/components/**/*.html',
		'./app/core/**/*.html'
	],
	targetFontDir:'fonts/',
	targetImageDir:'images/',
	lintDirList: [
		'./app/**/*.js',
		'!./app/**/*templates.js'
			],
	bundleJsFiles:[
		'./app/index.js'],
	bundlecssFiles:[ 
			'../public/*.css']

}


