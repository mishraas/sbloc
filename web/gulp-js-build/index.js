'use strict';

var gulp = require('gulp');
var pkg = require('../package.json');
var gulpConfig = require('./config');

// gulpConfig should be extended by pkg.config
var config = Object.assign(gulpConfig, pkg.config);

require('./lib/lint')(gulp, config);
require('./lib/lint')(gulp, config);
require('./lib/lint')(gulp, config);


gulp.task('compile', [], function() {

});
