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
			var $container = $('.snake-container');
			var $canvas = $container.find('.snake-canvas');
			var canvas = $canvas.get(0);

			function resizeCanvas() {
				var width = $canvas.parent().width();
				var height = width*9/16;
				// set these to whatever dimensions you want
				canvas.style.width = width + 'px'; // width same as parent
				canvas.style.height = height + 'px'; // height same as parent

				// these must be set for proper drawing
				canvas.width = width;
				canvas.height = height;

				game.resize(); // let SnakeGame know that the canvas has resized, also necessary
			}
			var apple = $container.find('.snake-color.apple').css('color');
			var snake = $container.find('.snake-color.snake').css('color');
			var game = new SnakeGame(canvas, {
				snakeColor: snake,
				appleColor: apple
			});
			if (Modernizr.touch) {
				game.enableControls(); // enables on-screen arrow keys (optional)
			}

			$canvas.on('snake.collide', function() {
				$container.find('.snake-crash').fadeIn();
				$canvas.addClass('snake-crashed');
			});

			// game.play();
			$('.snake-play').on('click', function(e) {
				e.preventDefault();
				game.reset();
				$canvas.removeClass('snake-crashed');
				$canvas.addClass('snake-playing');
				$(this).parent().fadeOut(function() {
					canvas.focus(); // include if you want the game to focus when the page loads
					game.play();
				});
			});

			window.addEventListener('resize', resizeCanvas);
			resizeCanvas();
		}
	});
})(jQuery); // Fully reference jQuery after this point.
