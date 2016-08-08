/**
 * Creates tasks
 * @type {Object}
 */
var gulp = require('gulp');

module.exports = {

	/**
	 * Extend the task object
	 * @param  {String} input
	 * @param  {String} output
	 * @param  {String} config
	 * @param  {String} Hocus
	 * @return {Void}
	 */
	extend: function(input, output, config, Hocus) {
		this.props = {
			input: input,
			output: output || null,
			config: config || {},
			Hocus: Hocus
		};
	},

	getInputPath: function() {
		var input = this.props.config.input || this.props.Hocus.Config[this.name].input;
		var inputPath = this.props.Hocus.Config.prepInputPath(this.props.input, input);
		return inputPath;
	},

	getOutputPath: function() {
		// var outputFolder = this.props.config.output;
		// var output = this.props.Hocus.Config[this.name].output;
		// var outputFile = this.props.output;
		// if(!outputFile) {

		// }
		// var outputPath = this.props.Hocus.Config.prepInputPath(this.props.output, output);
		// return inputPath;
	},

	/**
	 * The actual task
	 * @return {Void}
	 */
	task: function() {},

	/**
	 * The watching for this task
	 * @return {Void}
	 */
	watch: function(watch) {
		var gulpTask = this.name;
		var input = this.props.config.input || this.props.Hocus.Config[this.name].input;
		var watchPath = this.props.Hocus.Config.prepWatchPath(this.props.input, input);
		watch(watchPath, function() {
			gulp.start(gulpTask);
		});
	},

	/**
	 * Adds the task to the gulpfile
	 * @return {Void}
	 */
	run: function() {
		this.task();
	}
};
