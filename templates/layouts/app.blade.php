{{--
@type 	Layout
@for 	Everything
--}}
<!doctype html>
<html {{ language_attributes() }}>
	@include('partials.global.head')
	<body {{ body_class() }}>
		<!--[if IE]>
			<div class="alert alert-warning">
				{{ __('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage') }}
			</div>
		<![endif]-->
		{!! do_action('get_header') !!}
		@include('partials.global.header')
		<div class="wrap container" role="document">
			<div class="content row">
				<main class="main">
					@yield('content')
				</main><!-- /.main -->
			</div><!-- /.content -->
		</div><!-- /.wrap -->
		{!! do_action('get_footer') !!}
		@include('partials.global.footer')
		{!! wp_footer() !!}
	</body>
</html>
