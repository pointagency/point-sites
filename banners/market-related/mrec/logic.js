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
		['graph-wrapper'],
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
				// emergencyStop();
				// return;
			}
		});

		

		function showQuestionMark(callback) {

			v(e['question-mark-1'],{
				width: 24
			},{
				duration: 50,
				easing: 'linear',
				complete: function() {
					v(e['question-mark-2'],{
						height: 56, 
						top: 110
					},{
						duration: 75,
						easing: 'linear',
						complete: function() {
							v(e['question-mark-3'],{
								width: 30
							},{
								duration: 50,
								easing: 'linear',
								complete: function() {
									v(e['question-mark-4'],{
										height: 35,
										top: 67
									},{
										duration: 75,
										easing: 'linear',
										complete: function() {
											v(e['question-mark-5'],{
												width: 54,
												left: 117
											},{
												duration: 75,
												easing: 'linear',
												complete: function() {
													v(e['question-mark-6'],{
														height: 15
													},{
														duration: 40,
														easing: 'linear',
														complete: function() {
															v(e['question-mark-6-1'],{
																width: 23,
																left: 96
															},{
																duration: 55,
																easing: 'linear',
																complete: function() {
																	v(e['question-mark-7'],{
																		height: 15,
																		top: 67
																	},{
																		duration: 35,
																		easing: 'linear',
																		complete: function() {
																			v(e['question-mark-8'],{
																				height: 12,
																				top: 55
																			},{
																				duration: 15,
																				easing: 'linear',
																				complete: function() {
																					v(e['question-mark-9'],{
																						width: 79
																					},{
																						duration: 100,
																						easing: 'linear',
																						complete: function() {
																							v(e['question-mark-10'],{
																								height: 12,
																								top: 55
																							},{
																								duration: 15,
																								easing: 'linear',
																								complete: function() {
																									v(e['question-mark-11'],{
																										height: 64
																									},{
																										duration: 75,
																										easing: 'linear',
																										complete: function() {
																											v(e['question-mark-12'],{
																												width: 16,
																												left: 161
																											},{
																												duration: 15,
																												easing: 'linear',
																												complete: function() {
																													v(e['question-mark-13'],{
																														width: 20,
																														left: 141
																													},{
																														duration: 20,
																														easing: 'linear',
																														complete: function() {
																															v(e['question-mark-14'],{
																																height: 35
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
		
		function paceSelf(w) {

			if(pacing) {

				var width = getRandomInt(w-20,w-10),
					duration = getRandomInt(750,1250);

				v(e['chart-wrapper'],{
					width: width,
				},{
					duration: duration,
					easing: [.67,0,.54,1]
				}).then(function() {

					var width = getRandomInt(w+10,w+20),
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
						paceSelf(w);
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

				var speed = 1;

				v(e['chart-wrapper'],{
					width: 42
				},{
					duration: 250*speed,
					easing: 'linear'
				});

				v(e['cursor'],{
					top: 78
				},{
					duration: 250*speed,
					easing: 'linear'
				}).then(function (){

					v(e['chart-wrapper'],{
						width: 54
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 102
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 67
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 116
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 82
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 119
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 92
					},{
						duration: 40*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 101
					},{
						duration: 40*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 132
					},{
						duration: 276*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 125
					},{
						duration: 276*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 148
					},{
						duration: 105*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 108
					},{
						duration: 105*speed,
						easing: 'linear'
					});
				}).then(function() {

					scrollBG();
					
					v(e['where-is-it-going'],{
						opacity: 1,
						marginLeft: 0
					},{
						duration: 2250,
						easing: [.63,0,0,1.07]
					});

					v(e['chart-wrapper'],{
						width: 161,
						left: 150-161
					},{
						duration: 66*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 122
					},{
						duration: 66*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 177,
						left: 150-177
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 130
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 202,
						left: 150-202
					},{
						duration: 184*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 121
					},{
						duration: 184*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 226,
						left: 150-226
					},{
						duration: 132*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 98
					},{
						duration: 132*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 243,
						left: 150-243
					},{
						duration: 118*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 108
					},{
						duration: 118*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 256,
						left: 150-256
					},{
						duration: 92*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 103
					},{
						duration: 92*speed,
						easing: 'linear'
					});
				}).then(function() {

					v(e['chart-wrapper'],{
						width: 270,
						left: 150-270
					},{
						duration: 79*speed,
						easing: 'linear'
					});

					return v(e['cursor'],{
						top: 111
					},{
						duration: 79*speed,
						easing: 'linear'
					});
				}).then(function(){

					v(e['chart-wrapper'],{
						width: 450,
						left: 125-450
					},{
						duration: 1000*speed,
						easing: 'linear'
					});

					paceSelf(450);

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
						width: 450
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

						// emergencyStop();
						// return;

						v(e['dot'],{
							top: 172,
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

							// emergencyStop();

							// return;

							setTimeout(function(){

								looping = true;
								blink = false;

								setTimeout(function(){
									scrollBG();

									// zoom graph 

									v(e['bg-1-wrapper'],{
										scale: 4
									},{
										duration: 3000,
										easing: [.92,.03,.4,.88]
									});

									v(e['chart-2-zoom-position-offset'],{
										top: '-30%',
										left: '-50%'
									},{
										duration: 3000,
										easing: [.92,.03,.4,.88],
										complete: function() {
											
										}
									});


									v(e['question-mark-wrapper'],{
										left: -300
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});

									v(e['graph-2'],{
										left: -300
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});

									v(e['chart-wrapper'],{
										left: -450
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									});

									v(e['chart-wrapper-2'],{
										left: 150-241,
										width: 241
									},{
										duration: 250,
										easing: [.63,0,0,1.07]
									}).then(function(){

										var speed = 2;

										v(e['chart-2-outer-wrapper'],{
											left: -(241-150),
											top: 111-112
										},{
											duration: 250*speed,
											easing: 'linear'
										});

										v(e['chart-wrapper-2'],{
											left: 0,
											width: 241
										},{
											duration: 250*speed,
											easing: 'linear'
										});

										v(e['cursor-2'],{
											top: 112
										},{
											duration: 250*speed,
											easing: 'linear'
										}).then(function(){
											v(e['chart-2-outer-wrapper'],{
												left: -(257-150),
												top: 111-87
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 257
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 87
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(271-150),
												top: 111-99
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 271
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 99
											},{
												duration: 48*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(299-150),
												top: 111-47
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 299
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 47
											},{
												duration: 113*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(342-150),
												top: 111-50
											},{
												duration: 177*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 342
											},{
												duration: 177*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 50
											},{
												duration: 177*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(354-150),
												top: 111-71
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 354
											},{
												duration: 48*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 71
											},{
												duration: 48*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(367-150),
												top: 111-69
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 367
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 69
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(397-150),
												top: 111-155
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 397
											},{
												duration: 113*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 155
											},{
												duration: 113*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(439-150),
												top: 111-120
											},{
												duration: 153*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 439
											},{
												duration: 153*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 120
											},{
												duration: 153*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(447-150),
												top: 111-118
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 447
											},{
												duration: 56*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 118
											},{
												duration: 56*speed,
												easing: 'linear'
											});
										}).then(function (){

											v(e['chart-2-outer-wrapper'],{
												left: -(465-150),
												top: 111-129
											},{
												duration: 65*speed,
												easing: 'linear'
											});

											v(e['chart-wrapper-2'],{
												width: 465
											},{
												duration: 65*speed,
												easing: 'linear'
											});

											return v(e['cursor-2'],{
												top: 129
											},{
												duration: 65*speed,
												easing: 'linear'
											});
										})



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
													top: 100,
													opacity: 1
												},{
													duration: 750,
													easing: [.68,0,0,1]
												});

												v(e['down'],{
													top: 100,
													opacity: 1
												},{
													duration: 750,
													easing: [.68,0,0,1],
													complete: function() {
														
													}
												});
											},125);



											v(e['predict'],{
												top: 100,
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
																top: 41
															},{
																duration: 750,
																easing: [.68,0,0,1]
															});

															v(e['low'],{
																opacity: 1,
																top: 48
															},{
																duration: 750,
																easing: [.68,0,0,1]
															});

															setTimeout(function(){
																v(e['its-trading'],{
																	opacity: 1,
																	top: 112
																},{
																	duration: 750,
																	easing: [.68,0,0,1]
																});
															},500);

															setTimeout(function() {
																v(e['cta'],{
																	opacity: 1,
																	top: 159
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

															},750);
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

	function emergencyStop () {

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

	window.emergencyStop = emergencyStop;

	function rerun () {
		emergencyStop();

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