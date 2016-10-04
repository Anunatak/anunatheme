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

// Favicon Modules
var favicons = require('gulp-favicons')

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
var source_file = config.src_dir + config.favicon.src;
var dest_dir = config.dest_dir + config.favicon.dest_dir;

// Load the .env file (from bedrock)
require('dotenv').config({path: '../../../../.env'})

gulp.task('favicon', function () {

	// Get the WP_HOME variable and remove the http:// part from it
	var url = process.env.WP_HOME.replace('http://', '')

	return gulp.src(source_file).pipe(favicons({
		appName: null,
		appDescription: null,
		developerName: 'Tor Morten Jensen',
		developerURL: 'https://anunatak.no/',
		background: '#ffffff',
		path: '{{ get_template_directory_uri() }}/' + dest_dir,
		url: url,
		display: 'standalone',
		orientation: 'portrait',
		start_url: '/?homescreen=1',
		version: 1.0,
		logging: false,
		online: false,
		html: './templates/partials/favicon.blade.php',
		pipeHTML: false,
		replace: true
	}))
	.on('error', gutil.log)
	.pipe(gulp.dest(dest_dir));
});
