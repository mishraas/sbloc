module.exports ={
	appDir:"./app/",
	targetDir:"./target/",
	staticDir:"./web/",
	sass:"./styles/*.scss",
	fontDir:"./fonts/**/*",
	imageDir:"./images/**/*",
	targetFontDir:'fonts/',
	targetImageDir:'images/',
	lintDirList: [
		'./app/**/*.js'
			],
	bundleJsFiles:[
		'./app/index.js'],
	bundlecssFiles:[ 
			'./target/*.css']

}
