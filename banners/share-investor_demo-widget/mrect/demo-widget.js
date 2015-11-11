demoWidget = {};

initValues = ['27','12:27','16:31','28:32','33:37','38:32','48:32','52:35','82:35','87:37','110:37','118:41','125:41','131:42','138:39','144:39','146:50','156:50','160:48','168:48','173:75','183:70','190:86','196:82','204:82','210:77','214:66','221:70','235:70','239:73','243:70','257:76','262:85','264:83','270:88','277:85','286:85','288:88','296:88','300:106','308:102','315:105','321:102','327:104','333:101','346:101','349:113','352:110','362:110','367:107','379:107','382:103','390:108','398:108','402:111', '406:113'];// full value 501
resetValues = ['27','12:27','16:31','28:32','33:37','38:32','48:32','52:35','82:35','87:37','110:37','118:41','125:41','131:42','138:39','144:39','146:50','156:50','160:48','168:48','173:75','183:70','190:86','196:82','204:82','210:77','214:66','221:70','235:70','239:73','243:70','257:76','262:85','264:83','270:88','277:85','286:85','288:88','296:88','300:106','308:102','315:105','321:102','327:104','333:101','346:101','349:113','352:110','362:110','367:107','379:107','382:103','390:108','398:108','402:111', '406:113'];// full value 501
initOptions = { 
    type: 'line',
    width: '516',
    height: '226',
    lineColor: '#ff9b00',
    fillColor: '#fec300',
    lineWidth: 3,
    spotColor: '#fff',
    minSpotColor: false,
    maxSpotColor: false,
    spotRadius: 6,
    chartRangeMin: 0,
    chartRangeMax: 226,
    chartRangeMinX: 0,
    chartRangeMaxX: 518,
    disableTooltips: true,
    disableHighlight: true,
    drawNormalOnTop: false
}

winRate = 0.8;
biasFactor = 0.58;
lastSix = [];


init = function() {
    var self = demoWidget;

    self.setup();

    $("#sparkline").sparkline(self.initValues, self.initOptions);
    $('.demo-widget').on('click','.button.high',function(){
        self.pick(1);
    });
    $('.demo-widget').on('click','.button.low',function(){
        self.pick(-1);
    });
    $('.demo-widget').on('click','.try-again',function(){
        if(self.running || !self.finished) {
           
        } else {
            
            self.reset();
        }
    });
     
}

setup = function() {

    var self = demoWidget;

    self.started = false;
    self.widget = $('.demo-widget .interactive-widget'),
    self.graphContainer = $('.demo-widget .render');
    self.easing = [.76,0,.29,1],
    self.chartEasing = [.35,.08,.16,.96],
    self.arrowUp = $('.demo-widget .arrow.arrow-up'),
    self.arrowDown = $('.demo-widget .arrow.arrow-down'),
    self.tip = $('.demo-widget .floating-tip .tip'),
    self.tipMessageDisplay = $('.demo-widget .floating-tip .content .message'),
    self.traceLine = $('.demo-widget .trace'),
    self.hWin = $('.demo-widget .bet.high.win'),
    self.lWin = $('.demo-widget .bet.low.win'),
    self.hLose = $('.demo-widget .bet.high.lose')
    self.lLose = $('.demo-widget .bet.low.lose'),
    self.bet = $('.demo-widget .bet');
    self.hBetTop = 83;
    self.lBetTop = 120;


    self.hWin.css({
        display: 'none'
    });
    self.lWin.css({
        display: 'none'
    });
    self.hLose.css({
        display: 'none'
    });
    self.lLose.css({
        display: 'none'
    });

    self.widget.css({
        opacity: 0,
        top: '60px'
    });

    self.graphContainer.css({
        width: 0
    });
    
    self.arrowUp.css({
        //width: 0,
        opacity: 0,
        top: '86px',
        right: '59px'
    });
    self.arrowDown.css({
        //width: 0,
        opacity: 0,
        top: '113px',
        right: '59px'
    });
    
    self.tip.css({
        opacity: 0,
        top: '-20px'
    });

    self.traceLine.css({
        opacity: 0,
        left: '400px',
        width: 0
    });

    updateMessage(isJA()?"今すぐ試す。":"Try it out!");

}

