VerticalScrollTogglerCommon = {};

VerticalScrollTogglerCommon.items = [];

console.log("VerticalScrolLToggler start");

$(window).scroll(function(){

	for (var i=0; i < VerticalScrollTogglerCommon.items.length; i++) {
		VerticalScrollTogglerCommon.items[i].check();
	}

});

VerticalScrollToggler = function(options) {
	var scrollToggler = {};

	scrollToggler.element = $(options.selector);

	scrollToggler.check = function(){
		if(options.on(scrollToggler.element)){

			scrollToggler.element.addClass(options.toggleClass || 'active');

		} else if(options.off) {

			if(options.off(scrollToggler.element)) {
				scrollToggler.element.removeClass(options.toggleClass || 'active');
			}
		}
	};

	VerticalScrollTogglerCommon.items.push(scrollToggler);

	return scrollToggler;
}


;
console.log('TypeWriter');

TypeWriter = function(options) {
	var typeWriterElements = $(".type-writer");

	if(typeWriterElements.length > 0) {
		typeWriterElements.each(function(){
			var self = $(this),
				$display = $(self.find('.type-writer-content')),
				$sizeDisplay = $(self.find('.type-writer-content-sizer')),
				typeDelay = self.data('typeWriterDelay') || 75,
				typeInterval = self.data('typeWriterInterval') || 5000;

			var strings = (self.data('typeWriterContent'));

			// console.log(typeDelay);

			// console.log(strings);

			var typeTimeout = {};

			function typeString(s) {

				var string = strings[s];

				function start(c) {

					$display.html(string.substring(0,c));

					if(c<string.length) {
						typeTimeout = setTimeout(function(){
							start(c+1);
						},typeDelay);	
					} else {

						if(s<strings.length-1) {
							s = s+1;
						} else {
							s = 0;
						}

						if(strings.length>1) {
							typeTimeout = setTimeout(function(){
								$display.animate({
									opacity: 0
								},250,function(){
									$display.html('');
									$display.css({
										opacity: 1
									});
									typeString(s);
								});
								
							},typeInterval);
						} else {
							options.callback();
						}
					}
				}



				$sizeDisplay.html(string);
				$display.css({
					width: $sizeDisplay.outerWidth()*1.025
				});

				
				setTimeout(function(){

					start(1);

				},500);
				
				
			}

			if(options.delay) {
				setTimeout(function(){
					typeString(0);
				},options.delay);
			} else {
				typeString(0);
			}

			console.log('start typing');
			console.log('type-writer delay: '+options.delay);

			$(window).resize(function(){
				$display.css({
					width: $sizeDisplay.outerWidth()*1.025
				});
			});

		});
	}
}
;
var ImageContainerFadeIn = function(){

	var $elements = $('.p-image-container-fade-in');

	if($elements.length>0) {
		console.log("init image loader");
		

		$('.p-image-container-fade-in').each(function(){
			var self = $(this);
			imagesLoaded(self,function(){
				self.addClass('images-loaded');
			});
		});
		
	}
}
;
Toggler = function() {

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
		toggleOffClick = self.data('toggleOffClick');

		if(!toggleClass || toggleClass == '') {
			toggleClass = 'active';
		}

		if(self.data('toggleTarget')=='self') {
			target = self;
		}
		var off = function() {
			$('[data-toggle-target="'+self.data('toggleTarget')+'"]').removeClass(toggleClass);
			target.removeClass(toggleClass);
			if(toggleBodyFixedHeight) {
				$('body').removeClass('fixed-height');
			}
			self.removeClass(toggleClass);
		}

		var on = function() {
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
				$(toggleMatchContainerHeight).css({
					height: target.outerHeight()
				});
			}
		}

		var toggle = function() {
			if(target.hasClass(toggleClass) && !toggleSelfOffDisabled ) {
				off();
			} else {
				on();
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
				toggle();
			});
		}

		if(toggleOffClick) {
			$(document).on('click', function(e) {
				if(!$.contains(self.get(0),e.target) && e.target!==self.get(0)) {
					off();
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
				$(toggleMatchContainerHeight).css({
					height: target.outerHeight()
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
;
var PClickScrollTo = function() {
	var pClickScrollTo = $('.p-click-scroll-to');

	console.log(pClickScrollTo);

	if(pClickScrollTo.length>0) {
		pClickScrollTo.each(function(){
			var self = $(this);



			self.click(function(){

				var offset = 0;

				if($(window).width>self.data('clickScrollToMinWidthOffset')) {
					$(self.data('clickScrollToOffset')).each(function(){
						offset += $(this).outerHeight();
					});
				}
				

				$('html, body').animate({
					scrollTop: $(self.data('clickScrollToTarget')).offset().top - offset
				},self.data('clickScrollToDuration'))

			});	

		});
	}

	return pClickScrollTo;
}
;


Utils = {};

Number.prototype.toNearest = function(num) { // num is an exponent of 10
     return Math.round(this/num)*num;
}

Utils.isMobile = function (){
	var check = false;
	var $window = $(window);
	(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
}

window.addEventListener('touchstart', function setHasTouch () {
    hasTouch = true;
    // Remove event listener once fired, otherwise it'll kill scrolling
    // performance

    $('body').addClass('touched');

    window.removeEventListener('touchstart', setHasTouch);

}, false);


Utils.getQueryVariable = function(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

Utils.scrollTo = function(id,duration) {
	$('html, body').animate({
		scrollTop: $(id).offset().top
	},duration || 500);
}

Utils.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Utils.isJA = function() {
	return $('body.ja').length>0;
}

Utils.getDisplayMoney = function(n) {

	var displayString = n+"";


	displayString = displayString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");


	return displayString;
}


Utils.countUpTo = function(options){

	var element = options.element,
		start = options.start,
		finish = options.finish,
		duration = options.duration,
		speed = options.speed, 
		unit = options.unit || '', 
		easing = options.easing,
		stepCallback = options.step,
		formatter = options.formatter,
		prefix = options.prefix || '',
		suffix = options.suffix || '',
		dynamicWidth = options.dynamicWidth;
		fitText = element.data('fitText');

	if(duration) {

	} else {
		if(speed) {
			duration = (finish-start)/speed;
		}
	}

	if(!dynamicWidth) {
		element.html(prefix+finish+unit+suffix);
		element.css({
			width: element.outerWidth()
		});
	}

	element.css({
		visibility: 'visible'
	});


	var fitTextLevel = 0.1*((options.finish+"").length)/1.75;

	var maxFontSize = element.css('font-size');


	if(fitText) {
		element.fitText(fitTextLevel,{maxFontSize: maxFontSize});
	}

	$({count: start}).animate({count: finish},{
		duration: duration,
		easing: easing || 'linear',
		step: function() {

			var value = Math.floor(this.count);

			if(formatter) {
				value =  formatter(value);
			}

			element.html(prefix+value+unit+suffix);


			

			if(stepCallback) {
				stepCallback(this);
			}
		},
		complete: function() {

			var value = finish;

			if(formatter) {
				value =  formatter(value);
			}

			element.html(prefix+value+unit+suffix);
			if(fitText) {
				element.fitText(fitTextLevel,{maxFontSize: maxFontSize});
			}

			if(!options.disableFinishEvent) {
				element.trigger("count-finished");
			}
		}
	});
}

Utils.debug = {
	enabled: true,
	log : function(message,indent,style) {
		if(Utils.debug.enabled) {
			var message = message;
			for(var i=0; i<indent; i++) {
				message = "\t"+message;
			}
			console.log(message,style || "");
		}
	},
	error : function(message,indent) {
		this.log('%c Error: '+message,indent,'color: #e53e17');
	},
	warn : function(message, indent) {
		this.log('%c Warning: '+message,indent,'color: #cc8606');
	}
}

Utils.designReference = {
	init : function() {
		Utils.debug.log("Initiate 'design reference layer'");

		var self = Utils.designReference;

		$('.design-reference').css({
			position: 'absolute',
			top: 0,
			left: 0,
			zIndex: 0,
			width: '100%',
			display: 'block'
		});

		$('.design-reference img').css({
			position: 'absolute',
			top: 0,
			left: '50%'
		});

		$('.page-content').css({
			position: 'relative',
			zIndex: 1
		});




		$('body').append("<div class='fadeContentToggle btn btn-default'>Fade content</div>");
		$('.fadeContentToggle').css({
			width: '120px',
			height: '48px',
			position: 'fixed',
			bottom: 0,
			right: 0,
			zIndex: '9999999999'
		});
		$('.fadeContentToggle').click(function(){
			var self = $(this),
			controller = Utils.designReference;

			if(self.hasClass('on')){
				controller.contentOn();
			} else {
				controller.contentOff();
			}
		});	

		$('body').append("<div class='designToggle btn btn-default'>Show/Hide Design</div>");
		$('.designToggle').css({
			width: '120px',
			height: '48px',
			position: 'fixed',
			bottom: '56px',
			right: 0,
			zIndex: '9999999999'
		});


		$('.designToggle').click(function(){
			var self = $(this),
			controller = Utils.designReference;

			if(self.hasClass('on')){
				controller.designOff();
			} else {
				controller.designOn();
			}
		});	
		


		self.contentOff();
	},
	contentOff: function () {
		$('.fadeContentToggle').addClass('on');
		$('.page-content').css({
			opacity: 0.5
		});
	},
	contentOn: function () {
		$('.fadeContentToggle').removeClass('on');
		$('.page-content').css({
			opacity: 1
		});
	},
	designOff: function () {
		$('.designToggle').removeClass('on');
		$('.design-reference').css({
			display: 'none'
		});
	},
	designOn: function () {
		$('.designToggle').addClass('on');
		$('.design-reference').css({
			display: 'block'
		});
	}
}