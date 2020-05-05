var rock = 0
var scissors = 1
var paper = 2
var randomNumber = 0
var computer = 0
	var player = 0

function reset1(){
  document.getElementById("reset").reset();
}


function rock1(){
	//rock = true
	randomNumber = getRandomInt(3);
	//google show image using javascript on html
	if(randomNumber == 0){
		document.getElementById("message").innerHTML = ("Try Again");
	} else if(randomNumber == 1){
		document.getElementById("message").innerHTML = ("You beat scissors");
		++player
		keepCount()
	} else{
		document.getElementById("message").innerHTML = ("Paper beats rock");
		++computer
		keepCount()
	}
}

function scissors1(){
	//scissors = true
	randomNumber = getRandomInt(3);
	//google show image using javascript on html
	if(randomNumber == 1){
		document.getElementById("message").innerHTML = ("Try Again");
	} else if(randomNumber == 2){
		document.getElementById("message").innerHTML = ("You beat paper");
		++player
		keepCount()
	} else{
		document.getElementById("message").innerHTML = ("Rock beats scissors");
		++computer
		keepCount()
	}
}

function paper1(){
	//paper = true
	randomNumber = getRandomInt(3);
	//google show image using javascript on html
	if(randomNumber == 2){
		document.getElementById("message").innerHTML = ("Try Again");
	} else if(randomNumber == 0){
		document.getElementById("message").innerHTML = ("You beat rock");
		++player
		keepCount()
	} else{
		document.getElementById("message").innerHTML = ("Scissors beats paper");
		++computer
		keepCount()
	}
}

function keepCount(){
	
	document.getElementById("player").innerHTML = player;
	document.getElementById("computer").innerHTML = computer;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//to make your game better
//add a reset button
//switch images when a button is selected