reset= function (callback) {
    var self = demoWidget;

    self.initValues = self.resetValues.slice();
    self.initOptions.spotRadius = 6;

    
    self.hWin.velocity({
        top: (self.hBetTop-3)+'px'
    },{
        duration: 500,
        easing: self.easing,
        complete: function() {
           self.hWin.css({
                display: 'none'
           });
        }
    });

    self.lWin.velocity({
        top: (self.lBetTop+3)+'px'
    },{
        duration: 500,
        easing: self.easing,
        complete: function() {
           self.lWin.css({
                display: 'none'
           });
        }
    });

    self.hLose.velocity({
        top: (self.hBetTop-3)+'px'
    },{
        duration: 500,
        easing: self.easing,
        complete: function() {
           self.hLose.css({
                display: 'none'
           });
        }
    });

    self.lLose.velocity({
        top: (self.lBetTop+3)+'px'
    },{
        duration: 500,
        easing: self.easing,
        complete: function() {
           self.lLose.css({
                display: 'none'
           });
        }
    });

    self.arrowUp.css({
        top: '86px',
        right: '59px'
    });
    self.arrowDown.css({
        top: '113px',
        right: '59px'
    });

    self.traceLine.velocity({
        opacity: 0,
        left: '-8px',
        width: '0px'
    },{
        duration: 300,
        easing: self.easing
    });

    self.started = false;

    // setTimeout(function(){
        updateMessage(isJA()?"今すぐ試す。":"Try it out!");
        self.graphContainer.velocity({
            width: 0
        },{
            duration: 650,
            easing: self.easing,
            complete: function() {
                $("#sparkline").sparkline(self.initValues, self.initOptions);
                self.comeBackIn(callback);
            }
        });
    // },200);

    
}

updateMessage = function (message) {
    var self = demoWidget;
    self.tipMessageDisplay.html(message);
    typographer.prepareJapanese(self.tipMessageDisplay);
}
 
comeBackIn = function(callback) {
    var self = demoWidget;

    self.widget.velocity({
        opacity: 1,
        top: '2px'
    }, {
        duration: 500,
        easing: self.easing,
        complete: function() {
  
            self.graphContainer.velocity({
                width: '416px' //full width: '512px'
            }, {
                duration: 500,
                easing: self.chartEasing
            });


            setTimeout(function(){

                self.traceLine.velocity({
                    opacity: 1,
                    left: '-8px',
                    width: '496px'
                },{
                    duration: 450,
                    easing: self.easing
                });
               
                self.arrowUp.velocity({
                    width: '34px',
                    top: '76px',
                    opacity: 1,
                    right: '39px'
                },{
                    duration: 600,
                    easing: self.easing
                });

                self.arrowDown.velocity({
                    width: '34px',
                    top: '123px',
                    opacity: 1,
                    right: '39px'
                },{
                    duration: 600,
                    easing: self.easing,
                    complete: function() {
                        setTimeout(flashSpot,125);
                    }
                });

                self.showFloatTip();

                setTimeout(callback,250);

                
            },450);
        }
    });   
}
comeIn = function() {
    var self = demoWidget;
    self.came = true;
    self.widget.velocity({
        opacity: 1,
        top: '2px'
    }, {
        duration: 700,
        easing: self.easing,
        complete: function() {
            // setTimeout(function(){
            self.graphContainer.velocity({
                width: '416px' //full width: '512px'
            }, {
                duration: 1000,
                easing: self.chartEasing
            });
            // });

            setTimeout(function(){

                self.traceLine.velocity({
                    opacity: 1,
                    left: '-8px',
                    width: '496px'
                },{
                    duration: 750,
                    easing: self.easing
                });
                // setTimeout(function() {
                    self.arrowUp.velocity({
                        width: '34px',
                        top: '76px',
                        opacity: 1,
                        right: '39px'
                    },{
                        duration: 800,
                        easing: self.easing
                    });
                    self.arrowDown.velocity({
                        width: '34px',
                        top: '123px',
                        opacity: 1,
                        right: '39px'
                    },{
                        duration: 800,
                        easing: self.easing,
                        complete: function() {
                            // self.updateMessage('<b class="high-color">HIGH</b>か<b class="low-color">LOW</b>かを選ぶだけ！');
                            setTimeout(flashSpot,125);
                            self.prepared = true;
                        }
                    });
                    self.showFloatTip();
                // },200);
                

                
            },800);
        }
    });   
}
pick = function(direction) {
    var self = demoWidget;

    if(self.started || !self.prepared) {
        if(self.finished) {
            self.reset(function(){
                self.pick(direction);
            });
        }
    } else {
        self.running = true;
        self.started = true;
        self.finished = false;
        self.arrowUp.velocity({
            top: '56px',
            opacity: 0,
            right: '19px'
        },{
            duration: 500,
            easing: self.easing
        });
        self.arrowDown.velocity({
            top: '123px',
            opacity: 0,
            right: '19px'
        },{
            duration: 500,
            easing: self.easing,
        });

        self.dockTip();


        self.betDirection = direction

        var win = Math.random() < self.winRate;

        var sumLast2Games = 0,
            sumLast6Games = 0;

        for(var i=0; i< 6; i++) {

            if(i<2) {
                sumLast2Games+= lastSix[i];
            }


            sumLast6Games+= lastSix[i];
            
        }

    
        //console.log("Win? "+win);


        if(win) {
            bias += 0.025;
        } else {
            bias -= 0.025;
        }

        var bias = self.biasFactor;

        if(sumLast2Games<0) {
            //console.log('sure win');
            win = 1;

            bias = 0.75;
        };

        if(sumLast6Games>5) {
            //console.log('sure lose');
            win = 0;

            bias = 0.45;
        }


        setTimeout(function(){
            if(direction>0) { //up
                $('.bet.high.win').css({
                    display: 'block',
                    top: '73px'
                }).velocity({
                    top: '83px'
                },{
                    duration: 500,
                    easing: self.easing,
                    complete: function() {
                        self.simulate(win?(1-bias):(bias));
                    }
                });
            } else { //down
                $('.bet.low.win').css({
                    display: 'block',
                    top: '130px'
                }).velocity({
                    top: '120px'
                },{
                    duration: 500,
                    easing: self.easing,
                    complete: function() {
                        self.simulate(win?(bias):(1-bias));
                    }
                });
            }
        },400);
    }
}

