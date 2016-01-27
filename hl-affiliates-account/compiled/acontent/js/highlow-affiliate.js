if(!window.console) {
	var console = {
		log: function() {

		}
	}
}

/* tCycle Modified */

(function($){

	"use strict";

	$.fn.tcycle = function(command){


		function cycle(skipPrepend) {

			var i=0, c=$(this), s=c.children(), o=$.extend({speed:500,timeout:4000},c.data()), f=o.fx!='scroll',
				l=s.length, w=c.width(), z=o.speed, t=o.timeout, css={overflow:'hidden'}, p='position', a='absolute',
				tfn=function(){ c.data('recursiveTimeout',setTimeout(tx,t));}, scss = $.extend({position:a,top:0}, f?{left:0}:{left:w}, o.scss);
			if (c.css(p)=='static')
				css[p]='relative';


			s.css(scss);
			if(f)
				s.hide().eq(0).show();
			else
				s.eq(0).css('left',0);
			c.data('initTimeout',setTimeout(tx,t));

			function tx(){
				var n = i==(l-1) ? 0 : (i+1), w=c.width(), a=$(s[i]), b=$(s[n]);
				c.data('currentSlide',n);
				if (f){
					a.fadeOut(z);
					b.fadeIn(z,tfn);
				}else{
					a.animate({left:-w},{duration: z, easing: "easeInOutBack", complete: function(){
						a.hide();
						a.addClass('out');
					}});
					b.css({'left':w,display:'block'}).animate({left:0},z,tfn);
					b.removeClass('out');
				}
				i = i==(l-1) ? 0 : (i+1);
			}

		}

		if(command == "reset") {
			this.each(function(){
				window.clearTimeout($(this).data('initTimeout'));
				window.clearTimeout($(this).data('recursiveTimout'));
				$(this).tcycle(true);
			});

			return;
		}


		this.each(cycle);

		return this;

	};


	$(function(){
		$('.tcycle').tcycle();
	});

})(jQuery)

/* END tCycle Modified */


/* web-font deferrer */ 

