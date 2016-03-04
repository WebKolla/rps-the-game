/**
 * Created by lv27693 on 03/03/2016.
 */

var userInput = "";
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

var cpuResult = document.getElementById("cpuResult"),
    msgHeading = document.getElementById("msgHeading"),
    randomize = Math.random() * 100,
    cpuChoice;

window.onload = init;


function init(){
    rockButton.addEventListener("click", selectInput("Rock"), false);
    paperButton.addEventListener("click", selectInput("Paper"), false);
    scissorsButton.addEventListener("click", selectInput("Scissors"), false);
}


function selectInput(input){
    userInput = input;
    generateResults()
}


function generateResults(){
    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        if (randomize > 0 && randomize < 33) {
            cpuChoice = "Rock";
        } else if(randomize >=34 && randomize < 66) {
            cpuChoice = "Paper";
        } else {
            cpuChoice = "Scissors";
        }

        cpuResult.innerHTML = cpuChoice;

        if (userInput === cpuChoice) {
            msgHeading.innerHTML = "It's a Tie. Try Again!";
        }

        if (userInput === "Rock" && cpuChoice === "Paper") {
            msgHeading.innerHTML = "Paper covers Rock. You Loose!";
        } else if (userInput === "Rock" && cpuChoice === "Scissors") {
            msgHeading.innerHTML = "Rock crushes scissors. You Win!";
            msgHeading.style.color = "green";
        }

        if (userInput === "Paper" && cpuChoice === "Rock") {
            msgHeading.innerHTML = "Paper covers Rock. You Win!";
            msgHeading.style.color = "green";
        } else if (userInput === "Paper" && cpuChoice === "Scissors") {
            msgHeading.innerHTML = "Scissors cut Paper. You Loose!";
        }

        if (userInput === "Scissors" && cpuChoice === "Rock") {
            msgHeading.innerHTML = "Rock crushes Scissors. You Loose!";
        } else if (userInput === "Scissors" && cpuChoice === "Paper") {
            msgHeading.innerHTML = "Scissors cut Paper. You Win!";
            msgHeading.style.color = "green";
        }
    } else {
        msgHeading.style.color = "red";
        msgHeading.innerHTML = "Please enter Rock, Paper or Scissors";
        //return false;
    }
}
