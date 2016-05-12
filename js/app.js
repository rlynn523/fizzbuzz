$(document).ready(function(){
	function getInput(){
		var input = parseInt(prompt("Please enter a number in the box below") || 0);
		if (input === 0) {
			console.log('input');
			return;
		} else if (isNaN(input)) {
			alert("Not a number!");
			getInput();
		} else { 
			fizzBuzz(input);
		}
	}
	function appBuzz(output) {
				$('.fizzbuzz').append('<li>'+ output +'</li>');
			}
	function fizzBuzz(input){ 
		for (var i = 1; i <= input; i++) {
			var output = ['fizzbuzz','fizz', 'buzz', i]
			if ((i % 3 === 0 && i % 5 === 0)) {
				appBuzz(output[0]);
			} else if (i % 3 === 0) { 
				appBuzz(output[1]);
			} else if (i % 5 === 0) {
				appBuzz(output[2]);
			} else {
				appBuzz(output[3]);
			}
		}
	}
	getInput();
});