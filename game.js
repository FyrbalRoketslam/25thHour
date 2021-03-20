var playerHand = "";

//Start Of game select deck
var swordBtn = document.getElementById('sword-btn');
var wandBtn  = document.getElementById('wand-btn');
var cupBtn   = document.getElementById('cup-btn');

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
        layerHand = "wand";
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
        layerHand = "cup";
    }
}

