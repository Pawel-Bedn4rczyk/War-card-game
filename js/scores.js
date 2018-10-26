let cpuScore = 0;
let playerScore =0;

const takeScore = () => {
    //Add scores
    if (cpuCardValue === playerCardValue){
        cpuScore++;
        playerScore++;
        document.getElementById('cScore').innerHTML = "- "+cpuScore+" -";
        document.getElementById('pScore').innerHTML = "- "+playerScore+" -";

    }else if(cpuCardValue>playerCardValue){
        cpuScore++;
        document.getElementById('cScore').innerHTML = "- "+cpuScore+" -";
    }else{
        playerScore++;
        document.getElementById('pScore').innerHTML = "- "+playerScore+" -";
    }
//Finish
    if (cpuDeck.length === 0 || playerDeck.length === 0){
        document.getElementById('bStart').disabled = true;

        if(playerScore>cpuScore){
            displayPlayerWin();
        }else if(cpuScore>playerScore){
            displayCpuWin();
        }else {
            displayDraw();
        }
    }
};

//Show Player Win
const displayPlayerWin = () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:first-child").style.display = 'block';
    animYouWin();
};

//Show Cpu Win
const displayCpuWin = () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:nth-child(2)").style.display = 'block';
    animCpuWin();
};

//Show Draw
const displayDraw= () => {
    document.querySelector(".lineDrawing").style.display = 'flex';
    document.querySelector(".lineDrawing .child:last-child").style.display = 'block';
    animDraw();
};