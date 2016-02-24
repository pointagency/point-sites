(function( $ ){
  $.fn.typeSelect = function(o) {
  
  	var options = {
  		
  	};

  	jQuery.extend(options, o);


  	/*
  	*
  	*	Setup table for each matching dom element
	*
  	*/


  	$(this).each(function(){

  		var $self = $(this),
  			placeholder = $self.data('placeholder');

  		var defaultOptions = options;

  		if(placeholder!='' && placeholder != undefined) {
  			defaultOptions.placeholder = placeholder;
  		}


  		$self.select2(defaultOptions);



  	});

  }
})(jQuery);