/**
 * Sass task
 */

var Task   = require('../lib/task');
var gulp   = require('gulp');
var sass   = require('gulp-sass');
var cssmin = require('gulp-clean-css');
var _      = require('lodash');

/**
 * Create a fresh object
 * @type {Object}
 */
var Sass = _.assignIn({}, Task);

module.exports = function(input, output, config, Hocus) {

	/**
	 * The name of the task
	 * @type {String}
	 */
	Sass.name = 'sass';

	/**
	 * Extend the task object
	 */
	Sass.extend(input, output, config, Hocus);

	/**
	 * Define the task
	 * @return {Void}
	 */
	Sass.task = function() {
		var src = this.getInputPath();
		gulp.task(this.name, function() {

		});
	}

	/**
	 * Return it
	 */
	return Sass;
};
