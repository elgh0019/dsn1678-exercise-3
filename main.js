var salesLeft = $('.sales-left');
var detailsLeft = $('details-left');

var salesLeftClickHandler = function () {
	var currentState = detailsLeft.attr('data-state');
	
	if (currentState == 'active') {
		detailsLeft.attr('data-state','inactive'); 
	} else {
		detailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', salesLeftClickHandler);