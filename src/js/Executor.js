var isComputer = getQueryStringValue("isComp");
var resultContainer = document.getElementById("resultContainer");
var msgContainer = document.getElementById("msgContainer");
var computerScoreUpdate = document.getElementById("computerScore");
var userScoreUpdate = document.getElementById("userScore");
var choices = ["Rock", "Paper", "Scissors"];
var autoChoice;
var userScore = 0;
var computerScore = 0;

computerScoreUpdate.innerHTML = "0";
userScoreUpdate.innerHTML = "0";

if(isComputer){
  btnVisibility();
}else{
  var uInput = "";
  var rockButton = document.getElementById("Rock");
  var paperButton = document.getElementById("Paper");
  var scissorsButton = document.getElementById("Scissors");
  rockButton.addEventListener("click", selectInput, false);
  paperButton.addEventListener("click", selectInput, false);
  scissorsButton.addEventListener("click", selectInput, false);
}

function btnVisibility(){
   document.getElementById("btnContainer").style.display = "none";
   generateResults(null, isComputer);
}

function selectInput(){
  generateResults(this.id, isComputer);
}
