'use strict';
var ngTemplate = require('gulp-ng-template')

module.exports = function(gulp,config){

	gulp.task('ngTemplateCache',function(){
		return gulp.src(config.source.ngTemplatesList)
		    .pipe(ngTemplate({
		      moduleName: 'genTemplates',
		      standalone: true,
		      filePath:  config.ngTemplateName+'.js'
		    }))
		    .pipe(gulp.dest(config.source.appDir+config.tempDir));  // output file: 'dist/js/templates.js' 

	})

}
