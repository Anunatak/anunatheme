<?php

define('BLADE_VIEWS', get_template_directory() . '/templates');

TorMorten\View\Blade::create();

add_action('after_setup_theme', function() {
	add_theme_support('blade-templates');
});
