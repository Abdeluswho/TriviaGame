//Trivia Game------------------------
//variables
var questions = [];
var answers = [];
var correct = 0;
var wrong = 0;
var t = 30;


$(document).ready(function(){

//style

	$('.container').css({"background-color": 'lightgrey', 'padding': '20px',
						 'text-align': 'center', 'border': '2px solid black'});
	
//start button------------------------------
	$('#btn').click(function(){

//Time remaining-----------
		function timer(){
			t--
			console.log(t);
		};
		setInterval(timer,1000);
		timer();
		

	})





})
