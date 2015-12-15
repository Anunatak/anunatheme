{{--
@type 	Content
@for 	Error Pages
--}}
<div class="callout alert">
	{{ __('Sorry, we could not find the page you were requesting.', 'anunatheme') }}
</div>

{{ __('We know you might be sad right now. Perhaps playing Snake will make you feel better?', 'anunatheme') }}

<div class="snake-container">
	<div class="snake-color snake"></div>
	<div class="snake-color apple"></div>
	<div class="snake-intro">
		<button class="snake-play">
			{{ __('Play Snake', 'anunatheme') }}
		</button>
	</div>

	<div class="snake-crash">
		<p>{{ __("Argh! You've crashed.") }}</p>
		<button class="snake-play">
			{{ __('Play Again', 'anunatheme') }}
		</button>
	</div>

	<canvas class="snake-canvas" id="snake" tabindex="1" width="400" height="200"></canvas>
</div>

