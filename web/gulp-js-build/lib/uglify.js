'use strict';

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');


module.exports = function (gulp,config){

	gulp.task('uglify', function () {
		  return gulp.src(config.target.publicDir+'/*.js')
		  	.pipe(sourcemaps.init())	  	
			.pipe(rename(config.jsMainFileName+'.min.js'))
	  		.pipe(uglify())
	  		.pipe(sourcemaps.write('./'))
	  		.pipe(gulp.dest(config.target.publicDir));
	});

}


