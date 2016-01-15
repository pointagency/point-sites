$(document).ready(function(){

	FastClick.attach(document.body);

	ImageContainerFadeIn();

	var $slideControls = $('#slide-selectors');

	window.highlightControls = function () {
		$slideControls.addClass('highlight');
	}


	window.nextSlide = function() {
		console.log('nextSlide called');
	}

	window.enterSlide = function(target) {
		$frame = target,
		frameWindow = window.frames[target.replace('#','')];


		$('.slide-iframe').removeClass('active');

		$frame.addClass('active');
		frameWindow.enter();


		
	}

	$('.slide-selector').click(function(){
		
		var $self = $(this);


		enterSlide($self.data('target'));
			

	});



});