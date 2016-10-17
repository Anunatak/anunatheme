// Global Modules
var gulp        = require('gulp');
var rename      = require('gulp-rename');
var sourcemaps  = require('gulp-sourcemaps');
var gulpif      = require('gulp-if');
var argv        = require('minimist')(process.argv.slice(2));
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var gutil       = require('gulp-util');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');

// Scripts Modules
var uglify       = require('gulp-uglify');
var rollup       = require('rollup-stream');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var sourcemaps   = require('gulp-sourcemaps');
var babel        = require('rollup-plugin-babel');
var babelrc      = require('babelrc-rollup');
var bowerResolve = require('rollup-plugin-bower-resolve');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

// Set the directories
var source_dir = config.src_dir + config.scripts.src_dir;
var dest_dir = config.dest_dir + config.scripts.dest_dir;

gulp.task('rollup', function() {
	return rollup({
		entry: source_dir + '/app.js',
		plugins: [
			babel(),
			bowerResolve({})
		],
		globals: {
			jquery: 'jQuery'
		}
	})
	.pipe( plumber() )
	.pipe( source( 'app.js', source_dir ) )
	.pipe( buffer() )
	.pipe( gulpif( enabled.maps, sourcemaps.init({loadMaps: true}) ) )
	.pipe( gulpif( enabled.minify, uglify() ) )
	.pipe( gulpif( enabled.maps, sourcemaps.write() ) )
	.pipe( gulp.dest( dest_dir ) )
	.pipe( plumber.stop() )
	.pipe( notify('AnunaTheme: Scripts bundled'+ (argv.production ? ' for production' : '') +'.') );
});

// Bind the task to the scripts task
gulp.task('scripts', ['rollup']);
