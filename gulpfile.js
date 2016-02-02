var gulp = require('gulp')
	, config = require('./gulp.config')()
	, concat = require('gulp-concat')
	, uglify = require('gulp-uglify')
	, ngAnnotate = require('gulp-ng-annotate')
	, htmlmin = require('gulp-htmlmin')
	, $ = require('gulp-load-plugins') ({lazy: true})
	, watcher = gulp.watch([config.alljs, config.less], ['default']);

watcher.on('change', function( event ) {
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});


gulp.task('javascript', function() {
	gulp.src(config.alljs)
		.pipe(ngAnnotate())
		.pipe(concat("javascript.min.js"))
		// .pipe(uglify())
		.pipe(gulp.dest(config.min));
});

gulp.task('html', function() {
	gulp.src(config.html)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(config.min));
});

gulp.task('styles', function () {
	console.log('compiling less to css');
	return gulp
		.src(config.less)
		.pipe($.less())
		.pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']}))
		.pipe(gulp.dest(config.min));
});


gulp.task('default', ['javascript', 'html', 'styles']);