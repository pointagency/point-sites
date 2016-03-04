$(document).ready(function(){

	$('#landing-page-detail-modal').on('hidden.bs.modal',function(){
		$('header').removeClass('bring-to-top');
	});

	$('body').on('click','.landing-page--view-details',function(){
		var $self = $(this),
			$landingPageItem = $self.closest('.landing-page--item');

		var name = $landingPageItem.data('name'),
			url = $landingPageItem.data('url'),
			screenshots = $landingPageItem.data('screenshots'),
			description = $landingPageItem.data('description');

		var $landingPageDetailView = $('#landing-page-detail-modal'),
			$landingPageDetailViewName = $('#landing-page-detail--name'),
			$landingPageDetailViewUrl = $('#landing-page-detail--url'),
			$landingPageDetailViewDescription = $('#landing-page-detail--description'),
			$landingPageDetailViewCarouselInner = $('#landing-page-detail--screenshot-carousel--inner'),
			$landingPageDetailViewCarouselIndicators = $('#landing-page-detail--screenshot-carousel--indicators'),
			$landingPageDetailViewLink = $('#landing-page-detail--open-new-tab');

		if($landingPageDetailView.length<=0) {

			console.warn('You forgot to include landing-page-detail-modal.');

			return;
		}


		$landingPageDetailViewName.html(name);
		$landingPageDetailViewUrl.html(url);
		$landingPageDetailViewDescription.html(description);
		$landingPageDetailViewLink.attr('href',url);

		$landingPageDetailViewCarouselInner.empty();

		$landingPageDetailViewCarouselIndicators.empty();


		for(var i=0; i< screenshots.length; i++) {
			var screenshot = screenshots[i];

			var $screenshotItem = $('<div class="item"><img src="'+screenshot+'"></div>');

			var $indicatorItem = $('<li data-target="#landing-page-detail--screenshot-carousel" data-slide-to="'+i+'"></li>');

			if(i==0) {
				$screenshotItem.addClass('active');
				$indicatorItem.addClass('active');
			}

			$landingPageDetailViewCarouselInner.append($screenshotItem);
			$landingPageDetailViewCarouselIndicators.append($indicatorItem);

		}

		

		$landingPageDetailView.modal('show');
		$('header').addClass('bring-to-top');
		$('.modal-backdrop').addClass('hidden');

	});

});