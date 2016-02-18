(function( $ ){
  $.fn.funnelChart = function(o) {
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
        overflow: 'visible',
        marginTop: 80,
        marginBottom: 53,
        events: {
          load: function(){
            $('#'+cfg.renderTo+'-bottom-count').addClass('in').html(Number(cfg.min/cfg.total*100).toFixed(2)+'%');
          }
        },
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
        y: 14,
        useHTML: true,
        style: {
          color: '#2c2f35',
          fontSize: '16px'
        }
      },
      colors: [
         '#fff8d0',
         '#ffe9c2',
         '#ffc791',
         '#ffb091', 
      ],
      xAxis: {        	
      	title: {
          text: cfg.xTitle
        },
        tickLength: 0,
        startOnTick: true,
        categories: cfg.categories,
        lineColor: '#efefef',
        gridLineColor: '#fff',
        labels: {
          y: 25,
          align: 'center',
          autoRotation: 0,
          autoRotationLimit: 0,
          useHTML: true,
          reverseSpace: false,
          padding: 0,
          style: {
            fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
            fontSize: '11px',
            color: '#2c2f35',
            zIndex: 20
          },
          formatter: function(){
            if(this.value=='') {
              return;
            }
            return ('<span class="chart--funnel--category-label">'+
              '<span class="chart--funnel--category-label--count">'+
              (this.value.count==undefined?'': this.value.count)+
              '</span>'+
              (this.value.name==undefined?'':('<span class="chart--funnel--category-label--tooltip">'+
              (this.value.tooltip==undefined?'Lorem ipsum': this.value.tooltip)+
              '</span>'))+
              (this.value.name==undefined?'': this.value.name)+
            '</span>');
          }
        }
      },
      yAxis: {
    	  allowDecimals: false,
    	  min : cfg.min,   
        max : cfg.total, 
        startOnTick : false,    	  
        tickPixelInterval: cfg.total-cfg.min,
        gridLineColor: '#fff',
        lineColor: '#efefef',
        title: {
          text: cfg.yTitle
        },
        labels: {
          enabled: false
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
      },
      marker: {
        enabled: false
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              },
              select: {
                enabled: false
              }
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontWeight: '400',
              fontSize: '11px',
              color: '#b7b7b7',
              fontFamily: '"Roboto",Helvetica, Arial, sans-serif'
            },
            y: -8,
            x: 36,
            allowOverlap: true,
            crop: false,
            overflow: 'none',
            useHTML: true,
            formatter: function() {

              if(this.percentage==undefined) {
                return '';
              }

              return '<span style="position: relative;"><span class="chart--label-guide-line"></span>'+Number(this.percentage*100).toFixed(2)+'%</span>'
            }
          },
          fillOpacity: 1,
          pointPlacement: 'on'
        },
    	  series: {
          connectNulls: true,
          fillOpacity: 1,
          lineWidth : 0,
          marker: {
            enabled: false
          }
        }
      },
      exporting: { enabled: false },
      tooltip: {
        enabled: false
      },   
      series: cfg.seriesdata
	  });
  };
})( jQuery );