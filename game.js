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

//reset Button
var reset = document.getElementById("goToCardGame");

reset.onClick = function(){
    console.log("reloading page");
    window.location.reload();
}

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
    //changes card images
    playersCards[0].src = "Images/ConstarotCards/OrionCard.png";
    playersCards[1].src = "Images/ConstarotCards/DracoCard.png";
    playersCards[2].src = "Images/ConstarotCards/AndromedaCard.png";

    //changes button text
    document.getElementById('player-left-card-btn').innerText = "Choose Orion";
    document.getElementById('player-middle-card-btn').innerText = "Choose Draco";
    document.getElementById('player-right-card-btn').innerText = "Choose Andromeda";
}

//Wand Button --- Players Hand
viewWandBtn.onclick = function () {
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");
    for (var i = 0; i < 1; i++) {
        playersDeck[i].style.visibility = "visible";
    }
    //Changes Player Card Images
    playersCards[0].src = "Images/ConstarotCards/OphiuchusCard.png";
    playersCards[1].src = "Images/ConstarotCards/VedrfolnirCard.png";
    playersCards[2].src = "Images/ConstarotCards/ByakkoCard.png";

    //changes button text
    document.getElementById('player-left-card-btn').innerText = "Choose Orphiuchus";
    document.getElementById('player-middle-card-btn').innerText = "Choose Vedrfolnir";
    document.getElementById('player-right-card-btn').innerText = "Choose Byakko";
}


