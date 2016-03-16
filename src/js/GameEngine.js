function generateResults(id, isComputer){

    var uInput = currentMode(id, isComputer);
    var player = currentPlayer(isComputer);

    resultContainer.innerHTML = "";
    msgContainer.innerHTML = "";

      if (uInput === "Rock" || uInput === "Paper" || uInput === "Scissors") {
            autoChoice = getautoChoice();
            resultContainer.innerHTML = "Computer chose " + autoChoice + " ";

            if (uInput === autoChoice) {
                msgContainer.innerHTML = "It's a Tie. Try Again!";
            }

            if (uInput === "Rock" && autoChoice === "Paper") {
                msgContainer.innerHTML = "Paper covers Rock. "+ player +" Loose!";
                computerScore++;
                computerScoreUpdate.innerHTML = computerScore;
            } else if (uInput === "Rock" && autoChoice === "Scissors") {
                msgContainer.innerHTML = "Rock breaks scissors. "+ player +" Win!";
                userScore++;
                userScoreUpdate.innerHTML = userScore;
            }

            if (uInput === "Paper" && autoChoice === "Rock") {
                msgContainer.innerHTML = "Paper covers Rock. "+ player +" Win!";
                userScore++;
                userScoreUpdate.innerHTML = userScore;
            } else if (uInput === "Paper" && autoChoice === "Scissors") {
                msgContainer.innerHTML = "Scissors cuts Paper. "+ player +" Loose!";
                computerScore++;
                computerScoreUpdate.innerHTML = computerScore;
            }

            if (uInput === "Scissors" && autoChoice === "Rock") {
                msgContainer.innerHTML = "Rock crushes Scissors. "+ player +" Loose!";
                computerScore++;
                computerScoreUpdate.innerHTML = computerScore;
            } else if (uInput === "Scissors" && autoChoice === "Paper") {
                msgContainer.innerHTML = "Scissors cut Paper. "+player+" Win!";
                userScore++;
                userScoreUpdate.innerHTML = userScore;
            }
      }
}

function getautoChoice(){
  var randomize = Math.random() * 100;
  var suggestion;
  if (randomize > 0 && randomize < 33) {
      suggestion = "Rock";
  } else if(randomize >=34 && randomize < 66) {
      suggestion = "Paper";
  } else {
      suggestion = "Scissors";
  }
  return suggestion;
}

function currentMode(id, isComputer){
  var currentInput;
  if(isComputer){
      currentInput = choices[Math.floor(Math.random() * choices.length)];
  }else{
      currentInput = id;
  }
  return currentInput;
}

function currentPlayer(isComputer){
  var currentPlayer;
  if(isComputer){
      currentPlayer = "Player 1";
  }else{
      currentPlayer = "You";
  }
  return currentPlayer;
}
