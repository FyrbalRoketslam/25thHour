//To Do
//Make the players cards not take up space when they are not visible
//  - display: none; ???

var playerHand = "";

//Deck Select Buttons
var swordBtn = document.getElementById('sword-btn');
var wandBtn  = document.getElementById('wand-btn');
var cupBtn   = document.getElementById('cup-btn');

//View Cards After Selecting Deck Buttons
var viewSwordBtn = document.getElementById('player-sword-cards');
var viewWandBtn  = document.getElementById('player-wand-cards');
var viewCupBtn   = document.getElementById('player-cup-cards');

//Buttons for player to select card afte they select deck and its in the center
var leftCardBtn = document.getElementById('player-left-card-btn');
var middleCardBtn  = document.getElementById('player-middle-card-btn');
var rightCardBtn   = document.getElementById('player-right-card-btn');

//When the player selects the sword deck
swordBtn.onclick = function(){
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-sword-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for(var i = 0 ; i < 1; i ++){
        //Removes Center selection Deck
        centerDecks[i].style.visibility = "hidden";
        centerDecks[i].style.display = "none"; 
        //Removes Text Above Center Deck  
        text.style.visibility = "hidden";
        text.style.display = "none";
        //Shows the card the player selected in the bottom right
        playerDeck.style.visibility = "visible";
        playerDeck.style.display = "block";
        //Shows the enemys card
        enemyDeck.style.visibility = "visible";
        enemyDeck.style.display = "block";
        playerHand = "sword";
    }

}

//When the player selects the wand deck
wandBtn.onclick = function(){
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-wand-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for(var i = 0 ; i < 1; i ++){
        //Removes Center selection Deck
        centerDecks[i].style.visibility = "hidden";
        centerDecks[i].style.display = "none"; 
        //Removes Text Above Center Deck  
        text.style.visibility = "hidden";
        text.style.display = "none";
        //Shows the card the player selected in the bottom right
        playerDeck.style.visibility = "visible";
        playerDeck.style.display = "block";
        //Shows the enemys card
        enemyDeck.style.visibility = "visible";
        enemyDeck.style.display = "block";
        playerHand = "wand";
    }
}

//When the player selects the cup deck
cupBtn.onclick = function(){
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-cup-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for(var i = 0 ; i < 1; i ++){
        //Removes Center selection Deck
        centerDecks[i].style.visibility = "hidden";
        centerDecks[i].style.display = "none"; 
        //Removes Text Above Center Deck  
        text.style.visibility = "hidden";
        text.style.display = "none";
        //Shows the card the player selected in the bottom right
        playerDeck.style.visibility = "visible";
        playerDeck.style.display = "block";
        //Shows the enemys card
        enemyDeck.style.visibility = "visible";
        enemyDeck.style.display = "block";
        playerHand = "cup";
    }
}


//When player has sword cards and wants to view then
viewSwordBtn.onclick = function(){
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");

    for(var i = 0 ; i < 1; i++)
    {
    playersDeck[i].style.visibility = "visible";
    }

    playersCards[0].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[1].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[2].src = "Images/ConstarotCards/AndromedaCard.png";
    
}

//Wand Button --- Players Hand
viewWandBtn.onclick = function(){
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");
    for(var i = 0 ; i < 1; i++)
    {
    playersDeck[i].style.visibility = "visible";
    }
    playersCards[0].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[1].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[2].src = "Images/ConstarotCards/AndromedaCard.png";
}


//Cup Button ---- Playters Hand
viewCupBtn.onclick = function(){
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");

    for(var i = 0 ; i < 1; i++)
    {
    playersDeck[i].style.visibility = "visible";
    }
    playersCards[0].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[1].src = "Images/ConstarotCards/AndromedaCard.png";
    playersCards[2].src = "Images/ConstarotCards/AndromedaCard.png";
}



//Player selects left card
leftCardBtn.onclick = function(){
    var middleCard = document.getElementById("player-middle-card");
    var rightCard = document.getElementById("player-right-card");

    middleCard.style.visibility = "hidden";
    middleCard.style.display = "none";
    rightCard.style.visibility = "hidden";
    rightCard.style.display = "none";

    switch(playerHand){
        case "sword":

            break;
        case "wand":
            

            break;
        case "cup":

            break;
    }
}

//Player selects middle card
middleCardBtn.onclick = function(){
    var leftCard = document.getElementById("player-left-card");
    var rightCard = document.getElementById("player-right-card");

    leftCard.style.visibility = "hidden";
    leftCard.style.display = "none";
    rightCard.style.visibility = "hidden";
    rightCard.style.display = "none";

    switch(playerHand){
        case "sword":

            break;
        case "wand":
            

            break;
        case "cup":

            break;
    }
}

//Player selects right card
rightCardBtn.onclick = function(){
    var leftCard = document.getElementById("player-left-card");
    var middleCard = document.getElementById("player-middle-card");

    leftCard.style.visibility = "hidden";
    leftCard.style.display = "none";
    middleCard.style.visibility = "hidden";
    middleCard.style.display = "none";

    switch(playerHand){
        case "sword":

            break;
        case "wand":
            

            break;
        case "cup":

            break;
    }
}