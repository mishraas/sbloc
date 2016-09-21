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
		'**/*.js',
		'!node_modules/**',
		'!gulp-js-build/**',
		'!images/**',
		'!styles/**',
		'!target/**',
		'!fonts/**'
		]

}
