var gulp       = require('gulp');
var requireDir = require('require-dir');

// Import tasks
requireDir('./tasks');

// Default task
gulp.task('default', ['templates', 'styles', 'scripts']);