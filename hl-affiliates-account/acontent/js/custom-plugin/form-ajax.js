$(document).ready(function(){

	$('.form-ajax').each(function(){

		var $self = $(this);


		$self.on('click','.form-ajax--submit',function(){

			console.log('subscribe to event \'ajax-submit\' to handle this form: #'+$self.attr('id'));

			$self.trigger('ajax-submit');

		});

	});

});