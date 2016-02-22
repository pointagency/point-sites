$(document).ready(function(){
	$('a.bannerOption').on('click',function(e){
		e.preventDefault();
		$(this).next('.subCodeDiv').show();
	});

	$('.applySubCode').on('click',function(e){				
		var subCodeText =  $(this).siblings('input.subCodeText').val();			
		var textarea = $($(this).data('target'));
		var textareaPrototype = textarea.data('prototype');
		var landingPageUrl = $('#landing-page-select').val();
		href = '';
		if(subCodeText != '') {
			href = "&amp;chan="+subCodeText;
		}

		var newBannerCode = textareaPrototype.replace('SUBCODE',href).replace('LANDINGPAGE',landingPageUrl)
		textarea.val(newBannerCode);	

		$('#get-code-modal--banner-preview').empty().append($(newBannerCode));

		// $(this).parent('div').hide();	
		// $(this).siblings('input.subCodeText').val('');	
	});

	message = '<div class="highlow message-wrapper">'+
	'<div class="message">'+
	'Banner code has been copied to clipboard'+
	'</div>'+
	'<div class="close">'+
	'</div>'+
	'</div>';

	

	$('.message-wrapper .close').click(function(){
		$('.message-wrapper').removeClass('display').removeClass('fail').removeClass('success').removeClass('alert').removeClass('generic').removeClass('warning');
	});	

	//new banner item code

	$('body').on('click','.banner--view-code',function(){
		var $self = $(this),
			$bannerItem = $($self.closest('.banner--item').length>0?$self.closest('.banner--item'):$self);

		var bannerName = $bannerItem.data('name'),
			bannerFormat = $bannerItem.data('format'),
			bannerTarget = $bannerItem.data('target'),
			bannerTargetName = $bannerItem.data('targetName'),
			bannerTargetPreview = $bannerItem.data('targetPreview'),
			bannerCampaignName = $bannerItem.data('campaignName'),
			bannerCode = $bannerItem.data('code'),
			bannerLayout = $bannerItem.data('width')<=320?'horizontal':'vertical',
			bannerLandingPageUrl = $bannerItem.data('target'),
			bannerFavourite = $bannerItem.find('.banner--details--favourite--checkbox').is(':checked');

		console.log(bannerFavourite);
		
		$('#get-code-modal--banner-details--dimensions').html($bannerItem.data('width')+'x'+$bannerItem.data('height'));
		$('#get-code-modal--banner-details--name').html(bannerName);
		$('#get-code-modal--banner-details--format').html(bannerFormat);
		$('#get-code-modal--banner-details--code').data('prototype',bannerCode);
		$('#get-code-modal--banner-details--code').val(bannerCode.replace('SUBCODE','').replace('LANDINGPAGE',bannerLandingPageUrl));
		$('#get-code-modal--banner-preview').empty().append($(bannerCode.replace('SUBCODE','').replace('LANDINGPAGE',bannerLandingPageUrl)));
		$('#get-code-modal--layout').removeClass().addClass(bannerLayout);

		var currentTargetItem  = $('#banner--details--landing-page-selector--current-url');

		currentTargetItem.data('name',bannerTargetName);
		currentTargetItem.data('previewUrl',bannerTargetPreview);
		currentTargetItem.data('lpUrl',bannerTarget);
		currentTargetItem.html(bannerTarget);



		$('#get-code-modal--banner-details--favourite').prop('checked',bannerFavourite);

		$('#get-code-modal').modal('show');
	});

	$('#landing-page-select').change(function(){
		var self = $(this),
			newLandingPageUrl = self.val(),
			prototype = $('#get-code-modal--banner-details--code').data('prototype');

		newBannerCode = prototype.replace('SUBCODE','&amp;chan='+$('#banner-sub-code').val()).replace('LANDINGPAGE',newLandingPageUrl);

		$('#get-code-modal--banner-details--code').val(newBannerCode);
		$('#get-code-modal--banner-preview').empty().append($(newBannerCode));

	});


	$('.banner--details--landing-page-selector--landing-page-list').on('click','.banner--details--landing-page-selector--landing-page--item',function(){

		var self = $(this),
			newLandingPageUrl = self.data('lpUrl'),
			prototype = $('#get-code-modal--banner-details--code').data('prototype');

		newBannerCode = prototype.replace('SUBCODE','&amp;chan='+$('#banner-sub-code').val()).replace('LANDINGPAGE',newLandingPageUrl);

		$('#get-code-modal--banner-details--code').val(newBannerCode);
		$('#get-code-modal--banner-preview').empty().append($(newBannerCode));

	});

	//banner filter code

	$('.banners--filter .banners--filter--toggle').change(function(){
		var $self = $(this),
			$filter = $($self.closest('.banners--filter')),
			$filterOptions = $($filter.find('.banners-filter-option'));
		if($self.is(':checked') == true) {
			$filter.addClass('active');
			$filterOptions.slideDown(125);
		} else {

			$filter.removeClass('active');
			$($filterOptions.find('input[type="checkbox"]')).prop("checked", false);

			$filterOptions.slideUp(125);
		}
	});

	// check if filter already checked

	$('.banners--filter .banners--filter--toggle').each(function(){
		var $self = $(this),
			$filter = $($self.closest('.banners--filter')),
			$filterOptions = $($filter.find('.banners-filter-option'));
		if($self.is(':checked') == true) {
			$filter.addClass('active');
			$filterOptions.slideDown(125);
		} else {

			$filter.removeClass('active');
			$($filterOptions.find('input[type="checkbox"]')).prop("checked", false);

			$filterOptions.slideUp(125);
		}
	});

	// "All" option for filters

	$('.banners--filter .check-all').change(function(){
		var $self = $(this),
			$filter = $($self.closest('.banners--filter')),
			$filterOptions = $($filter.find('.banners-filter-option'));

		if($self.is(':checked') == true) {
			
			$($filterOptions.find('input[type="checkbox"]')).not('.check-all').prop("checked", true);

		} else {
			$($filterOptions.find('input[type="checkbox"]')).not('.check-all').prop("checked", false);
		}
	});

	$('.banners--filter .banners-filter-option input[type="checkbox"]').not('.check-all').change(function(){

		var $self = $(this),
			$filter = $($self.closest('.banners--filter')),
			$filterAll = $($filter.find('.check-all'));


		if($self.is(':checked') == true) {

		} else {
			$filterAll.prop("checked", false);
		}

		
	});

	// banner sort 

	$('.banners--sort label').click(function(){
		var $self = $(this),
			$options = $self.siblings('.banners--sort--options');

		$options.slideToggle(125);
	});

	$('.banners--sort--options .clear').click(function(){

		var $self = $(this),
			$options = $self.closest('.banners--sort--options');

		$($options.find('input[type="checkbox"]')).prop("checked", false);
	});

	$('body').click(function(e){

		if($(e.target).closest('.banners--sort').length<=0) {
			$('.banners--sort--options').slideUp(125);
		}
	});

	// banner landing page selector

	$('.banner--details--target-link-selector').selectBoxIt();

});