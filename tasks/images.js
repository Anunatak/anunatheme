var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var notify     = require('gulp-notify');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

gulp.task('images', function() {

    var source_dir = config.src_dir + config.images.src_dir;
    var dest_dir = config.dest_dir + config.images.dest_dir;

    return gulp.src(source_dir + '**/*')
        .pipe( imagemin({
        	progressive: true,
        	svgoPlugins: [{removeViewBox: false}],
        }) )
        .pipe( gulp.dest(dest_dir) )
        .pipe( livereload() )
        .pipe( notify('AnunaTheme: Optimized images.') );

});
