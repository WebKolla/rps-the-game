var isComputer = getQueryStringValue("isComp");
var resultContainer = document.getElementById("resultContainer");
var msgContainer = document.getElementById("msgContainer");
var choices = ["Rock", "Paper", "Scissors"];
var autoChoice;

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
