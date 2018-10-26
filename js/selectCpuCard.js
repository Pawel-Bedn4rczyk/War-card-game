const cpuDeck = ["2-Club", "3-Club", "4-Club", "5-Club", "6-Club", "7-Club", "8-Club", "9-Club", "10-Club", "Jack-Club", "Queen-Club", "King-Club", "Ace-Club", "2-Diamond", "3-Diamond", "4-Diamond", "5-Diamond", "6-Diamond", "7-Diamond", "8-Diamond", "9-Diamond", "10-Diamond", "Jack-Diamond", "Queen-Diamond", "King-Diamond", "Ace-Diamond", "2-Heart", "3-Heart", "4-Heart", "5-Heart", "6-Heart", "7-Heart", "8-Heart", "9-Heart", "10-Heart", "Jack-Heart", "Queen-Heart", "King-Heart", "Ace-Heart", "2-Spade", "3-Spade", "4-Spade", "5-Spade", "6-Spade", "7-Spade", "8-Spade", "9-Spade", "10-Spade", "Jack-Spade", "Queen-Spade", "King-Spade", "Ace-Spade", "JokerA", "JokerB"];

let cpuCard = [];
let cpuCardValue = 0;

//random number fn - from cpuDeck
const randomFromCpuDeck = () => Math.floor(Math.random() * cpuDeck.length);
// Take random number and push this index from cpuDeck to new array-This is cpu card-
const removeFromCpuDeck = () => {
    cpuCard = cpuDeck.splice(randomFromCpuDeck(), 1);
};
const showCardOnCpuDiv = () => {
    removeFromCpuDeck();
    let cpuCardString = cpuCard.toString();
    switch (cpuCardString) {
        case "2-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs2.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 2;
            break;
        case "3-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs3.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 3;
            break;
        case "4-Club" :
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs4.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 4;
            break;
        case "5-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs5.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 5;
            break;
        case "6-Club" :
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs6.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 6;
            break;
        case "7-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs7.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 7;
            break;
        case "8-Club" :
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs8.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 8;
            break;
        case "9-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs9.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 9;
            break;
        case "10-Club" :
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubs10.png') no-repeat center";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 10;
            break;
        case "Jack-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubsJ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 11;
            break;
        case "Queen-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubsQ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 12;
            break;
        case "King-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubsK.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 13;
            break;
        case "Ace-Club":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardClubsA.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 14;
            break;
        case "2-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds2.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 2;
            break;
        case "3-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds3.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 3;
            break;
        case "4-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds4.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 4;
            break;
        case "5-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds5.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 5;
            break;
        case "6-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds6.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 6;
            break;
        case "7-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds7.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 8;
            break;
        case "8-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds8.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 8;
            break;
        case "9-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds9.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 9;
            break;
        case "10-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamonds10.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 10;
            break;
        case "Jack-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamondsJ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 11;
            break;
        case "Queen-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamondsQ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 12;
            break;
        case "King-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamondsK.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 13;
            break;
        case "Ace-Diamond":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardDiamondsA.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 14;
            break;
        case "2-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts2.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 2;
            break;
        case "3-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts3.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 3;
            break;
        case "4-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts4.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 4;
            break;
        case "5-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts5.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 5;
            break;
        case "6-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts6.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 6;
            break;
        case "7-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts7.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 7;
            break;
        case "8-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts8.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 8;
            break;
        case "9-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts9.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 9;
            break;
        case "10-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHearts10.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 10;
            break;
        case "Jack-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHeartsJ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 11;
            break;
        case "Queen-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHeartsQ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 12;
            break;
        case "King-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHeartsK.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 13;
            break;
        case "Ace-Heart":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardHeartsA.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 14;
            break;
        case "2-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades2.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 2;
            break;
        case "3-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades3.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 3;
            break;
        case "4-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades4.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 4;
            break;
        case "5-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades5.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 5;
            break;
        case "6-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades6.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 6;
            break;
        case "7-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades7.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 7;
            break;
        case "8-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades8.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 8;
            break;
        case "9-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades9.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 9;
            break;
        case "10-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpades10.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 10;
            break;
        case "Jack-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpadesJ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 11;
            break;
        case "Queen-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpadesQ.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 12;
            break;
        case "King-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpadesK.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 13;
            break;
        case "Ace-Spade":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardSpadesA.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 14;
            break;
        case "JokerA":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardJokerA.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 15;
            break;
        case "JokerB":
            document.getElementById('cardCpu').style.background = "url('img/cards/cpuCards/cardJokerB.png') no-repeat center ";
            document.getElementById('cardCpu').style.backgroundSize = "contain";
            cpuCardValue = 15;
            break;



    }
    return cpuCardValue;
    // return cpuCardValue;
    // console.log(`Karta cpu value: ${cpuCardValue}`);
    // wyswietlanie();
};
// module.exports = cpuCardValue;

// showCardOnCpuDiv();
/*
module.exports = {
    cpuCard: removeFromCpuDeck(),
    CpuArray:cpuDeck
};
*/
// removeFromCpuDeck();
/*console.log(removeFromCpuDeck());
console.log(`tablica po redukcji : ${[cpuDeck]}`);
console.log(`Cpu card is: ${cpuCardFromDeck}`);*/

// const Methods = require ('./selectCpuCard');

// console.log(Methods.cpuCard);
// cpuCard = "3-Club";
