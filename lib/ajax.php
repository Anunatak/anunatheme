<?php

namespace AnunaTheme\Ajax;

use AnunaTheme\Classes\Ajax;

/**
 * Catch a ajax request for the action 'my_cool_action'
 */
Ajax::create( 'my_cool_action', 'all', function( $request ) {
		echo $request->get( 'cool_parameter_from_request' );
	} );
