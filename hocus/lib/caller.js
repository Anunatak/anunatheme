/**
 * Does the task calling
 */
var Caller = function(Hocus) {
	this.Hocus = Hocus;
	this.tasks = [];
};

/**
 * Get task to run based on filename extension
 * @param  {String} filename
 * @return {Function}
 */
Caller.prototype.getTask = function(filename) {
	var extension = filename.split('.').pop();
	if(extension === 'sass' || extension === 'scss') {
		return this.Hocus.Tasks.sass;
	} else if (extension === 'js') {
		return this.Hocus.Tasks.scripts;
	} else if (typeof this.Hocus.Tasks[extension] !== 'undefined') {
		return this.Hocus.Tasks[task];
	} else {
		console.error("No task that matches the extension '"+extension+"'.");
		return false;
	}
};

/**
 * Registers the tasks to build
 * @param  {String} input  required
 * @param  {String} output optional
 * @param  {String} config optional
 * @return {Void}
 */
Caller.prototype.bim = function(input, output, config) {
	if(input.constructor !== Array) {
		input = [input];
	}
	output = output ? output : [];
	if(output.constructor !== Array) {
		output = [output];
	}
	var that = this;
	input.forEach(function(item, key) {

		var Task = that.getTask(item);

		var itemOut = output[key] || null;
		config = config || {};
		if(Task) {
			var task = Task(item, itemOut, config, that.Hocus);
			that.tasks.push(task);
		}
	})
};

module.exports = Caller;
