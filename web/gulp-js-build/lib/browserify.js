
var browserify = require('gulp-browserify');
var del = require('del');

module.exports = function (gulp,config){

	gulp.task('browserify', function() {
		return gulp.src(config.source.appDir+"/"+config.jsMainFileName+".js")
		  .pipe(browserify())
		  .on('postbundle', function(src){

		  	del([config.source.appDir+config.tempDir])
		  })
		  .pipe(gulp.dest(config.target.publicDir));
	});

}