<?php

namespace AnunaTheme\Anunatak;

if ( !class_exists( 'Anunapress' ) ) {

	$img_path = get_template_directory_uri() . '/dist/images/';

	/**
	 * A simple version of the anuna_img-function when AnunaPress is missing
	 * */
	function anuna_img( $img, $args = '' ) {

		$string = '<img src="'. $img_path . $img .'" alt="'. $img .'" />';

		echo $string;

	}

}
else {

	function anuna_img_settings( $settings ) {

		if ( is_array( $settings ) ) {
			$settings['theme_folder'] = '/dist/images/';
		}

		return $settings;

	}

	add_filter( 'anuna_img_args_parsed', __NAMESPACE__ . '\\anuna_img_settings' );

}
