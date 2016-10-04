<?php namespace AnunaTheme\Loaders;

/* \AnunaTheme\Classes\Enqueue $enqueue */

$enqueue->front( array(
		'as' => 'anunatheme/css',
		'version' => '1.0.0',
		'src' => \AnunaTheme\Assets\asset_path( 'styles/main.css' )
	) );

$enqueue->front( array(
		'as' => 'anunatheme/js',
		'version' => '1.0.0',
		'src' => \AnunaTheme\Assets\asset_path( 'scripts/app.js' ),
		'dep' => array( 'jquery' ),
		'localize' => array(
			'App' => array(
				'ajax' => admin_url( 'admin-ajax.php' ),
				'snake' => array(
					'score' => __( 'Score', 'anunatheme' ),
					'reset' => __( 'Reset', 'anunatheme' )
				)
			)
		)
	) );
