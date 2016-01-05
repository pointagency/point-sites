function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {

	var e = [],
		asset = [],
		d = document;

	eArray = [];

	function prep(name) {
		e[name] = d.getElementById(name);
		eArray.push(e[name]);
	}

	asset = [
		['bg-1','.png'],
		['bg-2','.png'],
		['graph','.png'],
		['its-trading','.png'],
		['where-is-it-going','.png'],
		['bg-1-wrapper'],
		['graph','.png'],
		['cursor'],
		['cursor-wrapper'],
		['where-is-it-going','.png'],
		['question-mark','.png'],
		['question-mark-1'],
		['question-mark-2'],
		['question-mark-3'],
		['question-mark-4'],
		['question-mark-5'],
		['question-mark-6'],
		['question-mark-6-1'],
		['question-mark-7'],
		['question-mark-8'],
		['question-mark-9'],
		['question-mark-10'],
		['question-mark-11'],
		['question-mark-12'],
		['question-mark-13'],
		['question-mark-14'],
		['dot'],
		['graph-2'],
		['cursor-2'],
		['question-mark-wrapper'],
		['bg-2-wrapper'],
		['chart-wrapper'],
		['chart-wrapper-2'],
		['bg-1-wrapper-inner'],
		['predict'],
		['high','.png'],
		['low','.png'],
		['its-trading','.png'],
		['cta','.png'],
		['up','.png'],
		['down','.png'],
		['chart-2-outer-wrapper'],
		['chart-2-zoom-position-offset']
	];

	for(var i=0; i<asset.length; i++) {
		var name = asset[i][0];
		prep(name);

		if(asset[i].length==2) {
			var oImg=document.createElement("img");
			oImg.setAttribute('src',asset[i][0]+asset[i][1]);
			oImg.setAttribute('class','preload');
			document.body.appendChild(oImg);
		}
	}



	if("Velocity" in window) {
		v = Velocity;
	} else {
		
	}
	var looping = true;
	var pacing = true;
	var blink = true;

	function run(){

		looping = true;
		pacing = true;
		blink = true;

		v(e['bg-1-wrapper'],{
			opacity: 1
		},{
			duration: 1000,
			easing: [.93,.01,.1,1],
			complete: function() {
			}
		});

		

		function showQuestionMark(callback) {

			v(e['question-mark-1'],{
				width: 28
			},{
				duration: 80,
				easing: 'linear',
				complete: function() {
					v(e['question-mark-2'],{
						height: 28
					},{
						duration: 75,
						easing: 'linear',
						complete: function() {
							v(e['question-mark-3'],{
								width: 10
							},{
								duration: 50,
								easing: 'linear',
								complete: function() {
									v(e['question-mark-4'],{
										height: 27
									},{
										duration: 75,
										easing: 'linear',
										complete: function() {
											v(e['question-mark-5'],{
												width: 17
											},{
												duration: 75,
												easing: 'linear',
												complete: function() {
													v(e['question-mark-6'],{
														height: 16
													},{
														duration: 60,
														easing: 'linear',
														complete: function() {
															v(e['question-mark-6-1'],{
																width: 4
															},{
																duration: 55,
																easing: 'linear',
																complete: function() {
																	v(e['question-mark-7'],{
																		height: 11
																	},{
																		duration: 35,
																		easing: 'linear',
																		complete: function() {
																			v(e['question-mark-8'],{
																				height: 10
																			},{
																				duration: 15,
																				easing: 'linear',
																				complete: function() {
																					v(e['question-mark-9'],{
																						width: 31
																					},{
																						duration: 100,
																						easing: 'linear',
																						complete: function() {
																							v(e['question-mark-10'],{
																								height: 6
																							},{
																								duration: 15,
																								easing: 'linear',
																								complete: function() {
																									v(e['question-mark-11'],{
																										height: 31
																									},{
																										duration: 75,
																										easing: 'linear',
																										complete: function() {
																											v(e['question-mark-12'],{
																												width: 8
																											},{
																												duration: 15,
																												easing: 'linear',
																												complete: function() {
																													v(e['question-mark-13'],{
																														width: 6
																													},{
																														duration: 20,
																														easing: 'linear',
																														complete: function() {
																															v(e['question-mark-14'],{
																																height: 18
																															},{
																																duration: 75,
																																easing: 'linear',
																																complete: function() {
																																	callback();
																																}
																															});
																														}
																													});
																												}
																											});
																										}
																									});
																								}
																							});
																						}
																					});
																				}
																			});
																		}
																	});
																}
															});
														}
													});
												}
											});
										}
									});
								}
							});
						}
					});
				}
			});
		}

		function scrollBG() {
			v(e['bg-1'],{
				backgroundPositionX: 1750
			},{
				duration: 2000,
				easing: 'linear',
				complete: function(){
					if(looping) {
						e['bg-1'].removeAttribute('style');
						scrollBG();
					}
				}
			});
		}
		
		function paceSelf() {

			if(pacing) {

				var width = getRandomInt(535,545),
					duration = getRandomInt(750,1250);

				v(e['chart-wrapper'],{
					width: width,
				},{
					duration: duration,
					easing: [.67,0,.54,1]
				}).then(function() {

					var width = getRandomInt(555,575),
					duration = getRandomInt(750,1250);

					if(pacing) {

						return v(e['chart-wrapper'],{
							width: width,
						},{
							duration: duration,
							easing: [.67,0,.54,1]
						});

					} else {

						return {
							then: function() {

							}
						}

					}
				}).then(function() {

					if(pacing) {
						paceSelf();
					}
					
				});
			}
		}



		setTimeout(function(){
			v(e['cursor-wrapper'],{
				opacity: 1
			},{
				duration: 125,
				easing: 'linear',
			});

			runCursor = function() {

				var speed = 0.6;


				v(e['chart-wrapper'],{
					width: 20
				},{
					duration: 250*speed,
					easing: 'linear'
				});

				v(e['cursor'],{
					top: 23
				},{
					duration: 250*speed,
					easing: 'linear'
				}).then(function (){


					v(e['chart-wrapper'],{
						width: 26
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 36
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 32
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 42
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 41
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 44
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 44
					},{
						duration: 40*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 35
					},{
						duration: 40*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 65
					},{
						duration: 276*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 45
					},{
						duration: 276*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 73
					},{
						duration: 105*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 38
					},{
						duration: 105*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 78
					},{
						duration: 66*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 44
					},{
						duration: 66*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 87
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 47
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 101
					},{
						duration: 184*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 44
					},{
						duration: 184*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 111
					},{
						duration: 132*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 34
					},{
						duration: 132*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 120
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 37
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 127
					},{
						duration: 92*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 35
					},{
						duration: 92*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 133
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 39
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function(){


					// @Start moving graph

					scrollBG();
					
					v(e['where-is-it-going'],{
						opacity: 1,
						marginLeft: 0
					},{
						duration: 2250,
						easing: [.63,0,0,1.07]
					});

					return v(e['chart-wrapper'],{
						width: 550,
						left: -195
					},{
						duration: 750,
						easing: 'linear'
					});

				}).then(function(){

					paceSelf();

					return v(e['where-is-it-going'],{
						opacity: 0,
						marginLeft: -120
					},{
						duration: 750,
						easing: [.63,0,0,1.07],
						delay: 1250
					});

				}).then(function(){

					pacing = false;

					v(e['bg-1'],"stop");

					looping = false;

					
					v(e['cursor'],"stop");
					return v(e['chart-wrapper'],"stop");

					
				}).then(function(){

					return v(e['chart-wrapper'],{
						width: 550
					},{
						duration: 75
					});

					// v(e['cursor'],{
					// 	left: 549
					// },{
					// 	duration: 75
					// });
					
				}).then(function(){
					v(e['cursor'],{
						right: 400,
						opacity: 0
					},{
						duration: 750,
						easing: [.63,0,0,1.07]
					});

					showQuestionMark(function(){
						v(e['dot'],{
							top: 66,
							opacity: 1
						},{
							duration: 750,
							easing: [.53,-0.03,0,1.25]
						});


						var speed = 0.75;

						v(e['chart-wrapper-2'],{
							width: 33
						},{
							duration: 125*speed,
							easing: 'linear'
						}).then(function(){

							function blinkCursor(delay) {
								if(blink) {

									v(e['cursor-2'],{
										opacity: 0
									},{
										duration: 10,
										complete: function() {
											setTimeout(function() {
												v(e['cursor-2'],"stop");

												v(e['cursor-2'],{
													opacity: 1
												},{
													duration: 10,
													complete: function() {

														if(blink) {

															setTimeout(function(){
																if(blink) {
																	blinkCursor(delay);
																}
															},delay);
														}
													}
												});	

											},delay);
										}
									});
								}
							}
							blinkCursor(500);

							setTimeout(function(){

								looping = true;
								blink = false;

								setTimeout(function(){
									scrollBG();

									// zoom graph 

									v(e['bg-1-wrapper'],{
										scale: 6
									},{
										duration: 2250,
										easing: [.92,.03,.4,.88]
									});

									v(e['chart-2-zoom-position-offset'],{
										top: '-30%',
										left: '-5%'
									},{
										duration: 2250,
										easing: [.92,.03,.4,.88],
										complete: function() {
											
										}
									});


									v(e['question-mark-wrapper'],{
										left: -71-400
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});

									v(e['graph-2'],{
										left: -324
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});

									v(e['chart-wrapper'],{
										left: -550-400
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});


									v(e['chart-wrapper-2'],{
										left: -400,
										width: 805
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									}).then(function(){
										
										var speed = 2;

										v(e['chart-2-outer-wrapper'],{
											left: -(836-805),
											top: 38-39
										},{
											duration: 250*speed,
											easing: 'linear'
										});

										v(e['chart-wrapper-2'],{
											width: 837
										},{
											duration: 250*speed,
											easing: 'linear'
										});

										v(e['cursor-2'],{
											top: 38
										},{
											duration: 250*speed,
											easing: 'linear'
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(844-805),
												top: -(29-39)
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 844
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 29
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(850-805),
												top: -(32-39)
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 850
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 32
											},{
												duration: 48*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(864-805),
												top: -(8-39)
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 864
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 8
											},{
												duration: 113*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(886-805),
												top: -(9-39)
											},{
												duration: 177*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 886
											},{
												duration: 177*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 9
											},{
												duration: 177*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(892-805),
												top: -(20-39)
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 892
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 20
											},{
												duration: 48*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(899-805),
												top: -(18-39)
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 899
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 18
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(913-805),
												top: -(61-39)
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 913
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 61
											},{
												duration: 113*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(933-805),
												top: -(44-39)
											},{
												duration: 153*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 933
											},{
												duration: 153*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 44
											},{
												duration: 153*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(940-805),
												top: -(42-39)
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 940
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 42
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(948-805),
												top: -(47-39)
											},{
												duration: 65*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 948
											},{
												duration: 65*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 47
											},{
												duration: 65*speed,
												easing: 'linear'
											});
										});


										setTimeout(function(){
											v(e['bg-2-wrapper'],{
												opacity: 1
											},{
												duration: 1000,
												easing: [.92,.03,.4,.88]
											});
										},1250);

										setTimeout(function(){

											setTimeout(function(){
												v(e['up'],{
													top: 38,
													opacity: 1
												},{
													duration: 750,
													easing: [.68,0,0,1]
												});

												v(e['down'],{
													top: 38,
													opacity: 1
												},{
													duration: 750,
													easing: [.68,0,0,1],
													complete: function() {
														
													}
												});
											},125);



											v(e['predict'],{
												top: 38,
												opacity: 1
											},{
												duration: 750,
												easing: [.68,0,0,1],
												complete: function() {


													

													setTimeout(function(){

														v(e['predict'],{
															top: -10,
															opacity: 0
														},{
															duration: 250,
															easing: [1,0,.95,.3]
														});

														v(e['up'],{
															top: -10,
															opacity: 0
														},{
															duration: 250,
															easing: [1,0,.95,.3]
														});

														v(e['down'],{
															top: -10,
															opacity: 0
														},{
															duration: 250,
															easing: [1,0,.95,.3]
														});

														setTimeout(function() {
															v(e['high'],{
																opacity: 1,
																top: 25
															},{
																duration: 750,
																easing: [.68,0,0,1]
															});

															v(e['low'],{
																opacity: 1,
																top: 31
															},{
																duration: 750,
																easing: [.68,0,0,1]
															});

															setTimeout(function(){
																v(e['its-trading'],{
																	opacity: 1,
																	top: 40
																},{
																	duration: 750,
																	easing: [.68,0,0,1]
																});
															},500);

															setTimeout(function() {
																v(e['cta'],{
																	opacity: 1,
																	top: 19
																},{
																	duration: 750,
																	easing: [.68,0,0,1]
																});

																setTimeout(function(){
																	count++;

																	if(count<3) {
																		rerun();
																	}
																},5000);

															},500);
														},175);

													},2500);
												}
											})
										},2000);

									});

								},1000);

							},1020);
						});

					});
				});
			}

			if(count>0) {
				setTimeout(function(){
					runCursor();
				},125);
			} else {
				runCursor();
			}
			
		},500);
	}

	var count = 0;

	window.emergencyStop = function() {

		for(var i = 0; i < eArray.length; i++) {
			if(eArray[i]) {
				v(eArray[i],"stop");
			}
		};

		for(var i=0; i<200; i++) clearTimeout(i);
		looping = false;
		pacing = false;
		blink = false;
	}

	function rerun () {
		emergencyStop();

		setTimeout(function(){

			v(e['bg-1-wrapper'],{
				scale: 1
			},{
				duration: 0
			});

			for(var i = 0; i < eArray.length; i++) {
				var element = eArray[i];
				if(element!=null) {
					element.removeAttribute("style");
				}
			}
			
			run();
		},1000);
	}

	function getSupportedTransform() {
	    var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
	    var div = document.createElement('div');
	    for(var i = 0; i < prefixes.length; i++) {
	        if(div && div.style[prefixes[i]] !== undefined) {
	            return prefixes[i];
	        }
	    }
	    return false;
	}

	if(!getSupportedTransform()) {
		document.getElementById('fallback').style.display = 'block';

		var img = document.createElement("img");
		img.setAttribute("src", "static.png");

		document.getElementById('fallback').appendChild(img);
	
	} else {
		run();
	}
	
}