# Get modules
jQ        = jQuery
menu      = require '../plugins/navigation'
snake     = require '../plugins/snake'
Ajax      = require '../plugins/Ajax'

# Export the module
module.exports =
	common: ->
		menu.bind()

	home: ->
		new Ajax 'my_cool_action', ( (response) ->
			console.log response
		),
			cool_parameter_from_request: 'You are cool!'

	page: ->
		console.log "Page"

	error404: ->
		snake.bind()

