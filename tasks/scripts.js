// Global Modules
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gulpif     = require('gulp-if');
var argv       = require('minimist')(process.argv.slice(2));
var livereload = require('gulp-livereload');
var concat     = require('gulp-concat');
var gutil      = require('gulp-util');
var notify     = require('gulp-notify');
var plumber    = require('gulp-plumber');

// Scripts Modules
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var coffeeify = require('coffeeify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var assign = require('lodash.assign');

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

// Browserify options
var options = {
	extensions: ['.coffee'],
  	entries: [source_dir + 'app.coffee'],
  	debug: true
};

// Merge the options with the watchify options
var opts = assign({}, watchify.args, options);

// Create a new bundle
var b = watchify(browserify(opts));

// Add transformations
b.transform('coffeeify');
// b.transform('vueify');
b.transform('hbsify');
b.transform('browserify-shim', {global: true});
b.transform('deamdify');
b.transform('debowerify');
b.ignore('jquery'); // ignore jquery as we shim it

// Events listeners
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal
gulp.task('browserify', bundle);

// Browserify task
function bundle() {
	return b.bundle()
		// log errors if they happen
	    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
	    .pipe( source(source_dir + 'app.coffee') ) // The main entry file
		.pipe( buffer() ) // Create a buffer
		.pipe( gulpif( enabled.maps, sourcemaps.init({ loadMaps: true }) ) ) // If sourcemaps are enabled initalize
		.pipe( gulpif( enabled.minify, uglify() ) ) // If minify is enabled, uglify
		.pipe( gulpif( enabled.maps, sourcemaps.write('.') ) ) // If sourcemaps are enabled write
		.pipe( rename('main.js') ) // Rename the file
		.pipe( gulp.dest(dest_dir) ) // Output to destination directory
		.pipe( livereload() ) // Reload the browser
		.pipe( notify('AnunaTheme: Scripts compiled'+ (argv.production ? ' for production' : '') +'.') ); // Notify
};

// Bind the task to the scripts task
gulp.task('scripts', ['browserify']);
