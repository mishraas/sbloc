'use strict';

var uglify = require('gulp-uglify');

module.exports = function (gulp,config){

	gulp.task('compress', function (cb) {
	  return gulp.src(config.targetDir+'*.js')
  		.pipe(uglify())
  		.pipe(gulp.dest(config.targetDir));
	});

}


