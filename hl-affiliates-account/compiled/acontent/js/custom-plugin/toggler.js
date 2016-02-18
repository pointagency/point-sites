$(document).ready(
	function() {

		console.log("toggler");

		$('.toggler').each(function(){
			var self = $(this),
			target = $(self.data('toggleTarget')),
			focusTarget = $(self.data('toggleFocus')),
			toggleClass = self.data('toggleClass'),
			toggleGroup = self.data('toggleGroup'),
			toggleBodyFixedHeight = self.data('toggleBodyFixedHeight'),
			toggleMatchContainerHeight = self.data('toggleOnActiveMatchHeight'),
			toggleSelfOffDisabled = self.data('toggleSelfOffDisabled'),
			toggleOffClick = self.data('toggleOffClick'),
			toggleSwitch = self.data('toggleSwitch'),
			toggleTargetClass = self.data('toggleTargetClass');

			if(!toggleClass || toggleClass == '') {
				toggleClass = 'active';
			}

			if(self.data('toggleTarget')=='self') {
				target = self;
			}


			console.log(target);

			var off = function() {
				$('[data-toggle-target="'+self.data('toggleTarget')+'"]').removeClass(toggleClass);
				target.removeClass(toggleClass);
				if(toggleBodyFixedHeight) {
					$('body').removeClass('fixed-height');
				}
				self.removeClass(toggleClass);
			}

			var on = function() {

				console.log('on');

				if(toggleGroup && toggleGroup != '') {
					$('[data-toggle-group="'+toggleGroup+'"]').removeClass(toggleClass);
				}

				focusTarget.focus();
				focusTarget.select();
				self.addClass(toggleClass);
				target.addClass(toggleClass);
				if(toggleBodyFixedHeight) {
					$('body').addClass('fixed-height');
				}
				if(toggleMatchContainerHeight) {
					$(toggleMatchContainerHeight).imagesLoaded(function(){
						$(toggleMatchContainerHeight).css({
							height: target.outerHeight()
						});
					});
				}
			}

			var toggle = function() {

				console.log('toggle');

				console.log(target);

				console.log(target.hasClass(toggleClass));

				// console.log(toggleClass);

				if(target.hasClass(toggleClass) && !toggleSelfOffDisabled) {
					off();
				} else {
					on();
				}

				if(toggleSwitch=='off') {
					target.removeClass(toggleTargetClass);
				} else {
					target.addClass(toggleTargetClass);
				}
			}

			if(self.data('hoverToggle')) {

				var hoverHandler = function(){

					console.log("ATTACH HOVER TOGGLE EVENT");

					self.mouseover(function(){
						if(!$('body').hasClass('touched')) {
							on();
						}
					});
					self.mouseout(function(){
						if(!$('body').hasClass('touched') && !toggleSelfOffDisabled) {
							off();
						}
					});

					$(document).off('mousemove',hoverHandler);
				}

				$(document).on('mousemove', hoverHandler);

				self.click(function(){
					if($('body').hasClass('touched')) {
						toggle();
					}
				});
				
				
			} else {
				self.click(function(){

					console.log('clicked');

					toggle();
				});
			}

			if(toggleOffClick) {
				$(document).on('click', function(e) {
					if(!$.contains(self.get(0),e.target) && e.target!==self.get(0) && !$(e.target).is(self.data('toggleTarget'))) {

						if($(e.target).closest(self.data('toggleTarget')).length<=0) {
							off();
						}

					}
				})
			}
		});

		function resize() {
			$('.toggler.active').each(function(){
				var self = $(this),
				target = $(self.data('toggleTarget')),
				toggleMatchContainerHeight = self.data('toggleOnActiveMatchHeight');

				if(toggleMatchContainerHeight) {

					$(toggleMatchContainerHeight).imagesLoaded(function(){
						$(toggleMatchContainerHeight).css({
							height: target.outerHeight()
						});

						setTimeout(function(){
							$(toggleMatchContainerHeight).css({
								height: target.outerHeight()
							});
						},750);
					});
				}

			});
		}
	
		$(window).resize(resize);

		resize();

		$('.disable-propagation').click(function(e){
			e.stopPropagation();
		});
	}
);