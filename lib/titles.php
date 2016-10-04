<?php

namespace AnunaTheme\Titles;

/**
 * Page titles
 */
function title() {

	if ( is_home() ) {
		if ( get_option( 'page_for_posts', true ) ) {
			$title = get_the_title( get_option( 'page_for_posts', true ) );
		} else {
			$title = __( 'Latest Posts', 'anunatheme' );
		}
	} elseif ( is_archive() ) {
		$title = get_the_archive_title();
	} elseif ( is_search() ) {
		$title = sprintf( __( 'Search Results for %s', 'anunatheme' ), get_search_query() );
	} elseif ( is_404() ) {
		$title = __( 'Page Not Found', 'anunatheme' );
	} else {
		$title = get_the_title();
	}

	return apply_filters( 'anunatheme/title', $title );

}
