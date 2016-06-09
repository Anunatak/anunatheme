<?php

namespace AnunaTheme\Blade;

$blade = new \Tormorten\WPBlade\Blade(
	get_template_directory() . '/templates', // where all views reside
	WP_CONTENT_DIR . '/blade_cache' // where the compiled views are stored
);
