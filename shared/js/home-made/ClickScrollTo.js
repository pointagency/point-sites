var PClickScrollTo = function() {
	var pClickScrollTo = $('.p-click-scroll-to');

	console.log(pClickScrollTo);

	if(pClickScrollTo.length>0) {
		pClickScrollTo.each(function(){
			var self = $(this);



			self.click(function(){

				var offset = 0;

				if($(window).width>self.data('clickScrollToMinWidthOffset')) {
					$(self.data('clickScrollToOffset')).each(function(){
						offset += $(this).outerHeight();
					});
				}
				

				$('html, body').animate({
					scrollTop: $(self.data('clickScrollToTarget')).offset().top - offset
				},self.data('clickScrollToDuration'))

			});	

		});
	}

	return pClickScrollTo;
}