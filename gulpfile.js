var gulp           = require('gulp'),

		uncss          = require('gulp-uncss'),
		uncssp          = require('gulp-uncss-sp'),

		autoprefixer   = require('gulp-autoprefixer'),
		rename         = require('gulp-rename'),
		glob           = require('glob');

 
gulp.task('cssclean', function() {
	gulp.src('./css/*.css')
		.pipe(uncssp({
			//html: glob.sync('html/**/*.html')
			html: ['./html/index.html']
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
