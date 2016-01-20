$(document).ready(function(){

	FastClick.attach(document.body);

	ImageContainerFadeIn();

	var slides = [];

	/* slide 1 */

	var $slideControls = $('#slide-selectors'),
		$slide1 = $('#make-serious-money'),
		$header = $('#site-header'),
		$makeSeriousMoneyHeading = $('#make-serious-money--heading'),
		$makeSeriousMoneyPlatform = $('#make-serious-money--platform'),
		$makeSeriousMoneySubHeading = $('#make-serious-money--sub-heading'),
		$slide2 = $('#re-launch-soon'),
		$relaunchBg = $('#re-launch-soon--bg'),
		$relaunchRocket = $('#re-launch-soon--rocket'),
		$relaunchRocketImg = $('#re-launch-soon--rocket > img'),
		$relaunchCloud = $('#re-launch-soon--clouds'),
		$relaunchFire = $('#re-launch-soon--fire'),
		$relaunchRocketSmoke = $('#re-launch-soon--rocket-smoke'),
		$relaunchBigSmoke = $('#re-launch-soon--big-smoke');
		$fire1 = $('#re-launch-soon--fire-1'),
		$fire2 = $('#re-launch-soon--fire-2'),
		$fire3 = $('#re-launch-soon--fire-3'),
		$fire4 = $('#re-launch-soon--fire-4'),
		$fireMask = $('#re-launch-soon--fire-mask'),
		$relaunchText = $('#re-launch-soon--text'),
		$slide3 = $('#we-want-to-help'),
		$wantToHelpBG = $('#we-want-to-help--bg'),
		$wantToHelpLeads = $('#we-want-to-help--leads'),
		$wantToHelpCoins = $('#we-want-to-help--coins'),
		$wantToHelpFunnel = $('#we-want-to-help--funnel'),
		$wantToHelpDisc = $('#we-want-to-help--funnel--disc'),
		$wantToHelpFunnelImg = $('#we-want-to-help--funnel-img'),
		$wantToHelpText = $('#we-want-to-help--text'),
		$slide4 = $('#sell-highlow-effectively'),
		$sellEffectiveBG = $('#sell-highlow-effectively--bg'),
		$sellEffectiveText = $('#sell-highlow-effectively--text'),
		$sellEffectiveHeadingSell = $('#sell-highlow-effectively--heading--sell'),
		$sellEffectiveHeadingHighlow = $('#sell-highlow-effectively--heading--highlow'),
		$sellEffectiveHeadingEffectively = $('#sell-highlow-effectively--heading--effectively'),
		$slide5 = $('#appropriate-messaging'),
		$appropriateMessagingHeadingSell = $('#appropriate-messaging--heading--sell'),
		$appropriateMessagingHeadingHighlow = $('#appropriate-messaging--heading--highlow'),
		$appropriateMessagingHeadingEffectively = $('#appropriate-messaging--heading--effectively'),
		$appropriateMessagingHeadingVariable = $('#appropriate-messaging--heading--variable'),
		$appropriateMesasgingArrows = $('#appropriate-messaging--arrows'),
		$slide6 = $('#stunning-creative');

	var currentSlide = '#make-serious-money';

	var animating = false;

	function setupSlides() {

		var slide2Loaded = false;
		var assetPath = $('#asset-path').val();
		var smokeFileNames = [
			'dark-smoke-1.png',
			'dark-smoke-2.png',
			'white-smoke-1.png',
			'white-smoke-2.png',
			'white-smoke-1.png',
			'white-smoke-2.png',
			'white-smoke-1.png',
			'white-smoke-2.png',
			'white-smoke-1.png',
			'white-smoke-2.png',
			'white-smoke-1.png',
			'white-smoke-2.png'
		];

		var whiteSmokeFileNames = [
			'white-smoke-1.png',
			'white-smoke-2.png'
		];

		$slide1.imagesLoaded (function(){
			TypeWriter({
				delay: 1000,
				callback: function(){
					
					// setup Slides here
					$slide1.addClass('entered'); 
					$slide1.addClass('images-loaded');

					$slideControls.addClass('highlight');
				},
			});
		});



		slides['#make-serious-money'] = {
			index: 0,
			reverse: function(callback) {

				$('.p-full-screen-slide.active').removeClass('active');
				$slide1.addClass('active');
				$slide1.addClass('enter');

				$header.velocity({
					top: 0
				},{
					duration: 500,
					easing: 'ease'
				});
				$makeSeriousMoneyHeading.velocity({
					top: 0
				},{
					duration: 500,
					easing: 'ease'
				});
				$makeSeriousMoneySubHeading.velocity({
					top: 0
				},{
					duration: 500,
					easing: 'ease'
				});
				$makeSeriousMoneyPlatform.velocity({
					top: 0
				},{
					duration: 500,
					easing: 'ease',
					complete: function(){
						if(callback) {
							callback();
						}
					}
				});

			},
			enter: function(callback) {
				$('.p-full-screen-slide.active').removeClass('active');
				$slide1.addClass('active');
				$slide1.addClass('enter');
			},
			exit: function(callback) {

				var wH = $(window).height();

				$header.velocity({
					top: - $header.outerHeight()
				},{
					duration: 500,
					easing: "ease"
				});

				$makeSeriousMoneyHeading.velocity({
					top: -wH
				}, {
					duration: 500,
					easing: "ease"
				});

				$makeSeriousMoneySubHeading.velocity({
					top: -wH
				}, {
					duration: 500,
					easing: "ease"
				});

				$makeSeriousMoneyPlatform.velocity({
					top: -wH
				}, {
					duration: 500,
					easing: "ease"
				});

				setTimeout(function(){
					callback();
				},450);
				
			}
		}

		slides['#re-launch-soon'] = {
			index: 1,
			reset: function(params) {

				console.log('re-lauch reset');

				slides['#re-launch-soon'].animating = false;

				$relaunchBg.velocity('stop');
				// .removeAttr('style');
				$relaunchRocket.velocity('stop',true);
				$('body').removeClass('rumble');
				$slideControls.velocity('stop',true);
				$relaunchCloud.velocity('stop',true);
				$relaunchRocketSmoke.velocity('stop',true);
				$relaunchText.velocity('stop',true);
				$relaunchBigSmoke.velocity('stop',true);
				$relaunchBigSmoke.removeClass('float');
				$('#re-launch-soon--fire, #re-launch-soon--rocket').velocity('stop',true);
				$fireMask.velocity('stop',true);
				$slide2.velocity('stop',true);

				$relaunchText.velocity({
					top: '-20%',
					opacity: 0
				},{
					duration: 500,
					easing: 'easing-out',
					complete: function(){

						$relaunchText.removeClass('highlight');
					}
				});
				
				launched = true;
				stopSmoke = true;

				for(var i=0; i<300; i++) clearTimeout(i);

				setTimeout(function(){

					$relaunchBg.removeAttr('style');
					$relaunchRocket.removeAttr('style');
					$slideControls.removeAttr('style');
					$relaunchCloud.removeAttr('style');
					$relaunchRocketSmoke.removeAttr('style');
					$relaunchText.removeAttr('style');
					$relaunchBigSmoke.removeAttr('style');
					$('#re-launch-soon--fire, #re-launch-soon--rocket').removeAttr('style');
					$fireMask.removeAttr('style');
					$slide2.removeAttr('style');


					if(params.callback) {
						params.callback();
					}

				},0);
				
			},
			enter: function(callback) {

				var launched = false;
				var stopSmoke = false;
				var rocketSmokeWidth = 200;
				var rocketSmokeInterval = 150;

				$relaunchCloud.empty();
				$relaunchRocketSmoke.empty();

				slides['#re-launch-soon'].animating = true;

				function addCloud(direction) {

					if(!slides['#re-launch-soon'].animating) {
						return;
					}

					var fileName = smokeFileNames[Utils.getRandomInt(0,smokeFileNames.length-1)];

					var $cloudElement = $('<div class="smoke"><div class="smoke-img-container"><img src="'+assetPath+fileName+'"/></div></div>');

					var $cloudImg = $cloudElement.find('img');

					var $cloudImgContainer = $cloudElement.find('.smoke-img-container');
					

					$relaunchCloud.append($cloudElement);

					var value = 360; //animate to  
				    var steps = 6; //animation steps per frame (1/60sec.) 
				    var time = Utils.getRandomInt(7,10)*(1000/60)*(value/steps); //animation time


				    $cloudImg.velocity({rotateZ: value}, {duration:time,easing:'linear',loop:true});


					$cloudElement.velocity({
						marginLeft: (direction*60)+"%"
					},{
						duration: 5500,
						easing: [.3,.55,.63,.85],
						complete: function(){
							if(!slides['#re-launch-soon'].animating) {
								return;
							}
							$cloudElement.animate({
								opacity: 0
							},500, function(){
								$cloudElement.remove();
							});
						}
					});

					$cloudImgContainer.velocity({
						width: '500%',
						marginLeft: '-250%',
						top: '-1000%',
						opacity: 0.5
					},{
						duration: 12000,
						easing: [.3,.55,.63,.85]
					});

					setTimeout(function(){
						if(!launched) {
							addCloud(direction*-1);
						}
					},250);

				}

				function addRocketSmoke(direction) {

					if(!slides['#re-launch-soon'].animating) {
						return;
					}

					var fileName = whiteSmokeFileNames[Utils.getRandomInt(0,whiteSmokeFileNames.length-1)];

					var $cloudElement = $('<div class="smoke"><div class="smoke-img-container"><img src="'+assetPath+fileName+'"/></div></div>');

					var $cloudImg = $cloudElement.find('img');

					var $cloudImgContainer = $cloudElement.find('.smoke-img-container');
					
					$relaunchRocketSmoke.append($cloudElement);

					var value = 360; //animate to  
				    var steps = 6; //animation steps per frame (1/60sec.) 
				    var time = Utils.getRandomInt(7,10)*(1000/60)*(value/steps); //animation time


				    $cloudImg.velocity({rotateZ: value}, {duration:time,easing:'linear',loop:true});

				    var top = $relaunchRocketImg.offset().top+$relaunchRocketImg.outerHeight();

				    if(top < 0) {
				    	stopSmoke = true;
				    } else {
				    	$cloudElement.css({
					    	top: top
					    });

						// $cloudElement.velocity({
						// 	marginLeft: (direction*10)+"%"
						// },{
						// 	duration: 3000,
						// 	easing: [.3,.55,.63,.85],
						// 	complete: function(){
						// 		// $cloudElement.animate({
						// 		// 	opacity: 0
						// 		// },750, function(){
						// 		// 	$cloudElement.remove();
						// 		// });
						// 	}
						// });

						$cloudImgContainer.velocity({
							width: rocketSmokeWidth+'%',
							marginLeft: (-(rocketSmokeWidth-100)/2)+'%',
							top: -rocketSmokeWidth/2,
							opacity: 0.5
						},{
							duration: 12000,
							easing: [.3,.55,.63,.85]
						});

						setTimeout(function(){
							if(!stopSmoke) {
								addRocketSmoke(direction*-1);
							}
						},rocketSmokeInterval);
				    }

				}


				function execute() {	

					if(!slides['#re-launch-soon'].animating) {
						return;
					}

					$('.p-full-screen-slide.active').removeClass('active');
					$slide2.addClass('active');
					$slide2.addClass('enter');

					$slide2.velocity({
						opacity: 1
					},{
						duration: 250,
						easing: 'ease'
					});

					$relaunchBg.velocity({
						opacity: 1,
						top: 0
					},{
						duration: 1250,
						easing: "ease"
					});

					setTimeout(function(){
						$('body').addClass('rumble');
						$relaunchRocket.velocity({
							opacity: 1,
							bottom: -$relaunchRocket.outerHeight()*0.05
						},{
							duration: 750,
							easing: [.11,1.2,.53,.92]
						});
					},250);

					setTimeout(function(){

						/* rocket smoke animation */

						$relaunchCloud.empty();

						$relaunchCloud.velocity({
							opacity: 1
						},{
							duration: 250,
							easing: "ease"
						});

						addCloud(1);

					},750);


					setTimeout(function(){

						/* rocket launch */

						$('#re-launch-soon--fire, #re-launch-soon--rocket').velocity({
							bottom: '250%'
						},{
							duration: 6000,
							easing: [.52,.07,.86,.41],
							complete: function() {

								if(!slides['#re-launch-soon'].animating) {
									return;
								}

								rocketSmokeWidth = 1000;
								rocketSmokeInterval = 250;

								setTimeout(function(){
									launched = true;
									$('#re-launch-soon--rocket-smoke .smoke').velocity({
										opacity: 0
									}, {
										duration: 1500,
										complete: function() {
											$('#re-launch-soon--rocket-smoke .smoke').remove();
										}
									});
								},1500);
							}
						});

						setTimeout(function(){

							$fireMask.velocity({
								height: '800%'
							},{
								duration: 1500,
								easing: [.52,.07,.86,.41]
							});

						},4500);	

						setTimeout(function(){
							$relaunchBg.velocity({
								opacity: 0
							},250);
							$slideControls.addClass('alternate');
						},5750);

						setTimeout(function(){
							$('body').removeClass('rumble');
						},500);

						setTimeout(function(){
							$relaunchBigSmoke.velocity({
								opacity: 1,
								width: '110%',
								height: '110%',
								top: '0%',
								left: '-5%'
							},{
								duration: 1750,
								easing: 'ease',
								complete: function() {
									stopSmoke = true;
								}
							});

							$relaunchText.velocity({
								top: 0,
								opacity: 1
							},{
								duration: 2500,
								easing: [0,.96,.48,1]
							});

							setTimeout(function(){
								$relaunchText.addClass('highlight');
								$relaunchBigSmoke.addClass('float');
								if(callback) {
									callback();
								}
							},750);

						},5000);

						addRocketSmoke(-1);

					},1000);
					
				}

				if(!slide2Loaded) {
					$slide2.imagesLoaded (function(){
						execute();
						slide2Loaded = true;
					});
				} else {
					execute();
				}
			},
			exit: function(callback) {

				slides['#re-launch-soon'].animating = true;

				$('#re-launch-soon--fire, #re-launch-soon--rocket').velocity({
					opacity: 0
				},{
					duration: 250,
					easing: 'ease'
				});

				$relaunchText.velocity({
					top: '-20%',
					opacity: 0
				},{
					duration: 500,
					easing: 'easing-out',
					complete: function(){

						$relaunchText.removeClass('highlight');
					}
				});
			
				setTimeout(function(){
					$relaunchBigSmoke.velocity({
						top: '-120%'
					},{
						duration: 750,
						easing: 'easing-out',
						complete: function() {

							$relaunchBigSmoke.removeClass('float');
						}
					});
					$slideControls.removeClass('alternate');
				},250);

				$slide2.velocity({
					opacity: 0
				},{
					duration: 2500,
					easing: 'ease'
				});

				setTimeout(callback, 1000);

			}
		}


		var leadFileNames = [
			'lead-red.png',
			'lead-yellow.png'
		];

		var coinFileNames = [
			'coin.png'
		];

		var slide3Loaded = false,
			stopLead = false;

		slides['#we-want-to-help'] = {
			index: 2,
			reset: function() {

				slides['#we-want-to-help'].animating = false;

				$wantToHelpBG.attr('style','');
				$wantToHelpFunnelImg.attr('style','');
				$wantToHelpText.attr('style','');
				$wantToHelpDisc.attr('style','');

				for(var i=0; i<300; i++) clearTimeout(i);

				setTimeout(function(){
					$wantToHelpBG.removeAttr('style');
					$wantToHelpFunnelImg.removeAttr('style');
					$wantToHelpText.removeAttr('style');
					$wantToHelpDisc.removeAttr('style');
				},150);
			},
			enter: function(callback) {	
				stopLead = false;
				console.log('hahaha');

				var leadCount = 0;

				var wobble = false;

				function addLead() {
					var fileName = leadFileNames[Utils.getRandomInt(0,leadFileNames.length-1)];

					var $leadElement = $('<div class="lead"><div class="lead-img-container"><img src="'+assetPath+fileName+'"/></div></div>');

					var $leadImg = $leadElement.find('img');

					var $leadImgContainer = $leadElement.find('.lead-img-container');
					
					$wantToHelpLeads.append($leadElement);


					var size = Utils.getRandomInt(30,73),
						left = Utils.getRandomInt(0,100);

					$leadElement.css({
						left: left+'%',
						width: size+'px',
						zIndex: size,
						blur: 73/size*10-10,
						marginLeft: (left<=50?0:-size)+"px"
					});

					$leadElement.velocity({
						top: '150%'
					},{
						duration: 18250/size*8,
						easing: 'linear',
						complete: function(){
							$leadElement.remove();
						},
						progress: function() {
							if($leadElement.offset().top>=$wantToHelpFunnelImg.offset().top) {
								$leadElement.velocity('stop');
								$leadElement.remove();

								if(!wobble) {
									wobble = true;
									$wantToHelpFunnelImg.addClass('wobble');
								}

								leadCount++;

								if(leadCount>8) {
									leadCount = 0;
									addCoin();
								}
							}
						}
					});

					if(!stopLead) {
						setTimeout(function(){
							addLead();
						},100);
					}

					
				};


				function addCoin() {
					var fileName = coinFileNames[Utils.getRandomInt(0,coinFileNames.length-1)];

					var $coinElement = $('<div class="coin"><div class="coin-img-container"><img src="'+assetPath+fileName+'"/></div></div>');

					var $coinImg = $coinElement.find('img');

					var $coinImgContainer = $coinElement.find('.coin-img-container');

					$coinElement.css({
						top: $wantToHelpFunnelImg.offset().top
					});

					$wantToHelpCoins.append($coinElement);

					$coinElement.velocity({
						top: '110%'
					}, {
						duration: 1250,
						easing: 'linear',
						complete: function() {
							$coinElement.remove();
						}
					});

				}
				

				function execute() {
					
					$('.p-full-screen-slide.active').removeClass('active');
					$slide3.addClass('active');
					$slide3.addClass('enter');

					$wantToHelpBG.velocity({
						opacity: 1
					},{
						duration: 500,
						easing: 'ease',
						complete: function() {
							addLead();
						}
					});

					setTimeout(function(){
						$wantToHelpFunnelImg.velocity({
							opacity: 1,
							top: '50%'
						},{
							duration: 1000,
							easing: 'easing-out'
						});
						$wantToHelpText.velocity({
							opacity: 1
						},500);
						$wantToHelpDisc.velocity({
							opacity: 1,
							top: '50%',
							complete: function(){
								if(callback) {
									callback();
								}
							}
						},1000);
					},500);

					
				}


				if(!slide3Loaded) {
					$slide3.imagesLoaded (function(){
						execute();
						slide3Loaded = true;
					});
				} else {
					execute();
				}

			},
			exit: function(callback) {

				console.log('funnel stop');

				$wantToHelpFunnelImg.velocity({
					top: (-$wantToHelpFunnelImg.outerHeight())+'px'
				},{
					duration: 750,
					easing: [.87,-0.13,1,.07],
					complete: function() {
						stopLead = true;
						callback();
					}
				});

				$wantToHelpDisc.velocity({
					opacity: 1,
					top: '100%',
					marginTop: 0
				},{
					duration: 750,
					easing: [.87,-0.13,1,.07]
				});

				$wantToHelpText.velocity({
					top: '100%',
					opacity: 0
				},{
					duration: 750,
					easing: [.87,-0.13,1,.07]
				});

			}
		}

		var slide4Loaded = false;

		slides['#sell-highlow-effectively'] = {
			index: 3,
			reset: function() {

				$sellEffectiveBG.velocity('stop');

				$sellEffectiveText.velocity('stop');
			
				$('#sell-highlow-effectively--text em').velocity('stop');

				$('#sell-highlow-effectively--text-content .unhighlighted-text').velocity('stop');

				setTimeout(function(){
					$sellEffectiveBG.attr('style','');

					$sellEffectiveText.attr('style','');
			
					$('#sell-highlow-effectively--text em').attr('style','');

					$('#sell-highlow-effectively--text-content .unhighlighted-text').attr('style','');
				},100);
			},
			enter: function(callback) { 
				function execute() {	
					$('.p-full-screen-slide.active').removeClass('active');
					$slide4.addClass('active');
					$slide4.addClass('enter');

					$sellEffectiveBG.velocity({
						opacity: 1
					},{
						duration: 1000,
						easing: [.87,-0.13,1,.07]
					});

					$sellEffectiveText.velocity({
						opacity: 1,
						top: 0
					},{
						duration: 1500,
						easing: 'ease'
					});
				
					$('#sell-highlow-effectively--text em').velocity({
						top: 0,
						opacity: 1
					},{
						duration: 1500,
						easing: 'ease',
						complete: function() {
							if(callback) {
								callback();
							}
						}
					});
				
				}

				if(!slide4Loaded) {
					$slide4.imagesLoaded (function(){
						execute();
						slide4Loaded = true;
					});
				} else {
					execute();
				}
			},
			exit: function(callback, index) {

				if(index==4||index==5) {

					$('#sell-highlow-effectively--text-content .unhighlighted-text').each(function(){
						var self = $(this);
						self.velocity({
							opacity: 0,
							top: (self.offset().top<$(window).height()/2)?(Utils.getRandomInt(-120,0)+'px'):(Utils.getRandomInt(0,120)+'px'),
							left: (self.offset().left<$(window).width()/2)?(Utils.getRandomInt(-120,0)+'px'):(Utils.getRandomInt(0,120)+'px')
						},{
							duration: 500,
							easing: 'ease'
						});
					});

					$sellEffectiveHeadingSell.css({
						top: $sellEffectiveHeadingSell.offset().top,
						left: $sellEffectiveHeadingSell.offset().left
					});

					$sellEffectiveHeadingHighlow.css({
						top: $sellEffectiveHeadingHighlow.offset().top,
						left: $sellEffectiveHeadingHighlow.offset().left
					});

					$sellEffectiveHeadingEffectively.css({
						top: $sellEffectiveHeadingEffectively.offset().top,
						left: $sellEffectiveHeadingEffectively.offset().left
					});

					$sellEffectiveHeadingSell.css({
						position: 'fixed'
					});

					$sellEffectiveHeadingHighlow.css({
						position: 'fixed'
					});

					$sellEffectiveHeadingEffectively.css({
						position: 'fixed'
					});


					setTimeout(function(){

						$sellEffectiveHeadingSell.velocity({
							top: $appropriateMessagingHeadingSell.offset().top,
							left: $appropriateMessagingHeadingSell.offset().left
						},{
							duration: 1750,
							easing: [.82,-0.22,0,1]
						})

						$sellEffectiveHeadingHighlow.velocity({
							top: $appropriateMessagingHeadingHighlow.offset().top,
							left: $appropriateMessagingHeadingHighlow.offset().left
						},{
							duration: 1750,
							easing: [.82,-0.22,0,1]
						})

						$sellEffectiveHeadingEffectively.velocity({
							top: $appropriateMessagingHeadingEffectively.offset().top,
							left: $appropriateMessagingHeadingEffectively.offset().left
						},{
							duration: 1750,
							easing: [.82,-0.22,0,1]
						});

					},250);
					

					setTimeout(function(){
						callback();
					},2000);

				} else {

					$sellEffectiveBG.velocity({
						opacity: 0
					},{
						duration: 750,
						easing: [.87,-0.13,1,.07]
					});

					$sellEffectiveText.velocity({
						opacity: 0,
						top: 0
					},{
						duration: 750,
						easing: 'ease',
						complete: function() {
							callback();
						}
					});
				}
			}
		}

		var slide5Loaded = false;

		slides['#appropriate-messaging'] = {
			index: 4,
			reset: function(params) {

				console.log(params);

				if(params.nextIndex==5) {
					$('.appropriate-messaging--message').removeClass('in');

					$('.appropriate-messaging--message').velocity('stop');

					$('.appropriate-messaging--message').attr('style','');
				} else {
					console.log("reset appropriate messaging");

					$sellEffectiveHeadingSell.velocity('stop');

					$sellEffectiveHeadingHighlow.velocity('stop');

					$sellEffectiveHeadingEffectively.velocity('stop');

					$('#appropriate-messaging--heading').velocity('stop');

					$appropriateMesasgingArrows.velocity('stop');

					$('.appropriate-messaging--message').removeClass('in');

					$('.appropriate-messaging--message').velocity('stop');

					setTimeout(function(){
						$sellEffectiveHeadingSell.attr('style','');

						$sellEffectiveHeadingHighlow.attr('style','');

						$sellEffectiveHeadingEffectively.attr('style','');

						$('#appropriate-messaging--heading').attr('style','');

						$appropriateMesasgingArrows.attr('style','');

						$('.appropriate-messaging--message').attr('style','');
					},100);
				}
			
			},
			enter: function(callback,prevIndex) {
				function execute() {	

					console.log(prevIndex);

					if(prevIndex == 3 || prevIndex == 5) {

					} else {
						$('.p-full-screen-slide.active').removeClass('active');
					}
					
					$slide5.addClass('active');
					$slide5.addClass('enter');
				
					$sellEffectiveHeadingSell.css({
						opacity: 0
					});

					$sellEffectiveHeadingHighlow.css({
						opacity: 0
					});

					$sellEffectiveHeadingEffectively.css({
						opacity: 0
					});

					$('#appropriate-messaging--heading').css({
						opacity: 1
					});


					var string = "WITH APPROPRIATE MESSAGING",
						enteredString = "";

					function enterChar(callback) {

						enteredString = enteredString + string[enteredString.length];

						$appropriateMessagingHeadingVariable.html(enteredString);


						if(enteredString.length<string.length) {
							setTimeout(function(){
								enterChar(callback);
							},20);
						} else {
							callback();
						}
					}


					enterChar(function(){

						$appropriateMesasgingArrows.velocity({
							opacity: 1
						},{
							duration: 250,
							easing: 'ease',
							complete: function(){
								$('.appropriate-messaging--message').addClass('in');
								if(callback) {
									callback();
								}
							}
						});


					});

				}

				if(!slide5Loaded) {
					$slide5.imagesLoaded (function(){
						execute();
						slide5Loaded = true;
					});
				} else {
					execute();
				}
			}, 
			exit: function(callback,index){
				console.log("exit appropriate message");
				
				$('#appropriate-messaging--arrows').velocity({
					opacity : 0
				});

				$('.appropriate-messaging--message').each(function(){
					var self = $(this);

					self.css({
						transition: 'none'
					});

					self.velocity({
						opacity: 0,
						top: '40px'
					},{
						duration: Utils.getRandomInt(250,750),
						easing: 'ease'
					});

				});

				setTimeout(function(){
					callback();
				},750);
				
				
				
			}
		}

		var slide6Loaded = false;

		slides['#stunning-creative'] = {
			index: 5,
			reset: function() {
				$('#stunning-creative--arrows').velocity('stop');
				$('.stunning-creative--item').velocity('stop');
				$('.stunning-creative--item').removeClass('in');
				setTimeout(function(){
					$('.stunning-creative--item').attr('style','');
					$('#stunning-creative--arrows').attr('style','');
				},100);
			},
			enter: function(callback, prevIndex) {

				
				if(prevIndex == 3 || prevIndex == 4) {

				} else {
					$('.p-full-screen-slide.active').removeClass('active');
				}

				$slide6.addClass('active');
				$slide6.addClass('enter');

				function execute() {	
					var string = $appropriateMessagingHeadingVariable.html();

					function removeCharacter(callback) {

						string = string.substring(0,string.length-1);

						$appropriateMessagingHeadingVariable.html(string);


						if(string.length>0) {
							setTimeout(function(){
								removeCharacter(callback);
							},15);
						} else {
							callback();
						}

					}

					var newString = "WITH STUNNING CREATIVE",
						enteredString = "";

					function enterChar(callback) {

						enteredString = enteredString + newString[enteredString.length];

						$appropriateMessagingHeadingVariable.html(enteredString);


						if(enteredString.length<newString.length) {
							setTimeout(function(){
								enterChar(callback);
							},20);
						} else {
							callback();
						}
					}

					removeCharacter(function(){
						enterChar(function(){
							$('.stunning-creative--item').addClass('in');
							$('#stunning-creative--arrows').velocity({
								opacity : 1
							});

							if(callback) {
								callback();
							}

						});
					});
					
				}

				if(!slide6Loaded) {
					$slide6.imagesLoaded (function(){
						execute();
						slide6Loaded = true;
					});
				} else {
					execute();
				}
			}, 
			exit: function(callback){
				console.log("exit stunning creative");
				
				$('#stunning-creative--arrows').velocity({
					opacity : 0
				});

				$('.stunning-creative--item').each(function(){
					var self = $(this);

					self.css({
						transition: 'none'
					});

					self.velocity({
						opacity: 0,
						top: '40px'
					},{
						duration: Utils.getRandomInt(250,750),
						easing: 'ease'
					});

				});

				setTimeout(function(){
					callback();
				},750);
			}
		}

	}


	$('.slide-selector').click(function(){


		// if(!animating) {
			animating = true;
			var self = $(this);

			var slideName = self.data('target');



			if(slideName!=currentSlide) {

				var forward = slides[currentSlide].index<slides[slideName].index?true:false;

				console.log("Forward? - "+forward)

				var previousIndex = slides[currentSlide].index;
				var nextIndex = slides[slideName].index;

				console.log('previous: '+currentSlide);
				console.log('next: '+slideName);

				if(forward) {
					slides[currentSlide].exit(function(){
						if(slides[currentSlide].reset) {
							
							slides[currentSlide].reset({ prevIndex: previousIndex, nextIndex: nextIndex });

							currentSlide = slideName;
							slides[currentSlide].enter(function(){
								animating = false;
							},previousIndex);
							
						} else {
							currentSlide = slideName;
							slides[currentSlide].enter(function(){
								animating = false;
							},previousIndex);
						}
						
					},slides[slideName].index);
				} else {
					if(slides[currentSlide].back) {
						console.log("Go backward");
						slides[currentSlide].back(function(){
							if(slides[currentSlide].reset) {
								slides[currentSlide].reset({ prevIndex: previousIndex, nextIndex: nextIndex });
								currentSlide = slideName;

								if(slides[currentSlide].reverse) {
									slides[currentSlide].reverse(function(){
										animating = false;
									},previousIndex);
								} else {
									slides[currentSlide].enter(function(){
										animating = false;
									},previousIndex);
								}

							} else {
								currentSlide = slideName;

								if(slides[currentSlide].reverse) {
									slides[currentSlide].reverse(function(){
										animating = false;
									},previousIndex);
								} else {
									slides[currentSlide].enter(function(){
										animating = false;
									},previousIndex);
								}

							}
						});
					} else {
						console.log("Exit");
					

						slides[currentSlide].exit(function(){
							
							console.log('exiting: '+currentSlide);

							if(slides[currentSlide].reset) {
								console.log('resetting: '+currentSlide);
								slides[currentSlide].reset({ prevIndex: previousIndex, nextIndex: nextIndex });
								currentSlide = slideName;

								if(slides[currentSlide].reverse) {
									slides[currentSlide].reverse(function(){
										animating = false;
									});
								} else {
									slides[currentSlide].enter(function(){
										animating = false;
									});
								}

							} else {
								currentSlide = slideName;
								if(slides[currentSlide].reverse) {
									slides[currentSlide].reverse(function(){
										animating = false;
									});
								} else {
									if(slides[currentSlide].reset) {
										slides[currentSlide].reset({
											callback : function(){
												slides[currentSlide].enter(function(){
													animating = false;
												});
											}
										});
									}
								}
							}
						},slides[slideName].index);
					}
				}

				$('.slide-selector').removeClass('active');

				$('.slide-selector[data-target="'+slideName+'"]').addClass('active');
			}

		// }

		
	});

	var sliding = false;


	$('#appropriate-messaging--arrows--right').click(function(){
		
		if(!sliding) {
			
			var $currentMessage = $(".appropriate-messaging--message.active"),
				$nextMessage = $currentMessage.next();


			if($nextMessage.length>0) {
				sliding = true;
				$currentMessage.removeClass('active');
				$nextMessage.addClass('active');
				$('.appropriate-messaging--message-container').velocity({
					marginLeft: parseInt($('.appropriate-messaging--message-container').css('margin-left'))-$nextMessage.outerWidth()
				},{
					duration: 500,
					easing: 'ease',
					complete: function(){
						sliding = false;
					}
				});
				$('#appropriate-messaging--arrows--left').removeClass('end');

				if($nextMessage.next().length<=0) {
					$('#appropriate-messaging--arrows--right').addClass('end');
				}
			}
		}

	});

	$('#appropriate-messaging--arrows--left').click(function(){
		
		if(!sliding) {
			
			var $currentMessage = $(".appropriate-messaging--message.active"),
				$prevMessage = $currentMessage.prev();


			if($prevMessage.length>0) {
				sliding = true;
				$currentMessage.removeClass('active');
				$prevMessage.addClass('active');
				$('.appropriate-messaging--message-container').velocity({
					marginLeft: parseInt($('.appropriate-messaging--message-container').css('margin-left'))+$prevMessage.outerWidth()
				},{
					duration: 500,
					easing: 'ease',
					complete: function(){
						sliding = false;
					}
				});
				$('#appropriate-messaging--arrows--right').removeClass('end');

				if($prevMessage.prev().length<=0) {
					$('#appropriate-messaging--arrows--left').addClass('end');
				}

			} else {

			}
		}


	});

	$('#stunning-creative--arrows--right').click(function(){
		
		if(!sliding) {
			
			var $currentMessage = $(".stunning-creative--item.active"),
				$nextMessage = $currentMessage.next();


			if($nextMessage.length>0) {
				sliding = true;
				$currentMessage.removeClass('active');
				$nextMessage.addClass('active');
				$('.stunning-creative--item-container').velocity({
					marginLeft: parseInt($('.stunning-creative--item-container').css('margin-left'))-$nextMessage.outerWidth()
				},{
					duration: 500,
					easing: 'ease',
					complete: function(){
						sliding = false;
					}
				});
				$('#stunning-creative--arrows--left').removeClass('end');

				if($nextMessage.next().length<=0) {
					$('#stunning-creative--arrows--right').addClass('end');
				}
			}
		}

	});

	$('#stunning-creative--arrows--left').click(function(){
		
		if(!sliding) {
			
			var $currentMessage = $(".stunning-creative--item.active"),
				$prevMessage = $currentMessage.prev();


			if($prevMessage.length>0) {
				sliding = true;
				$currentMessage.removeClass('active');
				$prevMessage.addClass('active');
				$('.stunning-creative--item-container').velocity({
					marginLeft: parseInt($('.stunning-creative--item-container').css('margin-left'))+$prevMessage.outerWidth()
				},{
					duration: 500,
					easing: 'ease',
					complete: function(){
						sliding = false;
					}
				});
				$('#stunning-creative--arrows--right').removeClass('end');

				if($prevMessage.prev().length<=0) {
					$('#stunning-creative--arrows--left').addClass('end');
				}

			} else {

			}
		}


	});


	$(window).resize(function(){
		
		$('.appropriate-messaging--message-container').each(function(){
			var self = $(this),
				messages = $(self.find('.appropriate-messaging--message')),
				activeMessage = $(self.find('.appropriate-messaging--message.active'));

			var totalWidth = 0;

			messages.each(function(){
				totalWidth+= $(this).outerWidth();
			});

			self.css({
				width: totalWidth+'px',
				marginLeft: (-(activeMessage.index()*(activeMessage.outerWidth()))-activeMessage.outerWidth()/2) + 'px'
			});

		});

		$('.stunning-creative--item-container').each(function(){
			var self = $(this),
				messages = $(self.find('.stunning-creative--item')),
				activeMessage = $(self.find('.stunning-creative--item.active'));

			var totalWidth = 0;

			messages.each(function(){
				totalWidth+= $(this).outerWidth();
			});

			self.css({
				width: totalWidth+'px',
				marginLeft: (-(activeMessage.index()*(activeMessage.outerWidth()))-activeMessage.outerWidth()/2) + 'px'
			});

		});

	});

	$(window).resize();

	setupSlides();

	slides['#make-serious-money'].enter();

});