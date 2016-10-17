<?php
/**
 * Include Composer autoloader
 */
require get_template_directory() .'/vendor/autoload.php';
/**
 * Sage includes
 *
 * The $sage_includes array determines the code library included in your theme.
 * Add or remove files to the array as needed. Supports child theme overrides.
 *
 * Please note that missing files will produce a fatal error.
 *
 * @link https://github.com/roots/sage/pull/1042
 */
$sage_includes = array(
	'lib/acf.php',
	'lib/ajax.php',
	'lib/anunatak.php',
	'lib/assets.php',
	'lib/blade.php',
	'lib/config.php',
	'lib/cpt.php',
	'lib/extras.php',
	'lib/setup.php',
	'lib/titles.php',
	'lib/loader.php',
	'lib/silk.php'
);

foreach ( $sage_includes as $file ) {
	if ( !$filepath = locate_template( $file ) ) {
		trigger_error( sprintf( __( 'Error locating %s for inclusion', 'sage' ), $file ), E_USER_ERROR );
	}

	require_once $filepath;
}
unset( $file, $filepath );
