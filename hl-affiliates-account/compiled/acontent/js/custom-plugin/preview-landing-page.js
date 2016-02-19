$(document).ready(function(){


	var landingPagePreviewTimeout;

	var $landingPagePreview = $('#landing-page--hover-preview'),
		$landingPagePreviewImg = $('#landing-page--hover-preview--screenshot-img'),
		$landingPagePreviewName = $('#landing-page--hover-preview--name'),
		$landingPagePreviewUrl = $('#landing-page--hover-preview--url'),
		$landingPagePreviewNewTab = $('#landing-page--hover-preview--details--open-in-new-tab');

	


	$('body').on('mouseover','.banner--details--target-link--item',function(e){
		var $self = $(this),
			$parent = $($self.closest('.banner--details--target-link--current'));

		clearTimeout(landingPagePreviewTimeout);

		$landingPagePreview.css({
			left: e.clientX,
			top: e.clientY,
			width: 0,
			height: 0
		});

		$landingPagePreviewImg.attr('src',$self.data('previewUrl'));
		$landingPagePreviewName.html($self.data('name'));
		$landingPagePreviewUrl.html($self.data('lpUrl'));
		$landingPagePreviewNewTab.attr('href',$self.data('lpUrl'));

		console.log($parent.offset().left);
		console.log($parent.offset().top);

		landingPagePreviewTimeout = setTimeout(function(){

			var width = 480;
			height = 400;


			var left = e.clientX + 25,
				top = e.clientY - height;

			if(left+width>$(window).width()) {
				left = $(window).width()-width-25;
			}

			if(top+height>$(window).height()) {
				top = $(window).height()-height-25;
			}

			if(top < 25) {
				top = 25;
			}

			$landingPagePreview.addClass('active');
			$landingPagePreview.css({
				width: width,
				height: height,
				left: left,
				top: top
			});

		},1000);

	});


	$('body').on('mouseleave','.banner--details--target-link--item',function(e){
		clearTimeout(landingPagePreviewTimeout);

		$landingPagePreview.removeClass('active');
	});

	// $('body').on('mouseleave','.banner--details--landing-page-selector',function(){
	// 	var $self = $(this);
			
	// 	$self.removeClass('active');

	// });

	$('body').on('click',function(e){
		if($($(e.target).closest('.banner--details--target-link--current')).length<=0) {
			$('.banner--details--landing-page-selector').removeClass('active');
		}
	});

	$landingPagePreview.mouseenter(function(){
		$landingPagePreview.addClass('active');
	});

	$landingPagePreview.mouseleave(function(){
		clearTimeout(landingPagePreviewTimeout);
		$landingPagePreview.removeClass('active');
	});


	$('.banner--details--target-link--selector').each(function(){
		var $self = $(this),
			$list = $($self.find('.banner--details--landing-page-selector--landing-page-list')),
			$languageFilters = $($self.find('.banner--details--landing-page-selector--filter--language')),
			$menu = $($self.find('.banner--details--landing-page-selector'));

		var landingPages;

		$.get($self.data('url'),function(data){

			var data = JSON.parse(data);

			if(data.length) {

				console.log(data);

				landingPages = data.sort(function(a, b){
					if(a.favourite == b.favourite) {
						return 0;
					}

					if(a.favourite && !b.favourite ) {
						return -1;
					}

					if(!a.favourite && b.favourite) {
						return 1;
					}
				});


				populateList(data)



			}

		});

		$self.click(function(){
			clearTimeout(landingPagePreviewTimeout);

			var $landingPageSelector = $($(this).find('.banner--details--landing-page-selector'));

			$landingPagePreview.removeClass('active');

			var height = 254,
				width = 288;

			$landingPageSelector.addClass('active');

			$landingPageSelector.css({
				height: height,
				width: width
			});

			filter({
				keys: ""
			});
		});

		$languageFilters.click(function(){
			
			var $this = $(this),
				key = $this.data('key');

			filter({
				keys: key
			});

		});

		function populateList(data) {

			$list.empty();

			for(var i=0; i< data.length; i++) {

				var item = data[i];

				var dom = $('<div class="banner--details--landing-page-selector--landing-page--item banner--details--target-link--item '+(item.favourite?'favourite':'')+'">'+
					'<div class="banner--details--landing-page-selector--landing-page--item--url">'+
						item.url+
					'</div>'+
				'</div>');

				$list.append(dom);

				dom.data('lpUrl',item.url);
				dom.data('previewUrl',item.previewUrl);
				dom.data('name',item.name);
				dom.data('favourite',item.favourite);
				dom.data('language',item.language);

			}

		}





		function filter(options) {

			if(!options) {
				populateList(landingPages);
				return;
			}

			var keys = options.keys.split("\\s+");


			if(keys.length==0 || !options || options==undefined) {
				populateList(landingPages);
				return;
			}

			var results = [];

			var language = $($self.find('.banner--details--landing-page-selector--filter--language.active')).data('key');

			for(var i=0; i< landingPages.length; i++) {
				var item = landingPages[i];

				item.score = 0;

				if(language!='') {
					if(item.language!=language) {
						continue;
					}
				}

				for(var k = 0; k < keys.length; k++) {
					var key = keys[k];
					if(item.name.indexOf(key)>=0) {
						item.score++;
					}

					if(item.url.indexOf(key)>=0) {
						item.score++;
					}


					if(item.language.indexOf(key)>=0) {
						item.score++;
					}

				}

				if(item.score>0||(keys.length==0)) {
					if(item.favourite) {
						item.score+=999;
					}
					results.push(item);
				}
			}

			results.sort(function(a, b){
				return b.score - a.score;
			});

			populateList(results);

		}

		var $current = $($self.find('.banner--details--landing-page-selector--current-url')),
			$items = $($self.find('.banner--details--landing-page-selector--landing-page-list')),
			$searchBox = $($self.find('.banner--details--landing-page-selector--filter--search--input'));

		$items.on('click','.banner--details--target-link--item',function(){

			var $this = $(this);

			$current.data('name',$this.data('name'));
			$current.data('previewUrl',$this.data('previewUrl'));
			$current.data('lpUrl',$this.data('lpUrl'));

			$current.html($this.data('lpUrl'));

		});

		$searchBox.keyup(function(){

			console.log($(this).val());

			var keys = $(this).val();

			filter({
				keys : keys
			});

			
		});

		$menu.on('click','.banner--details--landing-page-selector--filter--search--toggler:not(.active)',function(){

			$searchBox.val('');

			filter({
				keys : ''
			});

		});

		$menu.on('click','.banner--details--landing-page-selector--filter--search--toggler.active',function(){

			filter({
				keys : $searchBox.val()
			});

		});

		$('#get-code-modal').on('hidden.bs.modal', function() {

			$searchBox.val('');

			$($self.find('.banner--details--landing-page-selector--filter--search, .banner--details--landing-page-selector--filter--search--toggler')).removeClass('active');

			filter();

		});

	});

	

});