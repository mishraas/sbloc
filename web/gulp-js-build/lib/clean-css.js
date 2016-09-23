'use strict';

var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');


module.exports = function(gulp,config){
	gulp.task('cleanCss',function(){
		return gulp.src(config.target.publicDir+'/*.css')
				.pipe(rename( config.cssMainFileName+'.min.css'))
			    .pipe(cleanCSS())
			    .pipe(gulp.dest(config.target.publicDir));

	})

}