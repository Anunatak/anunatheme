$     = require 'jquery'
menu  = require '../plugins/navigation'

require 'what-input'
require 'foundation-sites'

module.exports = ->

	# Scripts for all pages here

	menu.bind()
	$(document).foundation
