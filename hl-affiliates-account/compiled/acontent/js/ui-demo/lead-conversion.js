function getCookieDate()
{	
	startRangeDate = moment().startOf('month');
	endRangeDate = moment().endOf('month');
	rangeCookie = $.cookie('affiliate_my_account_range');
	
	if(rangeCookie != undefined) {
		rangeData = rangeCookie.split(' ');
		startRangeDate = moment(rangeData[0]);
		endRangeDate = moment(rangeData[1]);
	}
	
	var data = new Array();
	data['startRangeDate'] = startRangeDate;
	data['endRangeDate'] = endRangeDate;
	
	return data;
}

$(document).ready(function() {	
	data = getCookieDate();	
	startRangeDate = data['startRangeDate'];
	endRangeDate = data['endRangeDate'];
	rangeOptions = {
			ranges: {
	         'Today': [moment(), moment()],
	         'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
	         'Last 7 Days': [moment().subtract('days', 6), moment()],
	         'Last 30 Days': [moment().subtract('days', 29), moment()],
	         'This Month': [moment().startOf('month'), moment().endOf('month')],
	         'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
	      },
	      startDate: startRangeDate,
	      endDate: endRangeDate,
	      opens: "left"
    };
	
	$('#reportrange').daterangepicker(
	    rangeOptions,
	    function(start, end) {
	    	
	    }
	);

	// Sample data for line chart

	var clicksData = [
					75,
					54,
					42,
					66,
					68,
					75,
					43,
					42,
					20,
					54,
					42,
					66,
					68,
					45,
					43,
					52,
					20,
					64,
					42,
					46,
					78,
					75,
					83,
					42,
					30,
					47,
					58,
					126,
					38,
					45,
					93,
					42,
					20,
					75,
					13,
					32,
					56
				],
		conversionsData = [
					25,
					34,
					12,
					16,
					8,
					15,
					3,
					12,
					0,
					4,
					12,
					6,
					18,
					15,
					23,
					12,
					10,
					4,
					2,
					16,
					8,
					15,
					3,
					2,
					10,
					17,
					8,
					6,
					8,
					15,
					13,
					12,
					0,
					5,
					3,
					12,
					16
				];

	$("#affiliate-line-chart").lineChart({
		renderTo: 'affiliate-line-chart',
		title: '<span class="chart-title"> Volumes for <span class="chart-title--dynamic">Jan 1, 2016 - Feb 6, 2016</span></span>',
		categories : [
			'Jan 1', 
			'Jan 2',
			'Jan 3',
			'Jan 4', 
			'Jan 5',
			'Jan 6',
			'Jan 7', 
			'Jan 8',
			'Jan 9',
			'Jan 10', 
			'Jan 11',
			'Jan 12',
			'Jan 13', 
			'Jan 14',
			'Jan 15',
			'Jan 16', 
			'Jan 17',
			'Jan 18',
			'Jan 19', 
			'Jan 20',
			'Jan 21',
			'Jan 22', 
			'Jan 23',
			'Jan 24',
			'Jan 25', 
			'Jan 26',
			'Jan 27',
			'Jan 28',
			'Jan 29', 
			'Jan 30',
			'Jan 31',
			'Feb 1',
			'Feb 2',
			'Feb 3',
			'Feb 4',
			'Feb 5', 
			'Feb 6', 
		],
		seriesdata : [
			{
				name: 'Clicks',
				color: '#cee8e1',
				fillColor: '#f6f9f5',
				data: clicksData
			},
			{
				name: 'Conversions',
				color: '#f07a3f',
				fillColor: '#ffefe9',
				data: conversionsData
			}
		]			
	});


	// Sample data for funnel chart

	// meaning of each variable required in this chart:

	var totalClicks = 98,

		registered = 34,

		approved = 29,

		funded = 16,

		traded = 9;

	$("#affiliate-funnel-chart").funnelChart({
		renderTo: 'affiliate-funnel-chart',
		title: '<span class="chart-title">Conversion funnel <span class="chart-title--dynamic">('+totalClicks+' click'+(totalClicks>1?'s':'')+')</span></span>',
		total: totalClicks,
		min: traded,
		categories : [
			{
				count: registered
			},{
				name: 'Registered'
			},{
				count: approved
			},{
				name: 'Approved'
			},{
				count: funded
			},{
				name: 'Funded'
			},{
				count: traded
			},{
				name: 'Traded'
			},
			''
		],
		seriesdata : [
			{
				name: 'Registered',
				data: [
					{ 
						y : 100
					},
					{
						y: ((100+registered)/2/totalClicks)*100,
						percentage: registered/totalClicks
					},
					{ 
						y : (registered/totalClicks)*100
					}
				]
			},
			{
				name: 'Approved',
				data: [
					null,
					null,
					{ 
						y : registered
					},
					{
						y: ((approved+registered)/2/totalClicks)*100,
						percentage: approved/totalClicks
					},
					{ 
						y : (approved/totalClicks)*100
					}
				]
			},
			{
				name: 'Funded',
				data: [
					null,
					null,
					null,
					null,{ 
						y : approved
					},
					{
						y: ((approved+funded)/2/totalClicks)*100,
						percentage: funded/totalClicks
					},
					{ 
						y : (funded/totalClicks)*100
					}
					
				]
			},
			{
				name: 'Traded',
				data: [
					null,
					null,
					null,
					null,
					null,
					null,{ 
						y : funded
					},
					{
						y: ((traded+funded)/2/totalClicks)*100,
						percentage: traded/totalClicks
					},
					{ 
						y : (traded/totalClicks)*100
					}
				]
			},
			// the next 3 series are for drawing border between the funnels, so just use them as is
			{
				color: '#fff',
				data: [
					{ 
						y : (registered/totalClicks)*100,
						x : 2
					},{ 
						y : (registered/totalClicks)*100,
						x : 2.025
					}
				]
			},
			{
				color: '#fff',
				data: [
					{ 
						y : (registered/totalClicks)*100,
						x : 4
					},{ 
						y : (registered/totalClicks)*100,
						x : 4.025
					}
				]
			},
			{
				color: '#fff',
				data: [
					{ 
						y : (registered/totalClicks)*100,
						x : 6
					},{ 
						y : (registered/totalClicks)*100,
						x : 6.025
					}
				]
			}
		]	
		
	});

	// Sample usage of table

	$('#lead-status-table').tablize({
		responsive: {
			details: false,
	        breakpoints: [
	            { name: 'desktop', width: Infinity },
	            { name: 'tablet',  width: 1650 },
	            { name: 'fablet',  width: 1199 },
	            { name: 'phone',   width: 767 }
	        ]
	    }
	});
		
});