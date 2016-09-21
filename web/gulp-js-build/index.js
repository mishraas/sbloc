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

// gulp.task('default', ['lint'], function () {
//   return gutil.log('Gulp is running!')
// });





gulp.task('default', ['lint','build-css','scripts','fonts','images','minify-css','compress'], function () {
  return gutil.log('Gulp is running!')
});

// gulp.task('watch', function() {
//   gulp.watch();
//   gulp.watch();
//   gulp.watch();
// });

module.exports = {}