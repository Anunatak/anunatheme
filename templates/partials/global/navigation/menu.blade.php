{{--
@type 	Partial
@what	Navigation Menu
--}}
<div class="nav-container" data-navigation-container>
	<nav class="nav-primary">
		@if(has_nav_menu('primary_navigation'))
			{!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
		@endif
	</nav>
</div>
