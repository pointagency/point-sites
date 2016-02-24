$(document).ready(function(){
	$('.commission-history--quick-filter').click(function(){

		var $self = $(this);

		var params = {};

		params.paid = $self.data('value');

		$('#commission-history-filter--paid').data('selectBox-selectBoxIt').selectOption(params.paid);

		$('#commission-history-table').data('reloadParams',params);

		$('#commission-history-filter-form').trigger('ajax-submit');

	});
});