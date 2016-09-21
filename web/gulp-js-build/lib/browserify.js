
var browserify = require('gulp-browserify');
var source     = require('vinyl-source-stream');

module.exports = function (gulp,config){

gulp.task('scripts', function() {
   return browserify({ entries: config.bundleJsFiles })
        .bundle()
        .pipe(source('main.bundled.js'))
        .pipe(gulp.dest(config.targetDir))
});

}