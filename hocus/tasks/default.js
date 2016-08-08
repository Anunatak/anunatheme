/**
 * The default task
 */

var Task = require('../lib/task');
var gulp = require('gulp');
var _ = require('lodash');

/**
 * Create a fresh object
 * @type {Object}
 */
var Default = _.assignIn({}, Task);

module.exports = function(input, output, config, Hocus) {

	/**
	 * The name of the task
	 * @type {String}
	 */
	Default.name = 'default';

	/**
	 * Extend the task object
	 */
	Default.extend(input, output, config, Hocus);

	/**
	 * Define the task
	 * @return {Void}
	 */
	Default.task = function() {
		var that = this;
		gulp.task(this.name, that.props.config);
	}

	/**
	 * Return it
	 */
	return Default;
};
