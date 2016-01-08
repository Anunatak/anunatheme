# Get modules
jQ        = jQuery
Menu      = require '../plugins/navigation'
Snake     = require '../plugins/snake'

# Set instances
menu  = new Menu
snake = new Snake

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

