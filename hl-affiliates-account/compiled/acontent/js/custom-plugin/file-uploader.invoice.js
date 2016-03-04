$(document).ready(function(){

	$('#invoice-uploader').fileUploaderize({
		onCompleteCallback: function() {
			console.log('Custom callback for onComplete on #invoice-uploader called');
		},
		onFileDropCallback: function() {
			$('#submit-invoice-table_wrapper .dataTables_scrollBody').css({
				height: $('#invoice-uploader').outerHeight(),
				maxHeight: $('#invoice-uploader').outerHeight()
			});
		},
		onDeleteCallback: function() {
			$('#submit-invoice-table_wrapper .dataTables_scrollBody').css({
				height: $('#invoice-uploader').outerHeight(),
				maxHeight: $('#invoice-uploader').outerHeight()
			});
		}
	});

});