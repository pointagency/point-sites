console.log('TypeWriter');

TypeWriter = function(options) {
	var typeWriterElements = $(".type-writer");

	if(typeWriterElements.length > 0) {
		typeWriterElements.each(function(){
			var self = $(this),
				$display = $(self.find('.type-writer-content')),
				$sizeDisplay = $(self.find('.type-writer-content-sizer')),
				typeDelay = self.data('typeWriterDelay') || 75,
				typeInterval = self.data('typeWriterInterval') || 5000;

			var strings = (self.data('typeWriterContent'));

			// console.log(typeDelay);

			// console.log(strings);

			var typeTimeout = {};

			function typeString(s) {

				var string = strings[s];

				function start(c) {

					$display.html(string.substring(0,c));

					if(c<string.length) {
						typeTimeout = setTimeout(function(){
							start(c+1);
						},typeDelay);	
					} else {

						if(s<strings.length-1) {
							s = s+1;
						} else {
							s = 0;
						}

						if(strings.length>1) {
							typeTimeout = setTimeout(function(){
								$display.animate({
									opacity: 0
								},250,function(){
									$display.html('');
									$display.css({
										opacity: 1
									});
									typeString(s);
								});
								
							},typeInterval);
						} else {
							options.callback();
						}
					}
				}



				$sizeDisplay.html(string);
				$display.css({
					width: $sizeDisplay.outerWidth()*1.025
				});

				
				setTimeout(function(){

					start(1);

				},500);
				
				
			}

			if(options.delay) {
				setTimeout(function(){
					typeString(0);
				},options.delay);
			} else {
				typeString(0);
			}

			console.log('start typing');

			$(window).resize(function(){
				$display.css({
					width: $sizeDisplay.outerWidth()*1.025
				});
			});

		});
	}
}