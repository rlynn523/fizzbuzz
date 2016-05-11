$(document).ready(function(){
	function getInput(){
		var input = prompt("Please enter a number in the box below");
		if (input === null) {
			return;
		} else if (isNaN(input)) {
			alert("Not a number!");
			getInput();
		} else { 
			fizzBuzz(input);
		}
	}
	function appBuzz(output) {
		$('.fizzbuzz').append(a);
	}
	function fizzBuzz(input){ 
		for (var i = 1; i <= input; i++) {
			var output = ['<li> fizzbuzz </li>','<li> fizz </li>', '<li> buzz </li>','<li> '+i+' </li>']
			if ((i % 3 === 0 && i % 5 === 0)) {
				appBuzz(a=output[0]);
			} else if (i % 3 === 0) { 
				appBuzz(a=output[1]);
			} else if (i % 5 === 0) {
				appBuzz(a=output[2]);
			} else {
				appBuzz(a=output[3]);
			}
		}
	}
	getInput();
});