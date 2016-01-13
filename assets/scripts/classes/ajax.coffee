# Get modules
jQ        = jQuery

###*
 * Ajax Request Class
###
class Ajax

	###*
	 * Create a new Ajax handler
	 * @param  {String} @action   The action to listen for
	 * @param  {Function} @callback The function to run when success
	 * @param  {Object} @data     Data to pass to the action
	 * @param  {String} @method   Method to use for the request
	 * @return {Void}
	###
	constructor: (@action, @callback,  @data, @method) ->
		this.setup()

	###*
	 * Set up the ajax request
	###
	setup: ->
		data = @data || {}
		data = jQ.extend data,
			action: @action
		jQ.ajax
			url: App.ajax
			type: @method || 'GET'
			data: data
			success: @callback
			error: (err) ->
				console.log err

###*
 * Export the class a module
 * @type {Object}
###
module.exports = Ajax
