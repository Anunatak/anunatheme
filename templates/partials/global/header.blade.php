{{--
@type 	Partial
@for 	Site Header
--}}
<header class="banner">
	<div class="container">
		<a class="brand" href="{{ esc_url(home_url('/')) }}">{!! bloginfo('name') !!}</a>
	</div>
</header>

@include('partials.global.navigation')
