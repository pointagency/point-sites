$(document).ready(function(){


	$('#commission-history-filter--name').typeSelect();


	$('#commission-history-filter-form').on('ajax-submit',function(){

		console.log('reload #commission-history-table');

		var params = {};

		params.from = $('*[name="daterangepicker_start"]').val() || '2014-01-01',
  		params.to = $(' *[name="daterangepicker_end').val();

		$('#commission-history-table').data('reloadParams',params);

		$('#commission-history-table').data('processedDataTable').ajax.reload();

	});

});