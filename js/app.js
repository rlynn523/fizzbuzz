$(document).ready(function(){
	for (var i = 1; i < 101; i++) {
		if ((i % 3 === 0 && i % 5 === 0)) {
			$('.fizzbuzz').append('<li> fizzbuzz </li>');
		} else if ( i % 3 === 0) { 
			$('.fizzbuzz').append('<li> fizz </li>');
		} else if (i % 5 === 0) {
			$('.fizzbuzz').append('<li> buzz </li>');
		} else {
			$('.fizzbuzz').append('<li> '+i+' </li>');
		}
	}
});
	
