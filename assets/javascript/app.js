//Trivia Game------------------------
//variables
var questions = ['Which is the only American state to begin with the letter "p"?', "Name the world's biggest island?",
				"What is the world's longest river?", "Name the world's largest ocean?", 
				"What is the diameter of Earth?", "What is the capital city of Spain?" ];
var answers = ["Pennsylvania", "Greenland", "Amazon", "Pacific", "8,000 miles", "Madrid"];
var correct = 0;
var wrong = 0;
var t = 30;



$(document).ready(function(){

//style

	$('.container').css({"background-color": 'lightgrey', 'padding': '20px',
						 'text-align': 'center', 'border': '2px solid black'});
	
//start button------------------------------
	$('#btn').click(function(){

		$('#btn').hide();
		
		//Time remaining-----------
		function timer(){
			t--
			console.log(t);
			var $time = $("<h2>Remaining Time: " +t+ " </h2> ");
				$("#quiz").html($time);
		};
		
		timer();
		setInterval(timer,1000);
		
		
		

		

		

	})





})
