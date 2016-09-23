'use strict';


module.exports = function(gulp,config){
	gulp.task('images',function(){
		return gulp.src(config.source.imageDir+"/**/*")
			   .pipe(gulp.dest(config.target.publicDir+config.target.imageDir));

	})

}