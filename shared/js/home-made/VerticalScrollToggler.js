VerticalScrollTogglerCommon = {};

VerticalScrollTogglerCommon.items = [];

console.log("VerticalScrolLToggler start");

$(window).scroll(function(){

	for (var i=0; i < VerticalScrollTogglerCommon.items.length; i++) {
		VerticalScrollTogglerCommon.items[i].check();
	}

});

VerticalScrollToggler = function(options) {
	var scrollToggler = {};

	scrollToggler.element = $(options.selector);

	scrollToggler.check = function(){
		if(options.on(scrollToggler.element)){

			scrollToggler.element.addClass(options.toggleClass || 'active');

		} else if(options.off) {

			if(options.off(scrollToggler.element)) {
				scrollToggler.element.removeClass(options.toggleClass || 'active');
			}
		}
	};

	VerticalScrollTogglerCommon.items.push(scrollToggler);

	return scrollToggler;
}