runSimulationRateTest = function(direction) {
    var self = demoWidget;
    var win = Math.random() < self.winRate;

    var winCount = 0;
    var bias = self.biasFactor;
    var sumLast2Games = 0;
    self.betDirection = direction;

    

   
    for(var i=0; i<1000; i++) {

        sumLast2Games = 0;

        bias = self.biasFactor;

        win = Math.random() < self.winRate;

        for(var j=0; j< lastSix.length; j++) {
            sumLast2Games+= lastSix[i];
        }

        console.log("Win? "+win);

        if(sumLast2Games<-1) {
            console.log('sure win');
            win = 1;
        };


        if(direction>0) { //up
            winCount+=self.testSimulateRate(win?(1-self.biasFactor):(self.biasFactor));
        } else { //down
            winCount+=self.testSimulateRate(win?(self.biasFactor):(1-self.biasFactor));  
        }
    }

    console.log('Win count: '+winCount+'/1000');

}

testSimulateRate = function(bias) {

    var self = demoWidget;
    self.stopFlashingSpot = true,
    minInterval = 150,
    maxInterval = 250,
    minDisplacement = 2,
    maxDisplacement = 7,
    finalX = 489;

    self.graphContainer.css({
        width: '512px'
    });


    var generateSpot = function() {
        var lastPoint =  self.initValues[self.initValues.length-1].split(":"),
        lastX = lastPoint[0],
        lastY = lastPoint[1];


        for(var newX = (parseInt(lastX));newX <= finalX;newX+=5) {

            lastPoint =  self.initValues[self.initValues.length-1].split(":"),
            lastX = lastPoint[0],
            lastY = lastPoint[1];

             // console.log(lastX+":"+lastY);

            var displacement = utils.getRandomInt(minDisplacement,maxDisplacement);



            if(Math.random()>bias) {
                newY = parseInt(lastY)+displacement;
            } else {
                newY = parseInt(lastY)-displacement;
            }

            
            var newX = (parseInt(lastX))+5;

            if(newX>=finalX) {
                newX = finalX;
            }
            
            self.initValues.push(newX+":"+newY);

            //initOptions.spotRadius = 6;
            //$("#sparkline").sparkline(initValues, initOptions);
        }
        return self.getTestResult();
        

       
    }

    return generateSpot();

}

getTestResult = function(){
    var self = demoWidget,
        lastPoint =  self.initValues[self.initValues.length-1].split(":"),
        lastX = lastPoint[0],
        lastY = lastPoint[1];

    console.log(lastY+":"+lastX);
    console.log(self.betDirection);


    if((lastY<113 && self.betDirection < 0) || (lastY>113 && self.betDirection >0)) {
        lastSix.unshift(1);
        if(lastSix.length>2) {
            lastSix.pop();
        }
        self.initValues = self.resetValues.slice();
        return 1;
    } else {
        lastSix.unshift(-1);
        if(lastSix.length>2) {
            lastSix.pop();
        }
        self.initValues = self.resetValues.slice();
        return 0;
    }
}


