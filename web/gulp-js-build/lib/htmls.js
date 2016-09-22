'use strict';


module.exports = function(gulp,config){
	gulp.task('htmls',function(){
		return gulp.src(config.appDir + '*.html')
			  
			    .pipe(gulp.dest(config.targetDir));

	})

}