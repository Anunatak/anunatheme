# Get modules
$     = jQuery
menu  = require '../plugins/navigation'
snake = require '../plugins/snake'
Ajax  = require '../classes/Ajax'

# Initialize other modules
require 'what-input'
require 'foundation-sites'

# Export the module
module.exports =
	common: ->
		menu.bind()
		$(document).foundation

	home: ->
		new Ajax 'my_cool_action', ( (response) ->
			console.log response
		),
			cool_parameter_from_request: 'You are cool!'

	page: ->
		console.log "Page"

	error404: ->
		snake.bind()