//Cup Button ---- Players Hand
viewCupBtn.onclick = function () {
    var playersDeck = document.getElementsByClassName("player-card-deck-center")
    var playersCards = document.getElementsByClassName("player-hand-photo");

    for (var i = 0; i < 1; i++) {
        playersDeck[i].style.visibility = "visible";
    }
    //Changes Player Card Images
    playersCards[0].src = "Images/ConstarotCards/CoronaBorealisCard.png";
    playersCards[1].src = "Images/ConstarotCards/CygnusCard.png";
    playersCards[2].src = "Images/ConstarotCards/LyraCard.png";

    //changes button text
    document.getElementById('player-left-card-btn').innerText = "Choose Corona Borealis";
    document.getElementById('player-middle-card-btn').innerText = "Choose Cygnus";
    document.getElementById('player-right-card-btn').innerText = "Choose Lyra";
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

    var output = FinalReading(playerCard, enemyHand);
    setTimeout(function() {DisplayReading(output);}, 2500)

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

    var output = FinalReading(playerCard, enemyHand);
    setTimeout(function() {DisplayReading(output);}, 2500)
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

    var output = FinalReading(playerCard, enemyHand);
    setTimeout(function() {DisplayReading(output);}, 2500)
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
            return ("Orion is endlessly chased by the scorpion and endlessly chases the seven sisters. He, like you, is a devoted hunter. He, unlike you, is also hunted. You may feel like you are constantly on the run, but take a breath and center yourself. Use your strength for your craft, not running from perceived threats. Should they come, you can take them.");
            break;

        case "DracoOrion":
        case "OrionDraco":
            return ("Orion is endlessly chased by the scorpion and endlessly chases the seven sisters. Draco is a powerful dragon defeated. Although it might seem like people around you are defeated, and that same hunter is behind you, keep running, with your goals in sight. Have faith in your ability to push onward.");
            break;

        case "AndromedaOrion":
        case "OrionAndromeda":
            return ("You might feel chained by a destiny that others have put on you, a sacrifice to the whim of the earth. However, showing your dedication and willpower will bring the right people in your life to show you your true path.");
            break;

        case "OphiuchusOrion":
        case "OrionOphiucus":
            return ("With Orion’s powerful will and determination and Ophiuchus's power that even gods fear, be careful with the amount of force within you. Be cautious because you have a lot of potential for good, make sure to use it for such.");
            break;

        case "VedrfolnirOrion":
        case "OrionVedrfolnir":
            return ("You have an ability to oversee what is around you, picking apart the rhetorics of wisdom and knowledge. But sometimes you get caught in the chase and forget to keep an eye. Don't let the thrill of hunt cloud your judgement. Keep fighting on, but recognize your keen eye.");
            break;

        case "ByakkoOrion":
        case "OrionByakko":
            return ("While you are always keeping your sights on accomplishing goals and furious for success, fear of failure, you must remember to take a breath, recognize the times to sit and find bliss.");
            break;

        case "CoronaBorealisOrion":
        case "OrionCoronaBorealis":
            return ("Although you might be alone in your thrill of the hunt, recognize the gifts you have been given, the powerful connections. Appreciate the people that come into your life bearing hidden gifts.");
            break;

        case "CygusOrion":
        case "OrionCygnus":
            return ("You might be losing your true self in the pursuit of ever expansive goals. Recognize when to let go, or you might just lose yourself forever.");
            break;

        case "LyraOrion":
        case "OrionLyra":
            return ("Don't let your constant fear of someone leaving you push them away. Your battles might have sacrifices, that is the natural fight that we all fight, trust in the process and don't look back.");
            break;

        case "DracoDraco":
            return ("A dragon, a god-fighter. Endlessly powerful. Be careful no to over do it. In your haste to fight, you will only end up hurting yourself and others. Allow yourself to be peaceful.");
            break;

        case "AndromedaDraco":
        case "DracoAndromeda":
            return ("While you are always keeping your sights on accomplishing goals and furious for success, fear of failure, you must remember to take a breath, recognize the times to sit and find bliss.");
            break;

        case "OphiuchusDraco":
        case "DracoOphiuchus":
            return ("You are strong, and though there have been many battles that have torn you down. Recoup and let yourself heal. You will emerge stronger than you have seen in yourself before.");
            break;

        case "VedrfolnirDraco":
        case "DracoVedrfolnir":
            return ("You have a powerful perspective on things, but sometimes you get caught up in your own world allowing yourself to be blindsided. Realize your strength but also realize the power that others around you have.");
            break;

        case "ByakkoDraco":
        case "DracoByakko":
            return ("Although you feel defeated, that just might be what it seems on the surface. This could be a pivotal moment for you. Make peace with what drags you down. Realize the importance of the moment you are going through.");
            break;

        case "CoronaBorealisDraco":
        case "DracoCoronaBorealis":
            return ("Feeling struck down by the weight of it all, realize the love that might come your way. Some will break off spiteful, hurting, but another will come along and mend.");
            break;

        case "CygnusDraco":
        case "DracoCygnus":
            return ("Be careful of how strong your thoughts are and how they change your perspective. If you aren't aware, you might just manifest your own defeat.");
            break;

        case "LyraDraco":
        case "DracoLyra":
            return ("Don't doubt your own strength or abilities. Such doubt might cause your own downfall.");
            break;

        case "AndromedaAndromeda":
            return ("Andromeda, constantly under threat of death for her parent's transgressions. You may feel powerless in the world around you. You must remember you are strong. Focus on what you can do-- not what you can't.");
            break;

        case "OphiuchusAndromeda":
        case "AndromedaOphiuchus":
            return ("You are trying so hard to heal others because of how bright your light is. Sometimes you need to take time to nurture your own, or else you will sacrifice that light to someone else who only takes.");
            break;

        case "VedrfolnirAndromeda":
        case "AndromedaVedrfolnir":
            return ("You can oversee the monsters that lay in the uncharted waters. Don't let other peoples’ fear consume you, think it through yourself. Don't let someone else define your destiny.");
            break;

        case "ByakkoAndromeda":
        case "AndromedaByakko":
            return ("Although you might be stuck, awaiting the monster, it could be a blessing in disguise. Try to find peace in a dire situation.");
            break;

        case "CoronaBorealisAndromeda":
        case "AndromedaCoronaBorealis":
            return ("Although you may feel trapped and alone, abandoned by your past lovers, look onward for someone who will see your true blessings.");
            break;

        case "CygnusAndromeda":
        case "AndromedaCygnus":
            return ("You might be in a constant search for someone to save you from your situation. Sometimes you have to stop getting in your own way and allow yourself some peace.");
            break;

        case "LyraAndromeda":
        case "AndromedaLyra":
            return ("Stop depending on other people, do it yourself. Have trust in yourself and the others around you to see it.");
            break;

        case "OphiuchusOphiuchus":
            return ("Ophiuchus was a legendary healer-- able, even, to cure death itself. He was killed to prevent immortality in humans. You have many healing gifts as well. Continue to help others selflessly and you will be rewarded.");
            break;

        case "VedrfolnirOphiuchus":
        case "OphiuchusVedrfolnir":
            return ("You can oversee and plan what is to come. Life is coming together piece by piece. Use your undeniable power, don't be afraid. It is all lining up.");
            break;

        case "ByakkoOphiuchus":
        case "OphiuchusByakko":
            return ("You are wiser than you think, use the times of peace to heckin heal yourself bro.");
            break;

        case "CoronaBorealisOphiuchus":
        case "OphiuchusCoronaBorealis":
            return ("Your healing power will be recognized by someone great who is on the way. Await the gifts to come.");
            break;

        case "CygnusOphiuchus":
        case "OphiuchusCygnus":
            return ("Although you have a want to heal everyone, you must recognize at times that other peoples’ problems are their own.");
            break;

        case "LyraOphiuchus":
        case "OphiuchusLyra":
            return ("Don't doubt your healing abilities, others around you appreciate it. If you seek constant reassurance about your own power, others might see you as selfish and be taken away.");
            break;


        case "VedrfolnirVedrfolnir":
            return ("Vedrfolnir, perched atop an eagle in the World Tree, surveys all and knows just as much. Use your vast knowledge for good. Share it with others to create a better world.");
            break;

        case "ByakkoVedrfolnir":
        case "VedrfolnirByakko":
            return ("Wisdom, peace, virtue, and clear sight. Meditate on those concepts, how they resonate with you, in order to find your own piece, you have the knowledge to do it.");
            break;

        case "CoronaBorealisVedrfolnir":
        case "VedrfolnirCoronaBorealis":
            return ("Don't overlook the gifts that manifest around you. Even if you are lost on an island, in a constant search for what is good. It might just lie at your feet.");
            break;

        case "CygnusVedrfolnir":
        case "VedrfolnirCygnus":
            return ("You might have planned something that is un achievable at this moment, don't focus too hard on it. Let it motivate you, but don't let it get you down.");
            break;

        case "LyraVedrfolnir":
        case "VedrfolnirLyra":
            return ("You might be confident in seeing things, but also have faith. Seeing with your physical is powerful, but don't forget the faith you must keep inside.");
            break;


        case "ByakkoByakko":
            return ("Byakko, a white tiger, is said to show up in in times of peace or when the emperor in truly virtuous. These may not be true, but they may be within yourself. Share your inner peace and virtue with others, and the world may follow suit.");
            break;

        case "CoronaBorealisByakko":
        case "ByakkoCoronaBorealis":
            return ("Even if you are on an island, you can still relish in the bliss and peace that you create within yourself. Others will come, don't worry about them, finding it within yourself might bring them.");
            break;

        case "CygnusByakko":
        case "ByakkoCygnus":
            return ("Life can be one big comedic tragedy, we all can relate at some point. The one thing that pushes us all through, the one thing that makes humanity beautiful, is hope.");
            break;

        case "LyraByakko":
        case "ByakkoLyra":
            return ("Don't doubt the virtues of others and have trust that they will be around.");
            break;


        case "CoronaBorealisCoronaBorealis":
            return ("Immortalizing Dionysis' love for Ariadne after she was abandoned, the Northern crown adornes the sky. You may have experienced a sad departure from your life, but know there is a light at the end if you just keep going.");
            break;

        case "CygnusCoronaBorealis":
        case "CoronaBorealisCygnus":
            return ("It may suck, but just wait a while and it will get better. Time will heal. You will get through this, I believe in you. <3");
            break;

        case "LyraCoronaBorealis":
        case "CoronaBorealisLyra":
            return ("If you are stuck in doubt, you won't see the gifts that come. If you worry constantly about purpose and faith, you might just miss out on the present moment.");
            break;


        case "CygnusCygnus":
            return ("Cygnus was immortalized in the stars for his devotion to finding Icarus after his fall. Like Cygnus, you are searching for a lost love you may or may not have ever known. You search tirelessly, but it will get you nowhere if you disregard yourself. Take time to breath and mourn.");
            break;

        case "LyraCygnus":
        case "CygnusLyra":
            return ("You may be in an awful situation. Let yourself mourn for what was, focusing on what could be.");
            break;

        default:
            return "Default Output";
            break;
    }
}


function DisplayReading(reading){
    console.log("Making reading visable")
    console.log("Reading : "  + reading);
    var readingJubotron = document.getElementById("card-reading");
    readingJubotron.style.visibility = "visible";
    readingJubotron.style.display = "block";

    document.getElementById('card-reading-output').innerText = reading;
}


