'use strict';

var gulp = require('gulp'),
gutil = require('gulp-util');
var pkg = require('../package.json');
var gulpConfig = require('./config');

// gulpConfig should be extended by pkg.config
var config = Object.assign(gulpConfig, pkg.config);

require('./lib/lint')(gulp,config);
require('./lib/browserify')(gulp,config);
require('./lib/clean-css')(gulp,config);
require('./lib/fonts')(gulp,config);
require('./lib/images')(gulp,config);
require('./lib/sass')(gulp,config);
require('./lib/uglify')(gulp,config);


gulp.task('build', ['lint','build-css','minify-css','scripts','compress','fonts','images']);

gulp.task('watch', function() {
  gulp.watch(config.appDir+'index.js',['scripts','compress']);
  gulp.watch(config.sass,['build-css','minify-css']);
 // gulp.watch(config.lintDirList,['lint']);
});


gulp.task('default', ['build', 'watch'], function () {
  return gutil.log('Gulp is running!')
});
module.exports = {}