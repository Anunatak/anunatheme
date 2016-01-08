# Get modules
jQ        = jQuery
Menu      = require '../plugins/navigation'
Snake     = require '../plugins/snake'

# Set instances
menu  = new Menu
snake = new Snake


class Routes
	common: ->
		menu.bind()
	home: ->
		console.log "Home"

	page: ->
		console.log "Page"

	error404: ->
		snake.bind()


module.exports = Routes
