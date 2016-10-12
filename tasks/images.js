var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var browserSync = require('browser-sync');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

gulp.task('images', function() {

	var source_dir = config.src_dir + config.images.src_dir;
	var dest_dir = config.dest_dir + config.images.dest_dir;

	return gulp.src(source_dir + '**/*')
		.pipe( plumber() )
		.pipe( imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
		}) )
		.pipe( plumber.stop() )
		.pipe( gulp.dest(dest_dir) )
		.pipe( livereload() )
		.pipe( browserSync.reload() )
		.pipe( notify('AnunaTheme: Optimized images.') );

});
