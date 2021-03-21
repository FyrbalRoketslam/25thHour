//To Do
//  1)Make the players cards not take up space when they are not visible
//      - display: none; ???
//  2)When you select your card have the old button disapear and have a new one appear
//  3)Log what card the enemy selects
//  4)Have a button to click next to see your reading
//  5)Populate the wand, sword, and cup card photos
//  6) Work on overall layout

var playerHand = "";
var playerCard = "";
var enemyCard = "";
var allCards =
    [
        "Images/ConstarotCards/AndromedaCard.png",
        "Images/ConstarotCards/ByakkoCard.png",
        "Images/ConstarotCards/CoronaBorealisCard.png",
        "Images/ConstarotCards/CygnusCard.png",
        "Images/ConstarotCards/DracoCard.png",
        "Images/ConstarotCards/LyraCard.png",
        "Images/ConstarotCards/OphiuchusCard.png",
        "Images/ConstarotCards/OrionCard.png",
        "Images/ConstarotCards/VedrfolnirCard.png"
    ]
var allCardsNames =
    [
        "Andromeda",
        "Byakko",
        "CoronaBorealis",
        "Cygnus",
        "Draco",
        "Lyra",
        "Ophiuchus",
        "Orion",
        "Vedrfolnir"
    ]

//Deck Select Buttons
var swordBtn = document.getElementById('sword-btn');
var wandBtn = document.getElementById('wand-btn');
var cupBtn = document.getElementById('cup-btn');

//View Cards After Selecting Deck Buttons
var viewSwordBtn = document.getElementById('player-sword-cards');
var viewWandBtn = document.getElementById('player-wand-cards');
var viewCupBtn = document.getElementById('player-cup-cards');

//Buttons for player to select card afte they select deck and its in the center
var leftCardBtn = document.getElementById('player-left-card-btn');
var middleCardBtn = document.getElementById('player-middle-card-btn');
var rightCardBtn = document.getElementById('player-right-card-btn');

