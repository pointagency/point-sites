(function( $ ){
  $.fn.overflowClip = function(o) {
  
  	var options = {
  		
  	};

  	jQuery.extend(options, o);


  	/*
  	*
  	*	Setup table for each matching dom element
	*
  	*/


  	$(this).each(function(){

  		var $self = $(this);

      $self.addClass('overflow-clipper');

      var $clippedSpanWrapper = $('<span class="overflow-clipper--wrapper"></span>'),
          $clippedSpan = $('<span class="overflow-clipper--clipped">'+$self.html()+'</span>'),
          $fullSpan = $('<span class="overflow-clipper--full">'+$self.html()+'</span>');

      $self.empty();
      $self.append('<span class="overflow-clipper--hover-spacer"></span>');
      
      $clippedSpanWrapper.append($clippedSpan);
      $self.append($clippedSpanWrapper);
      $self.append($fullSpan);


      function isOverflow() {

        if($clippedSpan.outerWidth()>$self.width()) {
          return true;
        } 

        return false;
      }

      function overflowCheck() {
        if(isOverflow()) {
          $self.addClass('overflowing');
        } else {
          $self.removeClass('overflowing');
        }
      }

      $(window).resize(function(){

        overflowCheck();

      });

      overflowCheck();

  	});

  }
})(jQuery);


$(document).ready(function(){
  $('.overflow-clipper').overflowClip();
});