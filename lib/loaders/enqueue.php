<?php namespace AnunaTheme\Loaders;

/* \AnunaTheme\Classes\Enqueue $enqueue */

$enqueue->front([
	'as' => 'anunatheme/css',
	'src' => \AnunaTheme\Assets\asset_path('styles/main.css')
]);

$enqueue->front([
	'as' => 'anunatheme/js',
	'src' => \AnunaTheme\Assets\asset_path('scripts/main.js'),
	'dep' => ['jquery'],
	'localize' => [
		'App' => [
			'ajax' => admin_url( 'admin-ajax.php' ),
			'snake' => [
				'score' => __('Score', 'anunatheme'),
				'reset' => __('Reset', 'anunatheme')
			]
		]
	]
]);
