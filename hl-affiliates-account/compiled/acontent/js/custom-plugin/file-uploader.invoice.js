$(document).ready(function(){

	$('#invoice-uploader').fileUploaderize({
		onCompleteCallback: function() {
			console.log('Custom callback for onComplete on #invoice-uploader called');
		}
	});

});