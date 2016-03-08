$(document).ready(function() {	

	var submitInvoiceTableRowProcessor = function(row, data, index) {

			console.log(data);

			if(data.status==2) {
				console.log(row);
				row.className = 'disabled';

				$($(row).find(' td.payment-status')).append($('<span class="payment-item-action payment-item-action--cancel">(cancel)</span>'));
			}

			if(data.status==3) {
				$($(row).find(' td.payment-status')).append($('<span class="payment-item-action" data-toggle="tooltip" data-placement="top" title="Lorem ipsum dolor sit amet.">(info)</span>'));
			}
		}

	


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

	$('#submit-invoice-table').on('click','.payment-item-action--cancel',function(e){

		var $self = $(this),
			$row = $($self.closest('tr')),
			$input = $($row.find('input[type="checkbox"]'));

		$row.removeClass('disabled');

		$($row.find('span.payment-status')).html('Outstanding');

		$($row.find('.dot')).removeClass('submitted').addClass('outstanding');

		$($row.find('.payment-select')).removeClass('checked disabled');

		$self.remove();

		$input.removeAttr('disabled');

		$input.removeAttr('checked');

		$input.prop('checked',false);

		e.stopPropagation();

	});

	// sizing invoice uploader
	var $invoiceUploaderHeight = 0;
	var resizeInvoiceUploader = function() {
		var $invoiceUploader = $('#invoice-uploader');
	
		var minHeight = 320;

	 	$invoiceUploaderHeight = $(window).height() - $('nav').outerHeight() - 100;

		if($invoiceUploaderHeight<minHeight) {
			$invoiceUploaderHeight = minHeight;
		}

		$invoiceUploader.animate({
			height: $invoiceUploaderHeight
		});

		$('#submit-invoice-table_wrapper .dataTables_scrollBody').css({
			height: $invoiceUploaderHeight,
			maxHeight: $invoiceUploaderHeight
		});
	}

	resizeInvoiceUploader();

	$('#submit-invoice-table').tablize({
		rowRendered : submitInvoiceTableRowProcessor,
		scrollY: $invoiceUploaderHeight,
		scrollCollapse: true
	});

	$(window).resize(function(){
		resizeInvoiceUploader();
	})

		
});