<?php


if ( !class_exists( 'Anunapress' ) ) {

	/**
	 * A simple version of the anuna_img-function when AnunaPress is missing
	 * */
	function anuna_img( $img, $args = '' ) {

		$string = '<img src="'. get_template_directory_uri() .'/assets/img/'. $img .'" alt="'. $img .'" />';

		echo $string;

	}

}
else {

	function anuna_img_settings( $settings ) {

		if ( is_array( $settings ) ) {
			$settings['theme_folder'] = '/assets/images/';
		}

		return $settings;

	}

	add_filter( 'anuna_img_args_parsed', 'anuna_img_settings' );

}
