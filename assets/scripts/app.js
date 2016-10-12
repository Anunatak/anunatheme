// Load dependencies
import 'jquery-dom-router'

// Load modules
import foundation from './modules/foundation'
import * as routes from './modules/routes'

jQuery(document).ready( () => {

	// Let CSS know that we're ready
	jQuery('body').addClass('theme-ready')

	// Load router
	new jQuery.DOMRouter.router(document, routes)

	// Initialize Foundation
	foundation();
} )
