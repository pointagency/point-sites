(function( $ ){
  $.fn.lineChart = function(o) {
	  var cfg={
		renderTo:'',  
		title:'',
		xTitle:'',
		yTitle:'',
		categories:[],
		seriesdata:[]
	  };
	  
	  jQuery.extend(cfg, o);

	  $('#'+cfg.renderTo).highcharts({
		  chart: {
        type: 'area',
        marginTop: 80,
        marginBottom: 53,
        style: {
          fontFamily: '"Roboto",Helvetica, Arial, sans-serif'
        }
      },
      credits: {
        enabled: false
      },
		  title: {
        text: cfg.title,
        floating: true,
        align: 'left',
        y: 26,
        useHTML: true,
        style: {
          color: '#2c2f35',
          fontSize: '16px'
        }
      },
      xAxis: {        	
      	title: {
          text: cfg.xTitle
        },
        tickInterval: 3,
        tickLength: 0,
        minPadding: 0,
        maxPadding: 0,
        startOnTick: true,
        lineColor: '#efefef',
        endOnTick: true,
        tickPosition: 'inside',
        labels: {
          y: 25,
          align: 'center',
          style: {
            fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
            fontSize: '10px'
          },
          formatter: function () {
            return cfg.categories[this.value];
          }
        }
      },
      yAxis: {
    	  allowDecimals: false,
    	  min : 0,      
        gridZIndex: 4,  	  
        tickPixelInterval: 70,
        gridLineColor: '#efefef',
        title: {
          text: cfg.yTitle
        },
        labels: {
          style: {
            fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
            fontSize: '10px'
          },
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
      },
      plotOptions: {
    	  series: {
          fillOpacity: 1,
          lineWidth : 2,
          stickyTracking: false,
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            radius: 3,
            symbol : 'circle',
            lineColor: null, // inherit from series
            shadow: false,
            states: {
              hover: {
                radius: 4,
                lineWidth: 2
              },
              select: {
                radius: 4,
                lineWidth: 2
              }
            }
          },
          states: {
            hover: {
              lineWidth: 2
            },
            select: {
              lineWidth: 2
            }
          }
        }
      },
      exporting: { enabled: false },
      tooltip: {
        // shared: true,
        backgroundColor: '#33363d',
        borderColor: '#33363d',
        borderRadius: 0,
        hideDelay: 0,
        snap: 0,
        style: {
          color: '#fff',
          boxShadow: 'none',
          padding: '23px 20px 0px'
        },
        shape: "callout",
        shadow: false,
        useHTML: true,
        formatter: function() {
          return '<span class="chart-tooltip--title">'+this.series.name + ' on ' + cfg.categories[this.x] +':</span>'
          +'<span class="chart-tooltip--count">'+this.y+'</span>';
        }
      },    
      legend: {
          layout: 'horizontal',
          align: 'right',
          verticalAlign: 'top',
          floating: true,
          itemDistance: 17,
          borderWidth: 0,
          symbolWidth: 30,
          symbolHeight: 2,
          symbolPadding: 10,
          lineHeight: 32,
          y: 8,
          itemStyle: {
            fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
            fontSize: '12px',
            color: '#686867',
            fontWeight: '400',
            verticalAlign: 'middle',
            transform: 'translate(0,-5)'
          }
      },
      series: cfg.seriesdata
	  });
  };
})( jQuery );