$(document).ready(function(){

	$('#lead-status-filter-form').on('ajax-submit',function(){

		console.log('reload #lead-status-table');

		var params = {};

		params.status = $('#lead-status-filter--status').val();
		params.from = $('*[name="daterangepicker_start"]').val() || '2014-01-01',
  		params.to = $(' *[name="daterangepicker_end').val();

		$('#lead-status-table').data('reloadParams',params);

		$('#lead-status-table').data('processedDataTable').ajax.reload();

	});


	$('#lead-status-filter--banner').typeSelect();

});