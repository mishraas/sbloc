'use strict';


module.exports = function(gulp,config){
	gulp.task('htmls',function(){
		return gulp.src(config.source.appDir + '/*.html')
			  
			    .pipe(gulp.dest(config.target.publicDir));

	})

}