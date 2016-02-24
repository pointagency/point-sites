$(document).ready(function(){
	$('.banner-performance--quick-filter').click(function(){

		var $self = $(this);

		var params = {};

		params.status = $self.data('value');

		if(params.status=='all' || params.status=='clicked') {
			$('#banner-performance-filter--status--clicked').prop('checked',true);
		}

		if(params.status=='all' || params.status=='traded') {
			$('#banner-performance-filter--status--traded').prop('checked',true);
		}

		if(params.status=='clicked') {
			$('#banner-performance-filter--status--traded').prop('checked',false);
		}

		if(params.status=='traded') {
			$('#banner-performance-filter--status--clicked').prop('checked',false);
		}


		$('#banner-performance-table').data('reloadParams',params);

		$('#banner-performance-filter-form').trigger('ajax-submit');

	});
});