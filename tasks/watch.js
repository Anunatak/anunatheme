var gulp        = require('gulp');
var browserSync = require('browser-sync');
var notify      = require('gulp-notify');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

// Load the .env file (from bedrock)
require('dotenv').config({path: '../../../../.env'})

// Define the watch task
gulp.task('watch', function() {

	// Get the WP_HOME variable and remove the http:// part from it
	var url = process.env.WP_HOME.replace('http://', '')

	// Initialize browsersync
	browserSync.init({
		proxy: url,
		open: false,
		port: 1337
	});

	// Watch for changes on any PHP-file
	gulp.watch('**/*.php').on('change', function(file) {
		var parts = file.path.split('/');
		var name = parts[parts.length - 1];

		browserSync.reload()
		gulp.src(file.path)
			.pipe( notify('AnunaTheme: PHP file changed' + ' (' + name + ')') );
	});

	gulp.watch(config.src_dir + config.scripts.dest_dir + '**/*').on('change', function(file) {
		browserSync.reload()
	});

	// Watch for SCSS changes
	gulp.watch(config.src_dir + config.styles.src_dir + '**/*', ['styles']);

	// Watch for script changes
	gulp.watch(config.src_dir + config.scripts.src_dir + '**/*', ['scripts']);

	// Watch for image changes
	gulp.watch(config.src_dir + config.images.src_dir + '**/*', ['images']);

	// Watch for font changes
	gulp.watch(config.src_dir + config.fonts.src_dir + '**/*', ['fonts']);
});
