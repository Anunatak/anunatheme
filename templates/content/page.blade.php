{{--
@type 	Content
@for 	Single Posts
--}}
<article {!! post_class() !!}>
	@if(has_post_thumbnail())
		<div style="width:100%; height: 500px; background-image: url('{{ anuna_img('', 'width=1500&height=600&type=thumbnail&multiply=229,214,29&output=src') }}');"></div>
	@endif
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
