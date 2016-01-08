# Get modules
jQ        = jQuery
menu      = require '../plugins/navigation'
snake     = require '../plugins/snake'

# Export the module
module.exports =
	common: ->
		menu.bind()

	home: ->
		console.log "Home"

	page: ->
		console.log "Page"

	error404: ->
		snake.bind()

