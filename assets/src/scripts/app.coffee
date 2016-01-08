# Require all modules
jQ        = jQuery
DomRouter = require 'jquery-dom-router'
routes    = require './plugins/routes'

# Instantiate the router
new DomRouter document, new routes
