# Require all modules
DomRouter = require 'jquery-dom-router'
routes    = require './plugins/routes'

# Instantiate the DOM Router
new DomRouter document, routes
