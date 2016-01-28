// Global Modules
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gulpif     = require('gulp-if');
var argv       = require('minimist')(process.argv.slice(2));
var livereload = require('gulp-livereload');
var notify     = require('gulp-notify');
var plumber    = require('gulp-plumber');

// CSS Modules
var sass       = require('gulp-sass');
var cssnano    = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

// Configuration
var fs     = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

gulp.task('styles', function () {

    var source_dir = config.src_dir + config.styles.src_dir;
    var dest_dir = config.dest_dir + config.styles.dest_dir;

    return gulp.src(source_dir + 'main' + config.styles.extension)
		.pipe( plumber() )
        .pipe( gulpif( enabled.maps, sourcemaps.init() ) )
        .pipe( sass().on('error', sass.logError) )
        .pipe( autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}) )
        .pipe( rename('main.css') )
        .pipe( gulpif( enabled.maps, sourcemaps.write('.') ) )
        .pipe( gulpif( enabled.minify, cssnano() ) )
    	.pipe( plumber.stop() )
        .pipe( gulp.dest(dest_dir) )
        .pipe( livereload() )
        .pipe( notify('AnunaTheme: Styles compiled'+ (argv.production ? ' for production' : '') +'.') );
});
