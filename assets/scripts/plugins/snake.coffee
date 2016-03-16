# Get modules
jQ        = jQuery
$         = jQuery
Snake     = require 'jquery-snake'
Modernizr = require 'browsernizr'

# Export the module
module.exports =
	bind: ->
		$container = jQ('.snake-container')
		$canvas = $container.find('.snake-canvas')
		canvas = $canvas.get(0)

		apple = $container.find('.snake-color.apple').css('color')
		snakeHead = $container.find('.snake-color.snake-head').css('color')
		snakeTail = $container.find('.snake-color.snake-tail').css('color')
		score = $container.find('.snake-color.score').css('color')

		game = new Snake canvas,
			snakeHeadColor: snakeHead,
			snakeTailColor: snakeTail,
			appleColor: apple,
			scoreColor: score

		if Modernizr.touch
			$canvas.trigger('snake.enable.controls')

		$canvas.on 'snake.game.collide', ->
			$container.find('.snake-crash').fadeIn()
			$canvas.addClass('snake-crashed')

		$canvas.on 'snake.game.play', (event, snake, gameOver) ->
			$canvas.trigger('snake.reset')
			$canvas.removeClass('snake-crashed')
			$canvas.addClass('snake-playing')

		jQ('.snake-play').on 'click', (e) ->
			e.preventDefault()
			$(this).parent().fadeOut ->
				canvas.focus()
				$canvas.trigger('snake.play')
