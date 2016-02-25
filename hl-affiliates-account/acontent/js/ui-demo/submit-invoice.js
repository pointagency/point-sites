$(document).ready(function() {	

	$('#submit-invoice-table').tablize({
		rowCallback : function(row, data, index) {

			console.log(data);

			if(data.status==2) {
				console.log(row);
				row.className = 'disabled';

				$($(row).find(' td.payment-status')).append($('<span class="payment-item-action">(cancel)</span>'));
			}

			if(data.status==3) {
				$($(row).find(' td.payment-status')).append($('<span class="payment-item-action" data-toggle="tooltip" data-placement="top" title="Lorem ipsum dolor sit amet.">(info)</span>'));
			}
		}
	});


	$('#submit-invoice-table').on('click','td',function(){
		var $self = $(this),
			$row = $($self.closest('tr:not(.disabled)')),
			$input = $($row.find('input[type="checkbox"]'));

		if($input.is(':checked')) {
			$input.prop('checked',false);
		} else {
			$input.prop('checked',true);
		}

		

	});
		
});