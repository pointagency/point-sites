(function( $ ){
  $.fn.pieChart = function(o) {
	  var cfg={
		renderTo:'',  
		title:'',
		xTitle:'',
		yTitle:'',
		categories:[],
		seriesdata:[]
	  };
	  
	  jQuery.extend(cfg, o);

    var legendDefault = {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      floating: true,
      symbolWidth: 9,
      symbolHeight: 9,
      itemMarginBottom: 5,
      y: 40,
      x: -14,
      itemStyle: {
        fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
        fontSize: '12px',
        color: '#686867',
        fontWeight: '400',
        verticalAlign: 'middle'
      }
    };

    var legendSmallScreen = {
      align: 'left',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      floating: false,
      symbolWidth: 9,
      symbolHeight: 9,
      itemMarginBottom: 5,
      x: -10,
      itemStyle: {
        fontFamily: '"Roboto",Helvetica, Arial, sans-serif',
        fontSize: '12px',
        color: '#686867',
        fontWeight: '400',
        verticalAlign: 'middle'
      }
    };

    var smallScreen = $('#'+cfg.renderTo).width() < 340;

    var chartSmallScreen = {
      type: 'pie',
      align: 'left',
      style: {
        fontFamily: '"Roboto",Helvetica, Arial, sans-serif'
      }
    }


    var options = {
      chart: {
        type: 'pie',
        marginTop: 44,
        marginLeft: -30,
        align: 'left',
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
        style: {
          color: '#2c2f35',
          fontSize: '16px'
        }
      },
      colors: [
        '#ffb091',
        '#ffc791',
        '#ffe9c2',
        '#d3eae4',
        '#fff8d0', 
        '#ffefe9',
        '#f6f9f5'
      ],
      plotOptions: {
        pie: {
          allowPointSelect: false,
          align: 'left',
          shadow: false,
          size: 190,
          center: [
            112,80
          ],
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      exporting: { enabled: false },
      tooltip: {
        enabled: true
      },   
      series: cfg.seriesdata
    }

    if(smallScreen) {
      options.legend = legendSmallScreen;
    } else {
      options.legend = legendDefault;
    }


	  var chart = $('#'+cfg.renderTo).highcharts(options);


    var rebuildChart;

    $(window).resize(function(){

      clearTimeout(rebuildChart);

      rebuildChart = setTimeout(function(){

        if(chart.destroy) {
          chart.destroy();
        }
        var smallScreen = $('#'+cfg.renderTo).width() < 340;
        if(smallScreen) {
          options.legend = legendSmallScreen;
        } else {
          options.legend = legendDefault;
        }
        $('#'+cfg.renderTo).highcharts(options);
      });

    });
  };
})( jQuery );