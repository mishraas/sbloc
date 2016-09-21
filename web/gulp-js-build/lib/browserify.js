
var browserify = require('gulp-browserify');


module.exports = function (gulp,config){

gulp.task('scripts', function() {
   return  gulp.src([config.appDir+'index.js'])
        .pipe(browserify())
        .pipe(gulp.dest('./target/'))
});

}