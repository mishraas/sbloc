'use strict';

var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');


module.exports = function(gulp,config){
	gulp.task('minify-css',function(){
		return gulp.src(config.bundlecsFiles)
			    .pipe(cleanCSS())
			    .pipe(concat('style.min.css'))
			    .pipe(gulp.dest(config.targetDir));

	})

}