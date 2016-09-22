'use strict';

var gulp = require('gulp'),
gutil = require('gulp-util');
var pkg = require('../package.json');
var gulpConfig = require('./config');
var runSequence = require('run-sequence');


// gulpConfig should be extended by pkg.config
var config = Object.assign(gulpConfig, pkg.config);

require('./lib/lint')(gulp,config);
require('./lib/browserify')(gulp,config);
require('./lib/clean-css')(gulp,config);
require('./lib/fonts')(gulp,config);
require('./lib/images')(gulp,config);
require('./lib/sass')(gulp,config);
require('./lib/uglify')(gulp,config);
require('./lib/htmls')(gulp,config);
require('./lib/ngTemplateCache')(gulp,config);

//gulp.task('lint-test',['lint']);

gulp.task('build', function(callback) {
	return runSequence('ngTemplateCache', 'scripts',  ['htmls', 'fonts', 'images', 'build-css'], ['compress', 'minify-css'],callback);
});

//gulp.task('build', ['lint','build-css','minify-css','scripts','compress','fonts','images','htmls','ngTemplateCache']);

gulp.task('watch', function() {
//  gulp.watch([config.appDir+'index.js',config.appDir + '/**/*.html'],['scripts','compress']);
//  gulp.watch(config.sass,['build-css','minify-css']);

  	gulp.watch([config.appDir+'index.js',config.appDir + '*.html'], function() {
		runSequence('ngTemplateCache', 'scripts','compress');
	});

	gulp.watch(config.sass,function(){
		runSequence('build-css','minify-css')
	});

	//gulp.watch(config.fontsDir + '/**/*', ['fonts']);
	//gulp.watch(config.imagesDir + '/**/*', ['images']);
	//gulp.watch(config.appDir + '/index.html', ['html']);

 // gulp.watch(config.lintDirList,['lint']);
});


gulp.task('default', ['build', 'watch'], function () {
  return gutil.log('Gulp is running!')
});
module.exports = {}