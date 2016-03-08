
init();

function init(){
    var playBtn = document.getElementById("plyvComp");
    playBtn.addEventListener("click", loadGameView, false);
    var compPlayBtn = document.getElementById('compvComp');
    compPlayBtn.addEventListener("click", loadComputerGame, false);
}


function loadGameView(){
    window.location.replace("game.html");
}

function loadComputerGame(){
    window.location.replace("game.html?isComp=true");
}
