# Require all modules
jQ        = jQuery # jQuery is loaded by WordPress at run time, so no need for it to be loaded as module
DomRouter = require 'jquery-dom-router'
routes    = require './plugins/routes'

# Instantiate the DOM Router
new DomRouter document, new routes
