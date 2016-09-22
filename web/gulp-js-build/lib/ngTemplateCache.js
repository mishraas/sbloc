'use strict';
var ngTemplate = require('gulp-ng-template')

module.exports = function(gulp,config){

	gulp.task('ngTemplateCache',function(){
		return gulp.src(config.ngTemplateSourceDir)
		    .pipe(ngTemplate({
		      moduleName: 'genTemplates',
		      standalone: true,
		      filePath:  'templates.js'
		    }))
		    .pipe(gulp.dest(config.appDir));  // output file: 'dist/js/templates.js' 

	})

}
