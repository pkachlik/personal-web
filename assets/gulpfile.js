var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function(){
	return gulp.src('site.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch('site.less', [less]);
})

gulp.task('default', ['less', 'watch']);