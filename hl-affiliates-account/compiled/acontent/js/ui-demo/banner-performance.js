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


	$('#banner-performance-table').tablize({
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