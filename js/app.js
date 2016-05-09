$(document).ready(function(){
	function getInput(){
		var input = prompt("Please enter a number in the box below");
		if (input === null) {
			console.log("cancel");
			return;
		} else if (isNaN(input)) {
			alert("Not a number!");
			getInput();
			console.log("notANumber");
		} else { 
			fizzBuzz(input);
			console.log("fizzBuzzInput");
		}
	}
	function fizzBuzz(input){ 
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
	}
	getInput();
});