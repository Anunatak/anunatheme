var gulp       = require('gulp');
var livereload = require('gulp-livereload');

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

gulp.task('watch', function() {

	livereload.listen();

	gulp.watch('**/*.php').on('change', function(file) {
		var parts = file.path.split('/');
		var name = parts[parts.length - 1];

		livereload.changed(file.path);
	});
	gulp.watch(config.src_dir + config.styles.src_dir + '**/*' + config.styles.extension, ['styles']);
	gulp.watch(config.src_dir + config.scripts.src_dir + '**/*.coffee', ['scripts']);
});
