var ImageContainerFadeIn = function(){

	var $elements = $('.p-image-container-fade-in');

	if($elements.length>0) {
		console.log("init image loader");


		$('.p-image-container-fade-in').each(function(){
			var self = $(this);
			imagesLoaded(self,function(){
				self.addClass('images-loaded');
			});
		});
		
	}
}