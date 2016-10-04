// Load dependencies
import 'jquery-dom-router'

// Load modules
import './modules/foundation'
import routes from './modules/routes'

// Load router
jQuery(document).ready( () => {
	new jQuery.DOMRouter.router(document, routes)
} )
