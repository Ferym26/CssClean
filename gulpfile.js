var gulp     = require('gulp'),
		uncss    = require('gulp-uncss-sp'),
		rename   = require('gulp-rename'),
		glob     = require('glob');

 
gulp.task('cssclean', function() {
    gulp.src('css/*.css')
        .pipe(uncss({
            html: glob.sync('html/**/*.html')
        }))
        .pipe(rename({suffix: '.clean', prefix : ''}))
        .pipe(gulp.dest('./out'));
});