if(!window.console) {
	var console = {
		log: function() {
			
		}
	}
}

$(document).ready(function(){

	FastClick.attach(document.body);

	ImageContainerFadeIn();

	var initiated = false;

	var $slideControls = $('#slide-selectors');

	window.highlightControls = function () {
		$slideControls.addClass('highlight');
	}

	window.alternateControlsColor = function () {
		$slideControls.addClass('alternate');
	}

	window.normalControlsColor = function() {
		$slideControls.removeClass('alternate');
	}


	window.nextSlide = function() {
		console.log('nextSlide called');
	}


	var checkNewFrameReadyInterval,
		checkPreviousFrameInterval;

	window.enterSlide = function(target,step,reload) {

		$frame = $(target),
		frameWindow = window.frames[target.replace('#','')];

		clearInterval(checkNewFrameReadyInterval);

		clearInterval(checkPreviousFrameInterval);

		previousFrameWindow = window.frames[$('.slide-iframe.active').attr('name')];


		if(reload) {

			previousFrameWindow.reset();
			$('.slide-iframe').removeClass('active');
			$frame.addClass('active');

			function restartFrame() {

				if(previousFrameWindow.isReady) {

					console.log($frame);

					setTimeout(function(){
						previousFrameWindow.enter();
					},250);


				} else {
					setTimeout(restartFrame,125);
				}
			}

			setTimeout(restartFrame,125);

		} else {

			if(previousFrameWindow==frameWindow) { //select current frame again
				if(step) {
					frameWindow.steps[step]();
				}
				return;
			}

			checkPreviousFrameInterval = setInterval(function(){
				if(previousFrameWindow.isReady) {
					window.clearInterval(checkPreviousFrameInterval);

					if(previousFrameWindow.finishedAnimating) {

						if(previousFrameWindow.exit) {

							console.log('--TRANSITIONING: previous Frame has exit');

							previousFrameWindow.exit(function(){
								console.log("--TRANSITIONING: reset previous Frame");
								previousFrameWindow.reset();
							},function() {

								$('.slide-iframe').removeClass('active');

								$frame.addClass('active');

								checkNewFrameReadyInterval = setInterval(function(){
									if(frameWindow.isReady) {
										frameWindow.enter();
										clearInterval(checkNewFrameReadyInterval);
									}
								},100);

								
							});
						} else {

							console.log('--TRANSITIONING: previous Frame doesn\'t have exit');

							$('.slide-iframe').removeClass('active');

							$frame.addClass('active');

							checkNewFrameReadyInterval = setInterval(function(){
								if(frameWindow.isReady) {
									frameWindow.enter();
									clearInterval(checkNewFrameReadyInterval);
								}
							},100);

							setTimeout(function() {
								console.log("--TRANSITIONING: reset previous Frame");
								previousFrameWindow.reset();
							},previousFrameWindow.resetDelay || 250);

						}

					} else {

						console.log('--TRANSITIONING: previous Frame hasn\'t finished yet');

						$('.slide-iframe').removeClass('active');

						$frame.addClass('active');

						checkNewFrameReadyInterval = setInterval(function(){
							if(frameWindow.isReady) {
								frameWindow.enter();
								clearInterval(checkNewFrameReadyInterval);
							}
						},100);

						setTimeout(function() {
							console.log("--TRANSITIONING: reset previous Frame");
							if(previousFrameWindow.exitBeforeReset) {
								previousFrameWindow.exit(function(){
									previousFrameWindow.reset();
								});
							} else {
								previousFrameWindow.reset();
							}
						},250);

					}
				}
			},100);
		}

	}

	window.imReady = function(target) {
		if(target=='make-serious-money' && !initiated) {
			console.log('enter make-serious-money');
			window.frames['make-serious-money'].enter();
			initiated = true;
		}
	}

	var slideAvailable = true;

	$('.slide-selector').click(function(){
		
		var $self = $(this);

		if(slideAvailable) {
			slideAvailable = false;

			$('#slide-selectors').addClass('animating');

			$('.slide-selector').removeClass('active');

			$self.addClass('active');

			enterSlide($self.data('target'),$self.data('step'));

			slideSelectorTimeout = setTimeout(function(){
				slideAvailable = true;
				$('#slide-selectors').removeClass('animating');
			},1500);
		}


	});

});