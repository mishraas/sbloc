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
		],
	bundleJsFiles:[
		'./node_modules/angular.*.min.js',
		'./node_modules/angular-animate/*.min.js',
		'./node_modules/angular-cookies/*.min.js',
		'./node_modules/angular-sanitize/*.min.js',
		'./node_modules/angular-ui-bootstrap/dist/*.js',
		'./app/index.js'],
	bundlecsFiles:[ 
			'./node_modules/bootstrap/dist/css/*.css',
			'./target/*.css']

}
