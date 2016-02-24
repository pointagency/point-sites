$(document).ready(function(){
	$('.lead-status--quick-filter').click(function(){

		var $self = $(this);

		var params = {};

		params.status = $self.data('value');

		$('#lead-status-filter--status').data('selectBox-selectBoxIt').selectOption(params.status);

		$('#lead-status-table').data('reloadParams',params);

		$('#lead-status-filter-form').trigger('ajax-submit');

	});
});