jQ   = jQuery
Menu = require '../plugins/navigation'
menu = new Menu
class Routes
	common: ->
		menu.$trigger.on 'click', ->
			menu.toggle()

		menu.$inner.find('li a').last().on 'keydown', (e) ->
			if !e.shiftKey
				e.preventDefault()
				menu.close()
				menu.$content.find('a').first().focus()

		menu.$inner.find('li a').first().on 'focus', (e) ->
			if !e.shiftKey
				e.preventDefault()
				menu.open()
	home: ->
		console.log "Home"

	page: ->
		console.log "Page"


module.exports = Routes
