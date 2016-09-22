'use strict';

var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


module.exports = function(gulp,config){
	gulp.task('minify-css',function(){
		return gulp.src(config.bundlecssFiles)
				.pipe(rename( 'style.min.css'))
			    .pipe(cleanCSS())
			    .pipe(gulp.dest(config.targetDir));

	})

}