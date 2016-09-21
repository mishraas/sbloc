'use strict';


module.exports = function(gulp,config){
	gulp.task('fonts',function(){
		return gulp.src(config.fontDir)
			  
			    .pipe(gulp.dest(config.targetDir+config.targetFontDir));

	})

}