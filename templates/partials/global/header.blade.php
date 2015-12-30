{{--
@type 	Partial
@for 	Site Header
--}}
<header class="banner">
	<div class="container">
		<a class="brand" href="{{ esc_url(home_url('/')) }}">
			@include('svg.logo')
		</a>
	</div>
</header>

@include('partials.global.navigation')
