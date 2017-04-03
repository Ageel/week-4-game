// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//SET VARIABLES.
var wins = 0;
var losses = 0;
var userScore= 0;
var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$(".randomNum").html(randomNum);
console.log(randomNum);
console.log(jQuery.type(randomNum));
// var randomNum = $(".randomNum").html(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
var chromium = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
var flower= (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
var square = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
var tear = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  

//CREATE A FUNCTION TO CHECK IF USERSCORE EQUALS OR IS GREATER THAN RANDOM NUMBER.
function checkScore (){
	console.log(jQuery.type(randomNum));
	if (userScore === randomNum) {
   wins ++;
   console.log(wins);
   $(".wins").html("Wins: " + wins);
   // var randomNum = $(".randomNum").html(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
   randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$(".randomNum").html(randomNum);
	chromium = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	flower= (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	square = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	tear = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	userScore= 0;

	}
	else if ( userScore > randomNum){
	losses ++;
	console.log(losses);
	$(".losses").html("Losses: " + losses);
	// var randomNum = $(".randomNum").html(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
	randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$(".randomNum").html(randomNum);
	chromium = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	flower= (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	square = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	tear = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);  
	userScore= 0;
	}
}


$(".chromium").click (function() {
	userScore += chromium;
	$(".userCount").html(userScore);
	console.log(userScore);
	checkScore();
});

$(".flower").click (function() {
	userScore += flower;
	$(".userCount").html(userScore);
	console.log(userScore);
	checkScore();
});

$(".square").click (function() {
	userScore += square;
	$(".userCount").html(userScore);
	console.log(userScore);
	checkScore();
});

$(".tear").click (function() {
	userScore += tear;
	$(".userCount").html(userScore);
	console.log(userScore);
	checkScore();
});




