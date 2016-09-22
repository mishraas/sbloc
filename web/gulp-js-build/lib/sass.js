var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp,config){
	gulp.task('build-css', function() {
	  return gulp.src([config.sass])
	    .pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest(config.targetDir));
	});

}