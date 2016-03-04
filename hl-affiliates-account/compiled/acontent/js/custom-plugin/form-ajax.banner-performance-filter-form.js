$(document).ready(function(){


	$('#banner-performance-filter-form').on('ajax-submit',function(){

		console.log('reload #banner-performance-table');

		var params = {};

		params.from = $('*[name="daterangepicker_start"]').val() || '2014-01-01',
  		params.to = $(' *[name="daterangepicker_end').val();

		$('#banner-performance-table').data('reloadParams',params);

		$('#banner-performance-table').data('processedDataTable').ajax.reload();

	});

});