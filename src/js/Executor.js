var userInput = "";
var rockButton = document.getElementById("Rock");
var paperButton = document.getElementById("Paper");
var scissorsButton = document.getElementById("Scissors");

var cpuResult = document.getElementById("cpuResult"),
    msgHeading = document.getElementById("msgHeading"),
    randomize = Math.random() * 100,
    cpuChoice;
var choices = ["Rock", "Paper", "Scissors"];

init();

function init(){
    rockButton.addEventListener("click", selectInput, false);
    paperButton.addEventListener("click", selectInput, false);
    scissorsButton.addEventListener("click", selectInput, false);
}


function selectInput(el){
    generateResults(this.id, false)
}
