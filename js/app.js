$(document).ready(function(){
	var input = parseInt(prompt("Please enter a number in the box below"));
	if (isNaN(input)) {
		alert("Not a number!");
	}
	for (var i = 1; i <= input; i++) {
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