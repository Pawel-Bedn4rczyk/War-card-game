let cpuCardValue = 0;
let playerCardValue = 0;


const showCardOnCpuDiv = () => {
    let randNumber = Math.floor(Math.random() * cpuDeck.length);
    let indexFromArray = cpuDeck[randNumber];
    cpuCardValue = cpuDeck[randNumber].value;
    //DOM
    document.getElementById('cardCpu').style.background =`url(${indexFromArray.img})no-repeat center`;
    document.getElementById('cardCpu').style.backgroundSize = "contain";
    // REMOVE FROM CPU DECK
    cpuDeck.splice(randNumber, 1);
};

const showCardOnPlayerDiv = () => {
    let randNumber = Math.floor(Math.random() * playerDeck.length);
    let indexFromArray = playerDeck[randNumber];
    playerCardValue = playerDeck[randNumber].value;
    //DOM
    document.getElementById('cardPlayer').style.background =`url(${indexFromArray.img})no-repeat center`;
    document.getElementById('cardPlayer').style.backgroundSize = "contain";
    // REMOVE FROM PLAYER DECK
    playerDeck.splice(randNumber, 1);
};