function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
        (function(font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font;

            var interval;
            function checkFont() {
                // Compare current width with original width
                if(node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length) {
                    if(interval) {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length) {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont()) {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }
};

/* rotating strip on top of footer */

window.rotatingStripInit = function () {
	$('.kapitall-strip').each(function () {
		var self = $(this);
		var stripWidth = 0,
			$strip = $(self.find('.rotating-strip ul')),
			$testi = $(self.find('.testi')),
			$stripRoot = $(self.find('.rotating-strip')),
			pixelPerSecond = 90;
		$(self.find('.rotating-strip ul > li')).each(function(){
			stripWidth += $(this).outerWidth();
		});
		$strip.css('width',stripWidth);

		function toggleTesti() {

			if($testi.hasClass('faded')){
				$testi.removeClass('faded');
				$stripRoot.addClass('faded');
				setTimeout(function() {
					toggleTesti();
				},14000);
			} else {
				$strip.css('margin-left',0);
				rotateInterval = setInterval(rotateStrip, 1000/pixelPerSecond);
				$testi.addClass('faded');
				$stripRoot.removeClass('faded');
			}
			
		};
		var rotating = true;

		function rotateStrip() {
			if(rotating) {
				$strip.css('margin-left',parseInt($strip.css('margin-left'))-1);
				
				if(parseInt($strip.css('margin-left')) <= $($strip.parent()).width() - $strip.outerWidth() && $strip.css('margin-left') != '0px') {
					clearInterval(rotateInterval);
					toggleTesti();
				}
			}
		}

		
		var rotateInterval = setInterval(rotateStrip, 1000/pixelPerSecond);
	});
	
	window.resizeHandler.addHandler(function(){
		$('.tcycle .out').css('left',-$('.tcycle').width());
	});
	// $strip.animate({
	// 	"margin-left": -stripWidth
	// },{easing: "linear",duration:stripWidth/pixelPerSecond*1000}, function(){
	// 	alert('pull testi in now');
	// // });

	// window.scrollHandler.addHandler(function (){
	// 	if($window.scrollTop() > $stripRoot.offset().top - $window.height() && $window.scrollTop() < $stripRoot.offset().top + $stripRoot.outerHeight() + $window.height() ) {
	// 		rotating = true;
	// 	} else {
	// 		rotating = false;
	// 	}
	// });
}

/* end rotating strip */

/* full-height hero */

window.fullHeightHeroInit = function () {
	if($hero.length > 0 || $('.single-page.std-cont').length>0){
		window.resizeHandler.addHandler(function (){
			var aspectRatio = $window.width()/$window.height();
			var isAffiliatePage = $('.hero.affiliate').length<=0;

		
			$('.hero.affiliate .bg').css({
				bottom : $('.hero-content .cta').outerHeight()
			});
			



			$('.hero-content').each(function(){
				var $header = $('header'),
					$strip = $('.kapitall-strip'),
					$landingHeadline = $($(this).find('.headline')),
					$cta = $($(this).find('.cta')),
					$bg = $('.hero .bg'),
					$realContentBlock = $($(this).find('.headline-content-inner-wrap')),
					contentH = 0,
					heroH = 0;
					if($(this).data('disableFullHeight')) {
						contentH = ($window.height()>640||$window.width()>480)?($realContentBlock.outerHeight()*(1.2)):($realContentBlock.outerHeight()+60);
						heroH = contentH;
					} else {
						if($window.height()>=680 ) {
							heroH = $window.height()-$header.outerHeight()-$strip.outerHeight();
						} else {
							heroH = $window.height()-$header.outerHeight();
						}
						if(aspectRatio < 4/3 && isAffiliatePage) {
							if($bg.outerHeight()-$header.outerHeight()<heroH-$cta.outerHeight() && $bg.outerHeight()!=0) {
								heroH = $bg.outerHeight()-$header.outerHeight();
							}
						}

						/* if the calculated hero height is less than the real height of the content + 1/10th of the windo's width 
						(the amount of padding we want for the real content to be had) + the yellow cta height, set it to that exact height (the real height of the content + 1/10th of the windo's width 
						(the amount of padding we want for the real content to be had) + the yellow cta height).
						*/

						if( (heroH <= $realContentBlock.outerHeight()+$window.width()*0.2+$cta.outerHeight() && $window.width()<768 )|| (heroH <= $realContentBlock.outerHeight() && $window.width()>= 768)) {
							heroH = $realContentBlock.outerHeight()+$window.width()*0.2+$cta.outerHeight();
						}

						contentH = heroH-$cta.outerHeight();
						
					}
					
					$(this).css('min-height',heroH);
					$landingHeadline.css('height',contentH);
					

					


			});
			
			if($(window).height()>640 && $(window).width()>480) {
				$('.hero-content.affiliate-login, .hero-content.affiliate-login .headline, .std-cont.single-page').css({
					'min-height' : $(window).height() - $('footer').outerHeight() - $('header').outerHeight()
				});
			}

			$('body').removeClass('hide');	
			waitForWebfonts(['Montserrat'], function() {
			   $('.flow-explain').addClass('in');
			});

			if($('html[lang="ja-JP"]').length>0) {
				setTimeout(function(){
					$('.flow-explain').addClass('in');
				},500);
			}
		});
	}	
}

/* end full-height hero */


/* landing navigation */

window.goToDemo = function () {
	var easing = "easeInOutExpo";
	$('.hero-content.landing').removeClass('active');
	$('.hero-content.demo').addClass('active');
	var $landingHeadline  = $('.headline.landing'),
		$cta = $('.landing .cta'),
		$demoHeadline = $('.headline.demo'),
		$demoCta = $('.demo .cta'),
		$demoBlock = $('#demo-block');

	$landingHeadline.animate({
		"margin-top": -$landingHeadline.outerHeight(),
		"opacity": 0
	},{
		duration: 500,
		easing: easing
	});
	
	$cta.animate({
		"margin-bottom": -$cta.outerHeight(),
		"opacity": 0
	},{
		duration: 500,
		easing: easing
		
	});

	$demoHeadline.animate({
		"margin-top": 0,
		"opacity": 1
	},{
		duration: 500,
		easing: easing
	});

	$demoCta.animate({
		"margin-left": 0,
		"opacity": 1
	},{
		duration: 500,
		easing: easing
	});

	$demoBlock.animate({
		"margin-left": 0,
		"opacity": 1 
	},{
		duration: 1000,
		easing: easing
	});
	

	$('html, body').animate({
		scrollTop : 0
	},{duration: 250});
}

window.returnToMainPage = function (duration) {
	var easing = "easeInOutExpo";

	$('.hero-content.landing').addClass('active');
	$('.hero-content.demo').removeClass('active');
	var $landingHeadline  = $('.headline.landing'),
		$cta = $('.landing .cta'),
		$demoHeadline = $('.headline.demo'),
		$demoCta = $('.demo .cta'),
		$demoBlock = $('#demo-block');	

	$landingHeadline.animate({
		"margin-top": 0,
		"opacity": 1
	},{
		duration: duration,
		easing: easing
	});

	$cta.animate({
		"margin-bottom": 0,
		"opacity": 1
	},{
		duration: duration,
		easing: easing,
		complete:  function () {
			
		}
	});
	$demoCta.animate({
		"margin-left": -$demoCta.outerWidth(),
		"opacity": 0
	},{
		duration: duration,
		easing: easing
	});
	$demoBlock.animate({
		"margin-left": -$demoBlock.outerWidth(),
		"opacity": 0
	},{
		duration: duration,
		easing: easing
	});
	$demoHeadline.animate({
		"margin-top": -$demoHeadline.outerWidth(),
		"opacity": 0
	},{
		duration: duration,
		easing: easing
	});
	
	$('html, body').animate({
		scrollTop : 0
	},{duration: 250});
}

window.landingNavigationInit = function () {

	returnToMainPage(0);

	$('#return-to-main-page').click(function (){
		returnToMainPage(600);
	});

	$('#im-new').click(function(){
		goToDemo();
	});

}

/* end splash navigation */

/* sticky-strip */ 

window.stickyStripInit = function () {
	if($('.sticky-strip').length> 0) {
		window.scrollHandler.addHandler(function () {
			$('.sticky-strip').each(function(){
				var self = $(this);
				content = $(self.find('.content'));
				self.css('min-height',content.outerHeight());
				if($window.scrollTop()>=self.offset().top && $window.outerWidth()>767) {
					content.addClass('sticky');
				} else {
					content.removeClass('sticky');
				}
			});
		});
	}
}

/* end sticky-strip */

/* expandable */

window.expandableInit = function () {
	$('.expandable').each(function(){
		var self = $(this);
		$(self.find('.expandable-header')).click(function(){
			if(self.hasClass('expanded')) {
				self.removeClass('expanded');
			} else {
				self.addClass('expanded');
			}
		});
	});
}

/* end expandable */

/* blog list cards layout */

window.blogListInit = function () {
	if($('.blog-list').length >0) {
		$('.blog-list').isotope({
			masonry: {
			  columnWidth: '.blog-item-wrapper'
			},
			itemSelector: '.blog-item-wrapper'
		});
	}

	// window.resizeHandler.addHandler(function(){

	// });
}

/* end blog list cards layout */


/* tab (both side bar and full-width tabs) responsive */

window.tabViewInit = function () {

	var breakpoint = 768;
	$('.tab-side-bar').each(function(){
		var self = $(this);
		$(this).on('click','.nav.nav-tabs li', function(){
			if(self.hasClass('selecting')) {
				// if($window.outerWidth() < breakpoint){
				// 	$('html, body').animate({
				// 		scrollTop: self.offset().top
				// 	},{duration: 250, ease: "easeInOutQuad"});
				// }
				self.removeClass('selecting');
			} else {
				if($window.outerWidth() < breakpoint){
					$('html, body').animate({
						scrollTop: self.offset().top
					},{duration: 250, ease: "easeInOutQuad"});
				}
				if($window.outerWidth() < breakpoint){
					self.addClass('selecting');
				}
			}
		});
	});

	$('.tab-full-width').each(function(){
		var self = $(this);


		/* click handler (for when tab view collapse) */

		$(this).on('click','> .tab-selector-wrap .nav.nav-tabs li', function(){
			if(self.hasClass('selecting')) {
				// if($window.outerWidth() < breakpoint){
				// 	$('html, body').animate({
				// 		scrollTop: self.offset().top
				// 	},{duration: 250, ease: "easeInOutQuad"});
				// }
				self.removeClass('selecting');
			} else {
				if($window.outerWidth() < breakpoint){
					$('html, body').animate({
						scrollTop: self.offset().top
					},{duration: 250, ease: "easeInOutQuad"});
				}
				if($window.outerWidth() < breakpoint){
					self.addClass('selecting');
				}
			}
		});


		/* normalize tab width */

		var tabs = $($(this).find('> .tab-selector-wrap .nav.nav-tabs li'));

		tabs.css('width',(100/tabs.length)+"%");

	});




	window.resizeHandler.addHandler(function(){
		if(breakpoint<=$window.width()){
			$('.selecting').removeClass('selecting');
		}
	});

}

/* end tab-side-bar responsive */

/* app download mobile handler */

window.appDownloadInit = function () {
	var $appDownloadSection = $('.app-download');
	$('.download-panel').each(function(){
		var self = $(this);
		self.on('click','.download-panel-header', function(){
			if($window.width()<768) {
				if(self.hasClass('open')) {
					self.removeClass('open');

					$('html, body').animate({
						scrollTop: $appDownloadSection.offset().top
					},{duration: 250, easing: 'easeInOutQuad'});

				} else {
					$('.download-panel.open').removeClass('open');
					self.addClass('open');

					$('html, body').animate({
						scrollTop: self.offset().top
					},{duration: 250, easing: 'easeInOutQuad'});
				}
			}
		});
	});
}

/* demo block mock */

window.demoBlockInit = function () {
	$('#demo-block .step').click(function(){
		$('#demo-block .step').removeClass('in');
		$($(this).data('next')).addClass('in');
		if($(this).data('focus')) {
			$('.hero-content.demo .overlay').addClass('in');
		} else {
			$('.hero-content.demo .overlay').removeClass('in');
		}
	}); 
}

/* end demo block mock */

window.UIinit = function () {
	rotatingStripInit();

	$(':first-child').addClass('first-child');
	$(':last-child').addClass('last-child');
	$('tr:nth-child(odd)').addClass('odd');
	$('tr:nth-child(even)').addClass('even');




	-1!=navigator.userAgent.indexOf("Mac OS X")?$("body").addClass("mac"):$("body").addClass("pc");

	window.normalizeHeight('.js-commission-structure');

	window.resizeHandler.addHandler(function(){
		window.normalizeHeight('.js-commission-structure');
	});


	//landingNavigationInit();
	expandableInit();
	fullHeightHeroInit();
	stickyStripInit();
	blogListInit();
	//demoBlockInit();
	tabViewInit();
	appDownloadInit();
//	setupSystemMessageFramework();
}



window.resizeHandler = {
	handlers : [],
	addHandler : function (handler){
		this.handlers.push(handler);
	},
	removeHandler : function (handler){
		this.handlers.splice(this.handlers.indexOf(handler));
	},
	execute: function () {
		var self = window.resizeHandler;
		for (var i = 0; i < self.handlers.length; i++) {
			self.handlers[i]();
		}
	},
	init : function  () {
		var self = this;
		$window.unbind('resize', self.execute);
		self.execute();
		$window.bind('resize',self.execute);
	}
}

window.scrollHandler = {
	handlers : [],
	addHandler : function (handler){
		this.handlers.push(handler);
	},
	removeHandler : function (handler){
		this.handlers.splice(this.handlers.indexOf(handler));
	},
	execute: function () {
		var self = window.scrollHandler;
		for (var i = 0; i < self.handlers.length; i++) {
			self.handlers[i]();
		}
	},
	init : function  () {
		var self = this;
		$window.unbind('scroll', self.execute);
		self.execute();
		$window.bind('scroll',self.execute);
	}
}

$.validator.setDefaults({
    highlight: function(element) {
    	$(element).closest('.input-wrap').find('.error-message').remove();
        $(element).closest('.input-wrap').addClass('error');
    },
    unhighlight: function(element) {
        $(element).closest('.input-wrap').removeClass('error');
        $(element).closest('.input-wrap').find('.error-message').remove();
    },
    errorElement: 'span',
    errorClass: 'error-message',
    errorPlacement: function(error, element) {
        if(element.parent('.input-wrap').length) {
        	error.insertAfter(element);
        } else {
        	error.insertAfter(element.parent().parent());
        }
    }
});

window.normalizeHeight = function(selector){
	var maxHeight = 0;
	$(selector).css('min-height','0');
	$(selector).each(function(){
		var self = $(this);
		if ( self.outerHeight() > maxHeight ) {
			$(selector).css('min-height',self.outerHeight());
			maxHeight = self.outerHeight();
		}
	});
}

window.toggler = {
	init: function() {

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
					$(toggleMatchContainerHeight).imagesLoaded(function(){
						$(toggleMatchContainerHeight).css({
							height: target.outerHeight()
						});
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
}


$(document).ready(function(){

	// $('body').addClass('hide');

	$window = $(window);
	$hero  = $('.hero');

	$('#tour-down').click(function(){
		$('html,body').animate(
			{
				scrollTop: $('#explanation').offset().top 
			},
			{
				duration: 500,
				easing: 'easeInOutExpo'
			}
		);
	});
	$(".error-message").each(function(){
		inputwrap = $(this).parent().find('.input-wrap');
		inputwrap.append($(this)).addClass('error');
	});
	
	$("#form-login").submit(function() {

		var url = $(this).attr('action'); // the script where you handle the form input.

		$.ajax({
			type: "POST",
			url: url,
			dataType: 'json',
			data: $("#form-login").serialize(), // serializes the form's elements.
			success: function(data){
				if(data.has_error == true) {
					$("#form-login-error").html('<div class="errorMsg">' + data.error  +'</div>');
				} else {
					location.href = data.target_path;
				}
			}
		});

			return false; // avoid to execute the actual submit of the form.
	});
	
    $('form.validate').validate();

		$("#login-trigger-button").click(function(){
			$('#form-login').trigger('submit');
		});
	
	UIinit();
	resizeHandler.init();
	scrollHandler.init();
	window.toggler.init();
	window.uploadCropper.init();
	window.appStrings.init();

	$('.flow-explain').addClass('concealed');


	setTimeout(function(){
		$window.resize();
	},100);

	setTimeout(function(){
		$('.message-wrapper').each(function(){
			$(this).addClass('display').addClass($(this).data('type'));
		});
	},600);
	
	$('.message-wrapper .close').click(function(){
		$('.message-wrapper').removeClass('display').removeClass('fail').removeClass('success').removeClass('alert').removeClass('generic').removeClass('warning');
	});	


	if($('#first-time-welcome-message').length>0) {
		$('#first-time-welcome-message').modal('show');
	}

});