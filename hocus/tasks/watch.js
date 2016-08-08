/**
 * The watch task
 */

var Task = require('../lib/task');
var gulp = require('gulp');
var watch = require('gulp-watch');
var _ = require('lodash');

/**
 * Create a fresh object
 * @type {Object}
 */
var Watch = _.assignIn({}, Task);

module.exports = function(input, output, config, Hocus) {

	/**
	 * The name of the task
	 * @type {String}
	 */
	Watch.name = 'watch';

	/**
	 * Extend the task object
	 */
	Watch.extend(input, output, config, Hocus);

	/**
	 * Define the task
	 * @return {Void}
	 */
	Watch.task = function() {
		var that = this;
		gulp.task(this.name, function() {
			that.props.Hocus.$._.each(that.props.config, function(task) {
				task.task.watch(watch);
			});
		});
	}

	/**
	 * Return it
	 */
	return Watch;
};
