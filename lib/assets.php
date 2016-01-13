<?php

namespace AnunaTheme\Assets;

/**
 * Get paths for assets
 */
class JsonManifest {
	private $manifest;

	public function __construct($manifest_path) {
		if (file_exists($manifest_path)) {
			$this->manifest = json_decode(file_get_contents($manifest_path), true);
		} else {
			$this->manifest = [];
		}
	}

	public function get() {
		return $this->manifest;
	}

	public function getPath($key = '', $default = null) {
		$collection = $this->manifest;
		if (is_null($key)) {
			return $collection;
		}
		if (isset($collection[$key])) {
			return $collection[$key];
		}
		foreach (explode('.', $key) as $segment) {
			if (!isset($collection[$segment])) {
				return $default;
			} else {
				$collection = $collection[$segment];
			}
		}
		return $collection;
	}
}

function asset_path($filename) {
	$dist_path = get_template_directory_uri() . '/dist/';
	$directory = dirname($filename) . '/';
	$file = basename($filename);
	static $manifest;

	if (empty($manifest)) {
		$manifest_path = get_template_directory() . '/dist/' . 'assets.json';
		$manifest = new JsonManifest($manifest_path);
	}

	if (array_key_exists($file, $manifest->get())) {
		return $dist_path . $directory . $manifest->get()[$file];
	} else {
		return $dist_path . $directory . $file;
	}
}

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

	add_filter( 'anuna_img_args_parsed', 'anuna_img_settings' );

}
