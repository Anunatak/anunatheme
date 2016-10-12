// Import foundation from bower
import 'foundation-sites'

// export as function
export default function() {
	// initalize foundation
	jQuery(document).foundation()

	// notify css that foundation javascript is up and running
	jQuery('body').addClass('foundation-ready')
}
