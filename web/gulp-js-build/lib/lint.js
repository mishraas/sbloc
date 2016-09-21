'use strict';

var  eslint = require('gulp-eslint');


module.exports = function(gulp,config){
    gulp.task('lint', function() {   
        return gulp.src(config.lintDirList)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });
}


