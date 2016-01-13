var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var copy       = require('gulp-copy');
var notify     = require('gulp-notify');
var fontmin    = require('gulp-fontmin');
var livereload = require('gulp-livereload');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

gulp.task('fonts', function() {

    var source_dir = config.src_dir + config.fonts.src_dir;
    var dest_dir = config.dest_dir + config.fonts.dest_dir;

	return gulp.src(source_dir + '**/*.ttf')
        .pipe( fontmin() )
        .pipe( gulp.dest(dest_dir) )
        .pipe( livereload() )
        .pipe( notify('AnunaTheme: Copied fonts.') );

});
