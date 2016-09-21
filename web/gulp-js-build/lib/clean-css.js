'use strict';

var cleanCSS = require('gulp-clean-css');


module.exports = function(gulp,config){
	gulp.task('minify-css',function(){
		return gulp.src(config.targetDir+'*.css')
			    .pipe(cleanCSS())
			    .pipe(gulp.dest(config.targetDir));

	})

}