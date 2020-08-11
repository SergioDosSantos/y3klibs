$(document).ready(function() {
	$(".numberIntegerOnly").keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
		}
		else {
			if ((event.keyCode < 48 || event.keyCode > 57 ) && !(event.keyCode >= 96 && event.keyCode <= 105) ) {
				event.preventDefault();	
			}	
		}
	});
});

$(document).ready(function() {
	$(".numberDecimalOnly").keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 45 ) {
		}
		else {
			if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 190 && event.keyCode != 144 && !(event.keyCode >= 96 && event.keyCode <= 105) && event.keyCode != 110) {
				event.preventDefault();	
			}	
		}
	});
});

$(document).ready(function() {
    Highcharts.setOptions({
    	colors: ['#ebe0d5','#ffaf8e','#ff687d','#ce6686','#b767b7','#715a7f','#5accc3','#00aea5','#009bdf','#245e81','#31445a','#282d38']
    });
});

function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length-size);
}
