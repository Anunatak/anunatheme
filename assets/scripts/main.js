/**
* DOM Based routing
*/
(function($) {
	$(document).router({
		common: function() {
			$(document).foundation();
		},
		home: function() {
			// Cool
		},
		error404: function() {
			var $container = $('.snake-container'); // the container for the snake game
			var $canvas = $container.find('.snake-canvas'); // the canvas jquery object
			var canvas = $canvas.get(0); // the canvas javascript element

			// get the color of the apple from the css
			var apple = $container.find('.snake-color.apple').css('color');

			// get the color of the snake head
			var snakeHead = $container.find('.snake-color.snake-head').css('color');

			// get the color of the snake tail
			var snakeTail = $container.find('.snake-color.snake-tail').css('color');

			// get the color of the score
			var score = $container.find('.snake-color.score').css('color');

			var game = $canvas.snake({
				snakeHeadColor: snakeHead,
				snakeTailColor: snakeTail,
				appleColor: apple,
				scoreColor: score
			});

			if (Modernizr.touch) {
				game.trigger('snake.enable.controls'); // enables on-screen arrow keys (optional)
			}

			game.on('snake.game.collide', function() {
				$container.find('.snake-crash').fadeIn();
				game.addClass('snake-crashed');
			});

			game.on('snake.game.play', function(event, snake, gameOver) {
				game.trigger('snake.reset');
				game.removeClass('snake-crashed');
				game.addClass('snake-playing');
			});

			$('.snake-play').on('click', function(e) {
				e.preventDefault();
				$(this).parent().fadeOut(function() {
					canvas.focus(); // include if you want the game to focus when the page loads
					game.trigger('snake.play');
				});
			});
		}
	});
})(jQuery); // Fully reference jQuery after this point.
