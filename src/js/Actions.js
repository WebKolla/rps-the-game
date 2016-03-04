
init();

function init(){
    var playButton = document.getElementById("playnow");
    playButton.addEventListener("click", loadGameView, false);
}


function loadGameView(){
    window.location.replace("game.html");
}
