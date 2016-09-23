'use strict';


module.exports = function(gulp,config){
	gulp.task('fonts',function(){
		return gulp.src(config.source.fontDir)
			   .pipe(gulp.dest(config.target.publicDir+config.target.fontDir));

	})

}