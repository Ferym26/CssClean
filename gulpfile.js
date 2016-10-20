var gulp           = require('gulp'),

		uncss          = require('gulp-uncss'),		

		autoprefixer   = require('gulp-autoprefixer'),
		rename         = require('gulp-rename'),
		glob           = require('glob');

 
gulp.task('cssclean', function() {
	gulp.src('./css/*.css')
		.pipe(uncss({
			html: glob.sync('html/**/*.html'),		
			timeout: 300
		}))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(rename({
			suffix: '.clean',
			prefix : ''
		}))
		.pipe(gulp.dest('./out'));
});
