
var DomRouter = require ('jquery-dom-router')
var routes    = require('./plugins/routes')

jQuery(document).ready(function($) {
	new DomRouter(document, routes);
});
