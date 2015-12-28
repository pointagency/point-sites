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
		['graph-wrapper-2'],
		['graph-2'],
		['cursor-2'],
		['question-mark-wrapper'],
		['graph-wrapper-2-position'],
		['bg-2-wrapper'],
		['chart-wrapper'],
		['bg-1-wrapper-inner'],
		['predict'],
		['high','.png'],
		['low','.png'],
		['its-trading','.png'],
		['cta','.png'],
		['up','.png'],
		['down','.png']
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
		
		function paceSelf() {
			if(pacing) {
				v(e['graph-wrapper'],{
					width: getRandomInt(35,45),
				},{
					duration: getRandomInt(750,1250),
					easing: [.67,0,.54,1],
					complete: function() {
						if(pacing) {
							v(e['graph-wrapper'],{
								width: getRandomInt(55,65),
							},{
								duration: getRandomInt(750,1250),
								easing: [.67,0,.54,1],
								complete: function(){
									if(pacing) {
										paceSelf();
									}
								}
							});
						}
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
				v(e['cursor'],{
					top: 123
				},{
					duration: 360,
					easing: 'linear',
					complete: function() {

						v(e['cursor'],{
							top: 145
						},{
							duration: 170,
							easing: 'linear',
							complete: function() {
								v(e['cursor'],{
									top: 160
								},{
									duration: 170,
									easing: 'linear',
									complete: function() {

										v(e['cursor'],{
											top: 162
										},{
											duration: 75,
											easing: 'linear',
											complete: function() {

												v(e['cursor'],{
													top: 142
												},{
													duration: 100,
													easing: 'linear',
													complete: function() {

																												

														v(e['cursor'],{
															top: 167
														},{
															duration: 410,
															easing: 'linear',
															complete: function() {

																v(e['cursor'],{
																	top: 149
																},{
																	duration: 170,
																	easing: 'linear',
																	complete: function() {

																		v(e['cursor'],{
																			top: 166
																		},{
																			duration: 130,
																			easing: 'linear',
																			complete: function() {

																				v(e['cursor'],{
																					top: 172
																				},{
																					duration: 100,
																					easing: 'linear',
																					complete: function() {

																						v(e['cursor'],{
																							top: 160
																						},{
																							duration: 320,
																							easing: 'linear',
																							complete: function() {

																								v(e['cursor'],{
																									top: 140
																								},{
																									duration: 210,
																									easing: 'linear',
																									complete: function() {

																										v(e['cursor'],{
																											top: 152
																										},{
																											duration: 165,
																											easing: 'linear',
																											complete: function() {

																												v(e['cursor'],{
																													top: 146
																												},{
																													duration: 105,
																													easing: 'linear',
																													complete: function() {

																														v(e['cursor'],{
																															top: 153
																														},{
																															duration: 135,
																															easing: 'linear',
																															complete: function() {

																																
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


			

			if(count>0) {
				setTimeout(function(){
					runCursor();
				},125);
			} else {
				runCursor();
			}

			scrollBG();

			v(e['graph-wrapper'],{
				left: -0
			},{
				duration: 1550,
				easing: 'linear',
				complete: function() {
					
				}
			});

			v(e['graph'],{
				left: -273
			},{
				duration: 3300,
				easing: 'linear',
				complete: function() {
					
				}
			});
		},500);

		setTimeout(function(){

			paceSelf();
		},3500);

		setTimeout(function(){



			v(e['where-is-it-going'],{
				opacity: 1,
				marginTop: 0
			},{
				duration: 2250,
				easing: [.63,0,0,1.07],
				complete: function() {


					setTimeout(function(){
						v(e['where-is-it-going'],{
							opacity: 0,
							marginLeft: -120
						},{
							duration: 750,
							easing: [.63,0,0,1.07]
						});

						pacing = false;

						v(e['graph-wrapper'],"stop");
						v(e['graph-wrapper'],{
							width: 30
						},{
							duration: 1000,
							easing: [.63,0,0,1.07],
							complete: function() {
								
							}
						});



						setTimeout(function(){
							v(e['cursor'],{
								opacity: 0,
								right: 108
							},{
								duration: 750,
								easing: [.63,0,0,1.07]
							});
						},250);

						setTimeout(function(){

							looping = false;
							v(e['bg-1'],"stop");

							showQuestionMark(function(){
								v(e['dot'],{
									top: 172,
									opacity: 1
								},{
									duration: 750,
									easing: [.53,-0.03,0,1.25]
								});
								v(e['graph-wrapper-2'],{
									width: 60
								},{
									duration: 125,
									easing: 'linear'
								});



								setTimeout(function() {
									v(e['cursor-2'],{
										opacity: 1,
										right: 0
									},{
										duration: 750,
										easing: [.53,-0.03,0,1.25],
										complete: function() {

											v(e['cursor-2'],"stop");

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
																		setTimeout(function(){
																			if(blink) {
																				blinkCursor(delay);
																			}
																		},delay);
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

												scrollBG();
									
												// v(e['graph-2'],{
												// 	left: -185
												// },{
												// 	duration: 250,
												// 	easing: 'linear'
												// });

												v(e['graph-wrapper-2'],{
													width: 60
												},{
													duration: 250,
													easing: 'linear'

												});
												v(e['graph-wrapper-2-position'],{
													left: -160
												},{
													duration: 250,
													easing: 'linear',
													complete: function() {

												
													}

												});
												v(e['question-mark-wrapper'],{
													left: -220
												},{
													duration: 500,
													easing: 'linear'

												});
												v(e['graph-wrapper'],{
													left: -220
												},{
													duration: 500,
													easing: 'linear'
												});

												


												// move graph

												setTimeout(function(){



													// emergencyStop();
													// return;

													v(e['graph-2'],{
														left: -750
													},{
														duration: 3000,
														easing: 'linear'
													});
													
													setTimeout(function(){



														v(e['cursor-2'],{
															top: 104
														},{
															duration: 116,
															easing: 'linear'
														});
														v(e['graph-wrapper-2-position'],{
															top: 36
														},{
															duration: 116,
															easing: 'linear',
															complete: function(){
																
																v(e['cursor-2'],{
																	top: 116
																},{
																	duration: 125,
																	easing: 'linear'
																});
																v(e['graph-wrapper-2-position'],{
																	top: 12
																},{
																	duration: 125,
																	easing: 'linear',
																	complete: function(){

																		v(e['cursor-2'],{
																			top: 64
																		},{
																			duration: 315,
																			easing: 'linear'
																		});
																		v(e['graph-wrapper-2-position'],{
																			top: 64
																		},{
																			duration: 315,
																			easing: 'linear',
																			complete: function(){
																				v(e['cursor-2'],{
																					top: 66
																				},{
																					duration: 480,
																					easing: 'linear'
																				});
																				v(e['graph-wrapper-2-position'],{
																					top: 62
																				},{
																					duration: 480,
																					easing: 'linear',
																					complete: function(){
																						v(e['cursor-2'],{
																							top: 87
																						},{
																							duration: 180,
																							easing: 'linear'
																						});
																						v(e['graph-wrapper-2-position'],{
																							top: 41
																						},{
																							duration: 180,
																							easing: 'linear',
																							complete: function(){
																								v(e['cursor-2'],{
																									top: 85
																								},{
																									duration: 112,
																									easing: 'linear'
																								});
																								v(e['graph-wrapper-2-position'],{
																									top: 43
																								},{
																									duration: 112,
																									easing: 'linear',
																									complete: function(){
																										v(e['cursor-2'],{
																											top: 173
																										},{
																											duration: 344,
																											easing: 'linear'
																										});
																										v(e['graph-wrapper-2-position'],{
																											top: -45
																										},{
																											duration: 344,
																											easing: 'linear',
																											complete: function(){
																												v(e['cursor-2'],{
																													top: 137
																												},{
																													duration: 425,
																													easing: 'linear'
																												});
																												v(e['graph-wrapper-2-position'],{
																													top: -9
																												},{
																													duration: 425,
																													easing: 'linear',
																													complete: function(){
																														v(e['cursor-2'],{
																															top: 135
																														},{
																															duration: 75,
																															easing: 'linear'
																														});
																														v(e['graph-wrapper-2-position'],{
																															top: -7
																														},{
																															duration: 75,
																															easing: 'linear',
																															complete: function(){

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
													},150);
												},250);


												// zoom graph




												setTimeout(function(){
													v(e['bg-1-wrapper'],{
														scale: 6
													},{
														duration: 2250,
														easing: [.92,.03,.4,.88]
													});

													v(e['chart-wrapper'],{
														top: '-20%',
														left: '-20%'
													},{
														duration: 2250,
														easing: [.92,.03,.4,.88],
														complete: function() {
															
														}
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
																top: 203,
																opacity: 1
															},{
																duration: 750,
																easing: [.68,0,0,1]
															});

															v(e['down'],{
																top: 203,
																opacity: 1
															},{
																duration: 750,
																easing: [.68,0,0,1],
																complete: function() {
																	
																}
															});
														},250);



														v(e['predict'],{
															top: 203,
															opacity: 1
														},{
															duration: 750,
															easing: [.68,0,0,1],
															complete: function() {


																

																setTimeout(function(){

																	v(e['predict'],{
																		top: 140,
																		opacity: 0
																	},{
																		duration: 250,
																		easing: [1,0,.95,.3]
																	});


																	v(e['up'],{
																		top: 140,
																		opacity: 0
																	},{
																		duration: 250,
																		easing: [1,0,.95,.3]
																	});


																	v(e['down'],{
																		top: 140,
																		opacity: 0
																	},{
																		duration: 250,
																		easing: [1,0,.95,.3]
																	});

																	setTimeout(function() {
																		v(e['high'],{
																			opacity: 1,
																			top: 190
																		},{
																			duration: 750,
																			easing: [.68,0,0,1]
																		});

																		v(e['low'],{
																			opacity: 1,
																			top: 196
																		},{
																			duration: 750,
																			easing: [.68,0,0,1]
																		});

																		setTimeout(function(){
																			v(e['its-trading'],{
																				opacity: 1,
																				top: 264
																			},{
																				duration: 750,
																				easing: [.68,0,0,1]
																			});
																		},500);

																		setTimeout(function() {
																			v(e['cta'],{
																				opacity: 1,
																				top: 550
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

																		},1000);
																	},175);

																},2500);
															}
														})
													},2000);
													
												},125);
												
											},1020);
										}
									});
								},0);
							});
						},500);
						

					},1500);
				}
			});

		},1750);
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