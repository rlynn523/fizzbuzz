$(document).ready(function(){
	for (var i = 1; i < 101; i++) {
		console.log(i)
		$('.fizzbuzz').append('<li> '+i+' </li>'); {
			if ((i % 3 === 0 && i % 5 === 0)) {
				console.log('fizzbuzz');
			}
			else if ( i % 3 === 0) { 
				console.log('fizz');
			}
			else if ((i % 5 === 0)) {
				console.log('buzz');
			}
		}
	}
});
	
