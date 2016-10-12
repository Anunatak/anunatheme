<?php
/**
 * Advanced Custom Fields
 *
 * @see Documentation: http://www.advancedcustomfields.com/resources/
 *
 * @package anunastart
 */

/**
 * Replace ACF Function when they do not exist so the theme does not break
 */
if ( !function_exists( 'get_field' ) ) {
	function get_field( $key, $id = null ) {
		global $post;
		if ( !$id ) {
			$id = $post->ID;
		}
		return get_post_meta( $id, $key = '', true );
	}
	function the_field( $key, $id = null ) {
		echo get_field( $key, $id );
	}
}

/**
 * Adds a theme options page
 */
if ( function_exists( 'acf_add_options_page' ) ) {

	$page = acf_add_options_page( array(
			'page_title'  => __( 'Site General Settings', 'roots' ),
			'menu_title'  => __( 'Site Settings', 'roots' ),
			'menu_slug'  => 'general-settings',
			'capability'  => 'edit_posts',
			'redirect'   => false
		) );

}

/**
 * Change json paths
 */

add_filter( 'acf/settings/save_json', 'anuna_acf_json_save_point' );

function anuna_acf_json_save_point( $path ) {

	// update path
	$path = get_template_directory() . '/lib/fields';

	// return
	return $path;

}

add_filter( 'acf/settings/load_json', 'anuna_acf_json_load_point' );

function anuna_acf_json_load_point( $paths ) {

	// only load the one path
	$paths = array( get_stylesheet_directory() . '/lib/fields' );

	// return
	return $paths;

}

/**
 * Register field groups
 */

//.. [insert field group export code here] ..//



?>