//When the player selects the sword deck
swordBtn.onclick = function () {
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-sword-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for (var i = 0; i < 1; i++) {
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
wandBtn.onclick = function () {
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-wand-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for (var i = 0; i < 1; i++) {
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
cupBtn.onclick = function () {
    var centerDecks = document.getElementsByClassName('card-deck-center');
    var text = document.getElementById('draw-card-text');
    var playerDeck = document.getElementById('player-cup-cards');
    var enemyDeck = document.getElementById('enemy-cards');
    //Removes center cards - wont work outside of for loop becasue im dumb
    for (var i = 0; i < 1; i++) {
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
viewSwordBtn.onclick = function () {
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");

    for (var i = 0; i < 1; i++) {
        playersDeck[i].style.visibility = "visible";
    }

    playersCards[0].src = "Images/ConstarotCards/OrionCard.png";
    playersCards[1].src = "Images/ConstarotCards/DracoCard.png";
    playersCards[2].src = "Images/ConstarotCards/AndromedaCard.png";

}

//Wand Button --- Players Hand
viewWandBtn.onclick = function () {
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");
    for (var i = 0; i < 1; i++) {
        playersDeck[i].style.visibility = "visible";
    }
    playersCards[0].src = "Images/ConstarotCards/OphiuchusCard.png";
    playersCards[1].src = "Images/ConstarotCards/VedrfolnirCard.png";
    playersCards[2].src = "Images/ConstarotCards/ByakkoCard.png";
}


//Cup Button ---- Players Hand
viewCupBtn.onclick = function () {
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");

    for (var i = 0; i < 1; i++) {
        playersDeck[i].style.visibility = "visible";
    }
    playersCards[0].src = "Images/ConstarotCards/CoronaBorealisCard.png";
    playersCards[1].src = "Images/ConstarotCards/CygnusCard.png";
    playersCards[2].src = "Images/ConstarotCards/LyraCard.png";
}

/*
    For reference just in case:
    Sword Cards - Orion, Draco, Andromeda
    Wand Cards - Ophiuchus, Vedrfolnir, Byakko
    Cup Cards - Corona Borealis, Cygnus, Lyra
*/

//Player selects left card
leftCardBtn.onclick = function () {
    leftCardBtn.disabled = true;

    var middleCard = document.getElementById("player-middle-card");
    var rightCard = document.getElementById("player-right-card");



    middleCard.style.visibility = "hidden";
    middleCard.style.display = "none";
    rightCard.style.visibility = "hidden";
    rightCard.style.display = "none";

    document.getElementById("enemy-card-drawn").style.visibility = "visible";
    GenerateRandomEnemy();

    switch (playerHand) {
        case "sword":
            playerCard = "Orion";
            break;
        case "wand":
            playerCard = "Ophiuchus";
            break;
        case "cup":
            playerCard = "CoronaBorealis";
            break;
    }
    console.log(playerCard);
    console.log(enemyHand);

    FinalReading(playerCard, enemyHand);
}

//Player selects middle card
middleCardBtn.onclick = function () {
    middleCardBtn.disabled = true;
    var leftCard = document.getElementById("player-left-card");
    var rightCard = document.getElementById("player-right-card");



    leftCard.style.visibility = "hidden";
    leftCard.style.display = "none";
    rightCard.style.visibility = "hidden";
    rightCard.style.display = "none";

    document.getElementById("enemy-card-drawn").style.visibility = "visible";
    GenerateRandomEnemy();
    switch (playerHand) {
        case "sword":
            playerCard = "Draco";
            break;
        case "wand":
            playerCard = "Vedrfolnir";
            break;
        case "cup":
            playerCard = "Cygnus";
            break;
    }

    console.log(playerCard);
    console.log(enemyHand);

    FinalReading(playerCard, enemyHand);
}
//Player selects right card
rightCardBtn.onclick = function () {
    rightCardBtn.disabled = true;
    var leftCard = document.getElementById("player-left-card");
    var middleCard = document.getElementById("player-middle-card");



    leftCard.style.visibility = "hidden";
    leftCard.style.display = "none";
    middleCard.style.visibility = "hidden";
    middleCard.style.display = "none";

    document.getElementById("enemy-card-drawn").style.visibility = "visible";
    GenerateRandomEnemy();

    switch (playerHand) {
        case "sword":
            playerCard = "Andromeda";
            break;
        case "wand":
            playerCard = "Byakko";
            break;
        case "cup":
            playerCard = "Lyra";
            break;
    }

    console.log(playerCard);
    console.log(enemyHand);

    FinalReading(playerCard, enemyHand);
}


function GenerateRandomEnemy() {
    var enemyTest = document.getElementById("Test");
    var randomNumber = Math.floor(Math.random() * (9 - 0));
    enemyHand = allCardsNames[randomNumber];
    enemyTest.src = allCards[randomNumber];
}

function FinalReading(card1, card2) {
    var cardCombos = card1 + card2;
    console.log(cardCombos);

    switch (cardCombos) {
        case "OrionOrion":
            console.log("Orion is endlessly chased by the scorpion and endlessly chases the seven sisters. He, like you, is a devoted hunter. He, unlike you, is also hunted. You may feel like you are constantly on the run, but take a breath and center yourself. Use your strength for your craft, not running from perceived threats. Should they come, you can take them.");
            break;

        case "DracoDraco":
            console.log("A dragon, a god-fighter. Endlessly powerful. Be careful no to over do it. In your haste to fight, you will only end up hurting yourself and others. Allow yourself to be peaceful.");
            break;

        case "AndromedaAndromeda":
            console.log("Andromeda, constantly under threat of death for her parent's transgressions. You may feel powerless in the world around you. You must remember you are strong. Focus on what you can do-- not what you can't.");
            break;

        case "OphiuchusOphiuchus":
            console.log("Ophiuchus was a legendary healer-- able, even, to cure death itself. He was killed to prevent immortality in humans. You have many healing gifts as well. Continue to help others selflessly and you will be rewarded.");
            break;

        case "VedrfolnirVedrfolnir":
            console.log("Vedrfolnir, perched atop an eagle in the World Tree, surveys all and knows just as much. Use your vast knowledge for good. Share it with others to create a better world.");
            break;

        case "ByakkoByakko":
            console.log("Byakko, a white tiger, is said to show up in in times of peace or when the emperor in truly virtuous. These may not be true, but they may be within yourself. Share your inner peace and virtue with others, and the world may follow suit.");
            break;

        case "CoronaBorealisCoronaBorealis":
            console.log("Immortalizing Dionysis' love for Ariadne after she was abandoned, the Northern crown adornes the sky. You may have experienced a sad departure from your life, but know there is a light at the end if you just keep going.");
            break;

        case "CygnusCygnus":
            console.log("Cygnus was immortalized in the stars for his devotion to finding Icarus after his fall. Like Cygnus, you are searching for a lost love you may or may not have ever known. You search tirelessly, but it will get you nowhere if you disregard yourself. Take time to breath and mourn.");
            break;

        case "LyraLyra":
            console.log("Orpheus' lyre was crucial to him being able to save his wife from the underworld. He tossed it away when his own doubt caused his attempt to fail. You may have many trials ahead of you, but try and trust those around you. If someone reaches out their hand to help, trust their intentions.");
            break;
    }
}
