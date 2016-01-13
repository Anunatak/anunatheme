<?php

namespace AnunaTheme\Ajax;

use AnunaTheme\Classes\Ajax;

Ajax::create('my_cool_action', function($request) {
	echo $request->get('cool_parameter_from_request');
});
