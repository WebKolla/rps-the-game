var isComputer = getQueryStringValue("isComp");
var cpuResult = document.getElementById("cpuResult");
var msgHeading = document.getElementById("msgHeading");
var choices = ["Rock", "Paper", "Scissors"];
var cpuChoice;

if(isComputer){
  btnVisibility();
}else{
  var userInput = "";
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
