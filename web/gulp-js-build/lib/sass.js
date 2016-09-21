var sass = require('gulp-sass');


module.exports = function (gulp,config){
	gulp.task('build-css', function() {
	  return gulp.src([config.sass])
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest(config.targetDir));
	});

}