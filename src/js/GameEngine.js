function generateResults(id, isComputer){
    var player = "You";
    if(isComputer){
      uInput = choices[Math.floor(Math.random() * choices.length)];
      player = "Player 1";
    }else{
      uInput = id;
    }

    resultContainer.innerHTML = "";
    msgContainer.innerHTML = "";

      if (uInput === "Rock" || uInput === "Paper" || uInput === "Scissors") {
            var randomize = Math.random() * 100;
            if (randomize > 0 && randomize < 33) {
                autoChoice = "Rock";
            } else if(randomize >=34 && randomize < 66) {
                autoChoice = "Paper";
            } else {
                autoChoice = "Scissors";
            }

            resultContainer.innerHTML = "Computer chose " + autoChoice + " ";

            if (uInput === autoChoice) {
                msgContainer.innerHTML = "It's a Tie. Try Again!";
            }

            if (uInput === "Rock" && autoChoice === "Paper") {
                msgContainer.innerHTML = "Paper covers Rock. "+ player +" Loose!";
            } else if (uInput === "Rock" && autoChoice === "Scissors") {
                msgContainer.innerHTML = "Rock crushes scissors. "+ player +" Win!";
            }

            if (uInput === "Paper" && autoChoice === "Rock") {
                msgContainer.innerHTML = "Paper covers Rock. "+player+" Win!";
            } else if (uInput === "Paper" && autoChoice === "Scissors") {
                msgContainer.innerHTML = "Scissors cut Paper. "+player+" Loose!";
            }

            if (uInput === "Scissors" && autoChoice === "Rock") {
                msgContainer.innerHTML = "Rock crushes Scissors. "+player+" Loose!";
            } else if (uInput === "Scissors" && autoChoice === "Paper") {
                msgContainer.innerHTML = "Scissors cut Paper. "+player+" Win!";
            }
      }
}
