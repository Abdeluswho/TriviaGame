//Trivia Game------------------------
//variables
var questions = [{
	question:'Which is the only American state to begin with the letter "p"?',
	choice:["Pennsylvania", "Panama", "Puerto rico", "Peru"],
	correct:0
}, {
	question:"Name the world's biggest island?",
	choice:["Hawai", "Angel island", "Greenland", "None!"],
	correct:2
},  {
	question:"What is the world's longest river?",
	choice:["Panama river", "Amazon", "Harbor", "Rusian river"],
	correct:1
},  {
	question:"Name the world's largest ocean?",
	choice:["Pacific", "Atlantic", "Mediteranean", "Arctic"],
	correct:0
},  {
	question:"What is the diameter of Earth?",
	choice:["9,000 miles", "6,000 miles", "10,000 miles", "8,000 miles"],
	correct:3
},  {
	question:"What is the capital city of Spain?",
	choice:["Madrid", "Barcalona", "Benidorme", "Valencia"],
	correct:0
}]

var right = 0;
var wrong = 0;
var t = 30;
var timeID;
var current = 0;
var currentObject = [];
var logic = false; 
var txt;


$(document).ready(function(){

//styling

	$('.container').css({"background-color": 'lightgrey', 'padding': '20px',
						 'text-align': 'center','opacity': '0.9', 'border': '2px solid black',
						 'height': '660px', 'width': '60%', 'margin': '0 auto'});
	$('body').css({"background-image": "url(assets/images/free_datawall_stage_background_by_mkrukowski-d41l75c.jpg)"})


//start button------------------------------
	$('#btn').click(function(){

		$('#btn').hide();
		timer();
		timeID = setInterval(timer,1000);
		buildquiz();	
	})

//timer-------------  - - - - - - - - - - -- -------
	function timer(){
		if (t!== 0) {
			t--
			var $time = $("<h2>Remaining Time 00:" +t+ " </h2> ");
				$("#time").html($time);	
		}else {
			if (current <= 5) {
				$time = $("<h2>Time over 00:00 </h2> ");
				$("#time").html($time);	
				gameover();
			}else{
				$time = $("<h2>Quiz is over!</h2> ");
				$("#time").append($time);	
				gameover();
			}
			
		}
			
	};


		
//Building the Quiz------- - - - - - -- - - - -  -- -- 
	function buildquiz(){

		$('#quiz').empty();
		var quest = $("<h3>");
		 currentObject = questions[current]
		quest.text(currentObject.question);
		var div = $('<div>').attr('id', 'Q');
		$('#quiz').append(div);
		$("#Q").append(quest);
		var div2 = $('<div>').attr('id', 'A');
			$('#quiz').append(div2);

		for (var i = 0; i < currentObject.choice.length; i++) {		
			var choices = $('<p>');
			choices.text(currentObject.choice[i])
			$("#A").append(choices);
		};
		$("#A").css({'padding': '15px', 'width': '30%', 'margin': '0 auto'});

		$('#A p').on({

				mouseover: function() {
							$(this).css({backgroundColor: "lightblue", fontSize: "20px",
										border: '1px solid black'})
				    	},
				mouseout: function() {
							$(this).css({backgroundColor: "", fontSize: "", border: ''})
						},
				click: function() {


						if ($(this).text()=== currentObject.choice[currentObject.correct]) {

							console.log('bravo');
							$(this).css({color: "green"});
							logic = true;
							setTimeout(next, 2000);
							
						}else {
							$(this).css({color: "red"});
							 txt = currentObject.choice[currentObject.correct];
							logic = false;	
							setTimeout(next, 2000);
						}				
		}

		});
	}

//next question - - - - - -- - - -- - -- -  - - --
	function next(){
		if (logic) {
			$('#quiz').empty();
			right++
			$('#quiz').html('<h4>Bravo! You are doing great!</h4>');
			var img = $('<img>').attr("src", "assets/images/tenor.gif");
			$('#quiz').append(img);

		} else{
			$('#quiz').empty();
			wrong++
			$('#quiz').html('<h3>Nope!! the correct answer was: '+txt+'. Try the next one..</h3>');
			var img = $('<img>').attr("src", "assets/images/strange-albert-einstein.jpg");
			$('#quiz').append(img);
		}
		if (current <= 4) {
			current++
			setTimeout(buildquiz, 4000);
			t = 34;
		}else {
			gameover();
		}
		
	}

//gameover ------//third page set-up - - -- - - -- - - ----   - ----
	function gameover(){
		$('#quiz').empty();
		clearInterval(timeID);
			
		$('#quiz').append('<h4>That was FUN!</h4>');
		$('#quiz').append('<h3> Correct answers: '+right+'<br><br> Wrong answers: '+ wrong +' </h3>')
		var img = $('<img>').attr("src", "assets/images/0ad17914a177e96ea4bf9cdbaa42912f.gif");
		$('#quiz').append(img);
		var $btn = $('<button>').attr('id', 'ko').text("Start Over").css({padding: '10px', width: '150px', border: '1px solid black'});
		$('#time').prepend($btn);
//game over button- - - - - - - - --
		$('#ko').on('click', function(){
			$('#ko').hide();
			reset();
			
		})

	}
//reset--------------
	function reset(){
		right = 0;
		wrong = 0;
		t = 30;
		current = 0;
		timer()
		timeID = setInterval(timer,1000);
		buildquiz();
	}

	



	
	






})
