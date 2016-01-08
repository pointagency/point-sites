$(document).ready(function(){           	    
	$("#createdat_from, #createdat_to, #saleson_from, #saleson_to").datetimepicker({
		dateFormat: "yy/mm/dd",
		timeFormat: 'HH:mm',
		beforeShow: function(input, inst)
	    {            
			inst.dpDiv.css({marginLeft: input.offsetWidth + 'px'});
	    }
	});
});