simulate = function(bias) {
    var self = demoWidget;
    self.stopFlashingSpot = true,
    minInterval = 150,
    maxInterval = 250,
    minDisplacement = 2,
    maxDisplacement = 7,
    finalX = 489;

    self.graphContainer.css({
        width: '512px'
    });

    var generateSpot = function() {
        var lastPoint =  self.initValues[self.initValues.length-1].split(":"),
        lastX = lastPoint[0],
        lastY = lastPoint[1];

        // console.log(lastX+":"+lastY);

        var displacement = utils.getRandomInt(minDisplacement,maxDisplacement);



        if(Math.random()>bias) {
            newY = parseInt(lastY)+displacement;
        } else {
            newY = parseInt(lastY)-displacement;
        }

        

        var newX = (parseInt(lastX))+5;

        if(newX>=finalX) {
            newX = finalX;
        }
        
        self.initValues.push(newX+":"+newY);

        initOptions.spotRadius = 6;
        $("#sparkline").sparkline(initValues, initOptions);

        if(newX<finalX) {
            setTimeout(generateSpot,utils.getRandomInt(minInterval,maxInterval));
        } else {
            self.showResult();
        }
    }

    generateSpot();
}



showResult = function () {
    var self = demoWidget,
        lastPoint =  self.initValues[self.initValues.length-1].split(":"),
        lastX = lastPoint[0],
        lastY = lastPoint[1],
        flickDuration = 200;



    if((lastY<113 && self.betDirection < 0) || (lastY>113 && self.betDirection >0)) {

        lastSix.unshift(1);
        if(lastSix.length>6) {
            lastSix.pop();
        }

        if (self.betDirection<0) {
            self.lWin.velocity({
                top: '123px'
            },{
                duration: flickDuration,
                easing: self.easing,
                complete: function() {
                    self.lWin.velocity({
                        top: '120px'
                    },{
                        duration: flickDuration,
                        easing: self.easing,
                        complete: function() {
                            self.lWin.velocity({
                                top: '123px'
                            },{
                                duration: flickDuration,
                                easing: self.easing,
                                complete: function() {
                                    self.lWin.velocity({
                                        top: '120px'
                                    },{
                                        duration: flickDuration,
                                        easing: self.easing, 
                                        complete: function() {
                                            self.running = false;
                                            self.finished = true;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else {
            self.hWin.velocity({
                top: '80px'
            },{
                duration: flickDuration,
                easing: self.easing,
                complete: function() {
                    self.hWin.velocity({
                        top: '83px'
                    },{
                        duration: flickDuration,
                        easing: self.easing,
                        complete: function() {
                            self.hWin.velocity({
                                top: '80px'
                            },{
                                duration: flickDuration,
                                easing: self.easing,
                                complete: function() {
                                    self.hWin.velocity({
                                        top: '83px'
                                    },{
                                        duration: flickDuration,
                                        easing: self.easing, 
                                        complete: function() {
                                            self.running = false;
                                            self.finished = true;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        self.updateMessage(isJA()?"予想的中！<span class='try-again'>もう一度試す。</span>":"Successful! <span class='try-again'>Try it again.</span>");
    } else {


        lastSix.unshift(-1);
        if(lastSix.length>6) {
            lastSix.pop();
        }

        if (self.betDirection<0) {
            self.lWin.css({
                display: 'none'
            });
            self.lLose.css({
                display: 'block'
            });
        } else {
            self.hWin.css({
                display: 'none'
            });
            self.hLose.css({
                display: 'block'
            });
        }
        self.running = false;
        self.finished = true;
        self.updateMessage(isJA()?"残念！<span class='try-again'>もう一度試す。</span>":"Unlucky! <span class='try-again'>Let's try again.</span>");
    }


    
}

showFloatTip = function () {
    var self = demoWidget;
    setTimeout(function(){
        self.tip.velocity({
            opacity: 1,
            top: '8px'
        },{
            duration: 600,
            complete: function() {
                floatTip();
            }
        });
    },250);
}
dockTip = function() {
    var self = demoWidget;

    self.tip.velocity('stop');
    self.tip.velocity({
        top: '0'
    });
    clearTimeout(floatTip);
}
floatTip = function() {
    var self = demoWidget,
    easing = [.48,0,.36,1];


    self.tip.velocity({
        top: '-8px'
    },{
        duration: 1000,
        easing: easing,
        complete: function() {
            self.tip.velocity({
                top: '8px'
            },{
                duration: 1000,
                easing: easing,
                complete: function() {
                    setTimeout(floatTip);
                }
            });
        }
    });
    
}
flashSpot = function() {
    var self = demoWidget;

    if(self.stopFlashingSpot) {
        initOptions.spotRadius = 6;
        $("#sparkline").sparkline(initValues, initOptions);
    } else {
        initOptions.spotRadius = 7;
        $("#sparkline").sparkline(initValues, initOptions);

        setTimeout(function(){
            initOptions.spotRadius = 6;
            $("#sparkline").sparkline(initValues, initOptions);
            setTimeout(flashSpot,550);
        },550);
    }
}