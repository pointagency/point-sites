(function( $ ){
  $.fn.tablize = function(o) {
  
  	var options = {
  		serverSide: true,
  		processing: true,
  		pagingType: 'simple_numbers',
  		searching: false,
  		ordering: true,
  		autoWidth: false,
  		deferRender: true,
  		info: false,
  		aaSorting: [[0]],
  		responsive: true,
  		lengthChange: false
  	};

  	jQuery.extend(options, o);

  	/*
  	*
  	*	Setup table for each matching dom element
	*
  	*/

  	$(this).each(function(){

  		var $self = $(this),
  			dataProperty = $self.data('dataProperty'),
  			countProperty = $self.data('countProperty'),
  			pageCountProperty = $self.data('pageCountProperty'),
  			filteredCountProperty = $self.data('filteredCountProperty'),
  			filterContainer = $self.data('filterContainer'),
  			src = $self.data('src');


  		/**** Setup this aprticular dom element's options ****/


  		var thisOptions = {};

  		jQuery.extend(thisOptions, options);

  		console.log('initing table #'+$self.attr('id')+' with following paramters: ');
  		console.log(thisOptions);


  		/**** simple value options ****/

  		thisOptions.pageLength  = parseInt($self.data('pageLength'));
  		thisOptions.ordering = !$self.data('disableOrder');
  		thisOptions.paging = $self.data('paging');
  		// thisOptions.responsive = $self.data('responsive');


  		if($self.data('scrollY')) {
  			thisOptions.scrollY = $self.data('scrollY');
  			thisOptions.scrollCollapse = true;
  		}

  		if($self.data('defaultOrder')) {
  			thisOptions.aaSorting = $self.data('defaultOrder');
  		}

  		thisOptions.language = {
  			"paginate": {
		      "next" : "<span class=\"icon right-grey-small-2x\"></span>",
		      "previous" : "<span class=\"icon left-grey-small-2x\"></span>",
		      "first" : ""
		    },
		    "zeroRecords": $self.data('noDataMessage'),
			"emptyTable": $self.data('noDataMessage'),
		    "processing" : "<span class=\"loading\">loading&nbsp;&nbsp;<img src=\""+$self.data('assetUrl')+"/loading-lighter.gif\" alt=\"Loading\"/></span>",
		    "loadingRecords" : "<span class=\"loading\">loading&nbsp;&nbsp;<img src=\""+$self.data('assetUrl')+"/loading-lighter.gif\" alt=\"Loading\"/></span>"
  		}


  		/**** Ajax handling to load data ****/

  		thisOptions.ajax = function (data, callback, settings) {

  			var params = $self.data('reloadParams');


  			params = jQuery.extend(params,{
  				timezone : jstz.determine().name(),
				sortColumn : columns[settings.aaSorting[0][0]].sortField,
				sortDirection: settings.aaSorting[0][1]
  			});

  			console.log('reload '+$self.attr('id')+' with params: ');
  			console.log(params);

  			var returnedData = {};

  			$.get(src, params, function(response) {

  				var response = JSON.parse(response)[0];

  				returnedData.data = response[dataProperty];

  				returnedData.recordsTotal = response[countProperty];

  				returnedData.recordsFiltered = response[filteredCountProperty];

  				var page = parseInt(response[pageCountProperty]);

  				$($self.data('countDisplay')).html('('+((page-1)*thisOptions.pageLength+1)+' - '+((page-1)*thisOptions.pageLength+returnedData.data.length)+' of '+response[countProperty]+')');

  				callback(returnedData);

  			});

  		}

  		/**** options for each specific columns ****/

  		var $columns = $($self.find('thead tr th'));

  		var columns = [];

  		$columns.each(function(){
  			var $col = $(this),
  			prefix = $col.data('prefix'),
			suffix = $col.data('suffix'),
			colType = $col.data('type'),
			decimal = $col.data('decimal'),
			format = $col.data('format'),
			template = $col.data('template'),
			templateMap = $col.data('templateMap'),
			keyMap = $col.data('map'),
			disableOrdering = $col.data('disableOrder'),
			empty = $col.data('empty');

			columns[$col.index()] = {
				className: $col.attr('class'),
				mData: $col.data('propertyName'),
				sortField: $col.data('propertyName'),
				render : {
					display: function(data, type, full, meta) {

						var returnString = data;

						/*** render template ***/

						if(template) {

							returnString = template;

							var placeholders = template.match(/\{([^}]+)\}/g);

							for(var i=0; i<placeholders.length; i++) {

								var placeholder = placeholders[i],
									propertyName = placeholder.replace(/\{/g,'').replace(/\}/g,''),
									value = full[propertyName];

								var regex = new RegExp(placeholder,"g");


								if(templateMap) {

									value = templateMap[propertyName][value] || templateMap[propertyName]['else'];

								}

								returnString = returnString.replace(regex,value);

							}

						} else {
							if(colType == 'icon') {
								returnString =  "<span class='icon "+data+"'></span>";
								return returnString;
							}

							if(colType == 'prefix-icon') {
								returnString = "<span class='icon "+full[$col.data('prefixIconProperty')]+"'></span> "+data;
							}

							if(decimal>0) {
								returnString = parseFloat(returnString).toFixed(decimal);
							}

							if(colType == 'money') {
								returnString = point.utils.getDisplayMoney(returnString);
							}

							if(colType == 'date') {

								if(data!='' && data!=undefined) {
									returnString = moment(data).format(format);  
								} else {
									returnString = '-';
								}
							}

							if(colType == 'map') {

								returnString = keyMap[data] || keyMap['else'];
							}
								
							returnString = (prefix||"") + returnString + (suffix || "");

							if(returnString=='') {
								returnString = empty || '-';
							}
							
						}
						
						return returnString;
					}
				},
				orderable: !disableOrdering
			}

  		});

		thisOptions.columns = columns;

		var processedTable = $self.DataTable(thisOptions);

		$self.data('processedDataTable',processedTable);

  	});

  }
})(jQuery);