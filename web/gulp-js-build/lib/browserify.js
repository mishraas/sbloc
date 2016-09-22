
var browserify = require('gulp-browserify');

module.exports = function (gulp,config){

gulp.task('scripts', function() {
   return gulp.src(config.bundleJsFiles)
	  .pipe(browserify())
	  .pipe(gulp.dest(config.targetDir));
});

}