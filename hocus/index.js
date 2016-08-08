/**
 * Hocus is a wrapper for Gulp
 */

var Hocus = {};

Hocus.TaskQueue = [];

/**
 * The configuration
 * @type {Object}
 */
Hocus.Config = require('./config.js');

/**
 * The tasks
 * @type {Object}
 */
Hocus.Tasks = require('require-dir')('./tasks', {recurse: true});

/**
 * The plugins
 * @type {Object}
 */
Hocus.$ = {
	Autoprefixer: require('gulp-autoprefixer'),
	Concat: require('gulp-concat'),
	SourceMaps: require('gulp-sourcemaps'),
	Util: require('gulp-util'),
	If: require('gulp-if'),
	_: require('lodash')
};

/**
 * Start doing magic
 * @return {Void}
 */
Hocus.pocus = function(callback) {
	var Caller = require('./lib/caller')
	Hocus.Caller = new Caller(Hocus);
	callback.call(Hocus, Hocus.Caller);
};

/**
 * Run gulp things
 * @return {Void}
 */
Hocus.shazam = function() {
	var tasks = [];
	var watchers = [];
	Hocus.$._.each(Hocus.Caller.tasks, function(task) {
		tasks.push(task.name);
		watchers.push({
			name: task.name,
			task: Hocus.$._.assignIn({}, task)
		});
		task.run();
	});

	var defaultTask = Hocus.Tasks.default(null, null, tasks, Hocus);
	defaultTask.run();

	var watchTask = Hocus.Tasks.watch(null, null, watchers, Hocus);
	watchTask.run();
}

/**
 * Export Hocus
 */
module.exports = Hocus;
