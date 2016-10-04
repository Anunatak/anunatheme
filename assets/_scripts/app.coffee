# Require all modules
DomRouter = require 'jquery-dom-router'
routes    = require './plugins/routes'

# Instantiate the DOM Router
jQuery(document).ready () ->
	new DomRouter document, routes
