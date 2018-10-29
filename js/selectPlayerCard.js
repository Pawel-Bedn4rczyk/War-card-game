const playerDeck = ["2-Club", "3-Club", "4-Club", "5-Club", "6-Club", "7-Club", "8-Club", "9-Club", "10-Club", "Jack-Club", "Queen-Club", "King-Club", "Ace-Club", "2-Diamond", "3-Diamond", "4-Diamond", "5-Diamond", "6-Diamond", "7-Diamond", "8-Diamond", "9-Diamond", "10-Diamond", "Jack-Diamond", "Queen-Diamond", "King-Diamond", "Ace-Diamond", "2-Heart", "3-Heart", "4-Heart", "5-Heart", "6-Heart", "7-Heart", "8-Heart", "9-Heart", "10-Heart", "Jack-Heart", "Queen-Heart", "King-Heart", "Ace-Heart", "2-Spade", "3-Spade", "4-Spade", "5-Spade", "6-Spade", "7-Spade", "8-Spade", "9-Spade", "10-Spade", "Jack-Spade", "Queen-Spade", "King-Spade", "Ace-Spade", "JokerA", "JokerB"];

let playerCard = [];
let playerCardValue = 0;

//random number fn - from playerDeck
const randomFromPlayerDeck = () => Math.floor(Math.random() * playerDeck.length);
// Take random number and push this index from playerDeck to new array-This is Player card-
const removeFromPlayerDeck = () => {
    playerCard = playerDeck.splice(randomFromPlayerDeck(), 1);
};
const showCardOnPlayerDiv = () => {
    removeFromPlayerDeck();
    let playerCardString = playerCard.toString();
    // console.log(playerCardString);
    switch (playerCardString) {
        case "2-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs2.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 2;
            break;
        case "3-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs3.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 3;
            break;
        case "4-Club" :
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs4.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 4;
            break;
        case "5-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs5.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 5;
            break;
        case "6-Club" :
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs6.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 6;
            break;
        case "7-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs7.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 7;
            break;
        case "8-Club" :
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs8.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 8;
            break;
        case "9-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs9.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 9;
            break;
        case "10-Club" :
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubs10.png') no-repeat center";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 10;
            break;
        case "Jack-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubsJ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 11;
            break;
        case "Queen-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubsQ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 12;
            break;
        case "King-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubsK.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 13;
            break;
        case "Ace-Club":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardClubsA.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 14;
            break;
        case "2-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds2.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 2;
            break;
        case "3-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds3.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 3;
            break;
        case "4-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds4.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 4;
            break;
        case "5-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds5.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 5;
            break;
        case "6-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds6.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 6;
            break;
        case "7-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds7.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 8;
            break;
        case "8-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds8.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 8;
            break;
        case "9-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds9.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 9;
            break;
        case "10-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamonds10.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 10;
            break;
        case "Jack-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamondsJ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 11;
            break;
        case "Queen-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamondsQ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 12;
            break;
        case "King-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamondsK.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 13;
            break;
        case "Ace-Diamond":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardDiamondsA.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 14;
            break;
        case "2-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts2.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 2;
            break;
        case "3-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts3.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 3;
            break;
        case "4-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts4.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 4;
            break;
        case "5-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts5.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 5;
            break;
        case "6-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts6.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 6;
            break;
        case "7-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts7.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 7;
            break;
        case "8-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts8.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 8;
            break;
        case "9-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts9.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 9;
            break;
        case "10-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHearts10.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 10;
            break;
        case "Jack-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHeartsJ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 11;
            break;
        case "Queen-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHeartsQ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 12;
            break;
        case "King-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHeartsK.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 13;
            break;
        case "Ace-Heart":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardHeartsA.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 14;
            break;
        case "2-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades2.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 2;
            break;
        case "3-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades3.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 3;
            break;
        case "4-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades4.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 4;
            break;
        case "5-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades5.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 5;
            break;
        case "6-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades6.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 6;
            break;
        case "7-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades7.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 7;
            break;
        case "8-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades8.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 8;
            break;
        case "9-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades9.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 9;
            break;
        case "10-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpades10.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 10;
            break;
        case "Jack-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpadesJ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 11;
            break;
        case "Queen-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpadesQ.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 12;
            break;
        case "King-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpadesK.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 13;
            break;
        case "Ace-Spade":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardSpadesA.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 14;
            break;
        case "JokerA":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardJokerA.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 15;
            break;
        case "JokerB":
            document.getElementById('cardPlayer').style.background = "url('img/cards/playerCards/cardJokerB.png') no-repeat center ";
            document.getElementById('cardPlayer').style.backgroundSize = "contain";
            playerCardValue = 15;
            break;


    }
    return playerCardValue;
};

