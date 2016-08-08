/**
 * Sass task
 */

var Task = require('../lib/task');
var gulp = require('gulp');
var _ = require('lodash');

/**
 * Create a fresh object
 * @type {Object}
 */
var Scripts = _.assignIn({}, Task);

module.exports = function(input, output, config, Hocus) {

	/**
	 * The name of the task
	 * @type {String}
	 */
	Scripts.name = 'scripts';

	/**
	 * Extend the task object
	 */
	Scripts.extend(input, output, config, Hocus);

	/**
	 * Define the task
	 * @return {Void}
	 */
	Scripts.task = function() {

		gulp.task(this.name, function() {

		});
	}

	/**
	 * Return it
	 */
	return Scripts;
};
