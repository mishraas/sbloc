'use strict';

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');


module.exports = function (gulp,config){

	gulp.task('compress', function (cb) {
	  return gulp.src(config.targetDir+'*.js')
		  	.pipe(sourcemaps.init())	  	
			.pipe(rename('index.min.js'))
	  		.pipe(uglify())
	  		.pipe(sourcemaps.write('./'))
	  		.pipe(gulp.dest(config.targetDir));
	});

}


