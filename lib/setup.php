<?php

namespace AnunaTheme\Setup;

use AnunaTheme\Assets;

/**
* Theme setup
*/
function setup() {
	// Enable features from Soil when plugin is activated
	// https://roots.io/plugins/soil/
	add_theme_support('soil-clean-up');
	add_theme_support('soil-nav-walker');
	add_theme_support('soil-nice-search');
	add_theme_support('soil-jquery-cdn');
	add_theme_support('soil-relative-urls');

	// Make theme available for translation
	// Community translations can be found at https://github.com/roots/sage-translations
	load_theme_textdomain('sage', get_template_directory() . '/lang');

	// Enable plugins to manage the document title
	// http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag
	add_theme_support('title-tag');

	// Register wp_nav_menu() menus
	// http://codex.wordpress.org/Function_Reference/register_nav_menus
	register_nav_menus([
		'primary_navigation' => __('Primary Navigation', 'sage')
	]);

	// Enable post thumbnails
	// http://codex.wordpress.org/Post_Thumbnails
	// http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
	// http://codex.wordpress.org/Function_Reference/add_image_size
	add_theme_support('post-thumbnails');

	// Enable post formats
	// http://codex.wordpress.org/Post_Formats
	add_theme_support('post-formats', ['aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio']);

	// Enable HTML5 markup support
	// http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
	add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

	// Use main stylesheet for visual editor
	// To add custom styles edit /assets/styles/layouts/_tinymce.scss
	add_editor_style(Assets\asset_path('styles/main.css'));
}
add_action('after_setup_theme', __NAMESPACE__ . '\\setup');

/**
* Register sidebars
*/
function widgets_init() {
	register_sidebar([
		'name'          => __('Primary', 'sage'),
		'id'            => 'sidebar-primary',
		'before_widget' => '<section class="widget %1$s %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	]);

	register_sidebar([
		'name'          => __('Footer', 'sage'),
		'id'            => 'sidebar-footer',
		'before_widget' => '<section class="widget %1$s %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	]);
}
add_action('widgets_init', __NAMESPACE__ . '\\widgets_init');

/**
* Determine which pages should NOT display the sidebar
*/
function display_sidebar() {
	static $display;

	isset($display) || $display = !in_array(true, [
		// The sidebar will NOT be displayed if ANY of the following return true.
		// @link https://codex.wordpress.org/Conditional_Tags
		is_404(),
		is_front_page(),
		is_page_template('template-custom.php'),
	]);

	return apply_filters('anunatheme/display_sidebar', $display);
}

/**
* Theme assets
*/
function assets() {
	wp_enqueue_style('anunatheme/css', Assets\asset_path('styles/main.css'), false, null);

	if (is_single() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}

	wp_enqueue_script('anunatheme/js', Assets\asset_path('scripts/main.js'), ['jquery'], null, true);
	wp_localize_script( 'anunatheme/js', 'App', array(
		'ajax' => admin_url( 'admin-ajax.php' ),
		'snake' => array(
			'score' => __('Score', 'anunatheme'),
			'reset' => __('Reset', 'anunatheme')
		)
	) );
}
// add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\assets', 100);

/**
 * Editor style
 */
function editor_style() {
	add_editor_style( Assets\asset_path('styles/editor-style.css') );
}
add_action('admin_init', __NAMESPACE__ . '\\editor_style', 100);

/**
 * Typekit
 */
function typekit() { ?>
<script src="//use.typekit.net/<?php echo ANUNATHEME_TYPEKIT_ID ?>.js"></script>
<script>try{Typekit.load();}catch(e){}</script>

<?php }
if ( ANUNATHEME_TYPEKIT_ID ) {
	add_action( 'wp_head', __NAMESPACE__. '\\typekit', 2 );
}

/**
 * Google Analytics
 */
function analytics() { ?>
<script>
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	e.src='//www.google-analytics.com/analytics.js';
	r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	ga('create','<?php echo ANUNATHEME_ANALYTICS_ID; ?>');ga('send','pageview');
</script>

<?php }
if ( ANUNATHEME_ANALYTICS_ID && !current_user_can( 'manage_options' ) ) {
	add_action( 'wp_footer', __NAMESPACE__. '\\analytics', 20 );
}

/**
 * Facebook Pixel
 */
function pixel() { ?>
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '<?php echo ANUNATHEME_FACEBOOK_PIXEL_ID ?>');
fbq('track', "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=<?php echo ANUNATHEME_FACEBOOK_PIXEL_ID ?>&ev=PageView&noscript=1"
/></noscript>

<?php }
if ( ANUNATHEME_FACEBOOK_PIXEL_ID && !current_user_can( 'manage_options' ) ) {
	add_action( 'wp_head', __NAMESPACE__. '\\pixel', 20 );
}
