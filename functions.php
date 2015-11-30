<?php
/**
 * anunatheme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package anunatheme
 */
$anunatheme_includes = array(
	'inc/blade.php', // Blade functions
	'inc/utils.php', // Utility functions
	'inc/init.php', // Initial theme setup and constants
	'inc/sidebar.php', // Sidebar class
	'inc/config.php', // Configuration
	'inc/activation.php', // Theme activation
	'inc/titles.php', // Page titles
	'inc/nav.php', // Custom nav modifications
	'inc/pagination.php', // Custom pagination
	'inc/gallery.php', // Custom [gallery] modifications
	'inc/comments.php', // Custom comments modifications
	'inc/scripts.php', // Scripts and stylesheets
	'inc/extras.php', // Custom functions
	'inc/acf.php', // Advanced Custom Fields
	'inc/cpt.php', // Custom Post Type
);

foreach ( $anunatheme_includes as $file ) {
	if ( !$filepath = locate_template( $file ) ) {
		trigger_error( sprintf( __( 'Error locating %s for inclusion', 'roots' ), $file ), E_USER_ERROR );
	}

	require_once $filepath;
}
unset( $file, $filepath );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
