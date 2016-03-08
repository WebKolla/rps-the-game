
function generateResults(id, isComputer){

    if(isComputer){
      userInput = choices[Math.floor(Math.random() * choices.length)];
    }else{
      userInput = id;
    }


    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        if (randomize > 0 && randomize < 33) {
            cpuChoice = "Rock";
        } else if(randomize >=34 && randomize < 66) {
            cpuChoice = "Paper";
        } else {
            cpuChoice = "Scissors";
        }

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
    }
}
