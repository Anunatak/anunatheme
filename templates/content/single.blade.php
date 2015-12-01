{{--
@type 	Content
@for 	Single Posts
--}}
<article {!! post_class() !!}>
	<header>
		@include('partials.entry-meta')
	</header>
	@if(has_excerpt())
	<div class="entry-summary">
	{!! the_excerpt() !!}
	</div>
	@endif
	<div class="entry-content">
		{!! the_content() !!}
	</div>
	<footer>
		{!! wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
	</footer>
</article>
