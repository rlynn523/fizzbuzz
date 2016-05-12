$(document).ready(function(){
	function getInput(){
		var input = parseInt(prompt("Please enter a number in the box below") || 0);
		if (input !== 0) {
			if (isNaN(input)) {
				alert("Not a number!");
				getInput();
			} else {
				fizzBuzz(input);
			}
		}
		return 0;
	}

	function fizzBuzz(input){ 
		for (var i = 1; i <= input; i++) {
			var output = ['fizzbuzz','fizz', 'buzz', i];
			if ((i % 3 === 0 && i % 5 === 0)) {
				output = 'fizzbuzz';
			} else if (i % 3 === 0) { 
				output = 'fizz';
			} else if (i % 5 === 0) {
				output = 'buzz';
			} else {
				output = i;
			}
			$('.fizzbuzz').append('<li>'+ output +'</li>');
		}
	}
	getInput();
});
