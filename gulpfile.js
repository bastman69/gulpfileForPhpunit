var gulp = require('gulp');
var phpunit = require('gulp-phpunit');

gulp.task('phpunit', function() {
    var options = {
        debug:             true,
        statusLine:        false,
        configurationFile: './phpunit.xml'
    };
   return gulp.src('*.php')
        .pipe(phpunit('./vendor/bin/phpunit',options));
});

gulp.task('watch', function() {
    gulp.watch('tests/*/*.php', ['phpunit']);
    gulp.watch('database/*/*.php', ['phpunit']);
    gulp.watch('routes/*.php', ['phpunit']);
    gulp.watch('app/*.php', ['phpunit']);
});
gulp.task('default', ['phpunit', 'watch']);
