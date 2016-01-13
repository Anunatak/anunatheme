# Get modules
jQ        = jQuery

# Create an ajax class
class Ajax

	# Construct the javascript
	constructor: (@action, @callback,  @data, @method) ->
		this.setup()

	# Setup the ajax
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

module.exports = Ajax
