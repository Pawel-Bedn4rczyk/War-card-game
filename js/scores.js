let cpuScore = 0;
let playerScore = 0;

const takeScore = () => {
    //Add scores
    if (cpuCardValue === playerCardValue) {
        cScoreInnerHTML();
        pScoreInnerHTML();
    } else if (cpuCardValue > playerCardValue) {
        cScoreInnerHTML();
    } else {
        pScoreInnerHTML();
    }
//Finish
    if (cpuDeck.length === 0 || playerDeck.length === 0) {
        document.getElementById('bStart').disabled = true;

        if (playerScore > cpuScore) {
            displayPlayerWin();
        } else if (cpuScore > playerScore) {
            displayCpuWin();
        } else {
            displayDraw();
        }
    }
};

const displayPlayerWin = () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:first-child").style.display = 'block';
    animYouWin();
};

const displayCpuWin = () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:nth-child(2)").style.display = 'block';
    animCpuWin();
};

const displayDraw = () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:last-child").style.display = 'block';
    animDraw();
};

const cScoreInnerHTML = () => {
    cpuScore++;
    document.getElementById('cScore').innerHTML = "- " + cpuScore + " -";
};

const pScoreInnerHTML = () => {
    playerScore++;
    document.getElementById('pScore').innerHTML = "- " + playerScore + " -";
};