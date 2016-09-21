'use strict';


module.exports = function(gulp,config){
	gulp.task('images',function(){
		return gulp.src(config.imageDir)
			  
			    .pipe(gulp.dest(config.targetDir+config.targetImageDir));

	})

}