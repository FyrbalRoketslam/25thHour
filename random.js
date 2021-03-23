



//---------Randon HTML Element--------
var HtmlBtn = document.getElementById('html_btn');
HtmlBtn.onclick = function()
{
    document.getElementById('Random-Header').innerText = "Cooler Header";
};



//--------Random Css Element --------
var CssBtn = document.getElementById('css_btn');
CssBtn.onclick = function(){
    document.getElementById("background-color").style.backgroundColor = "black";
};

//-------- Input Text Element --------
var TextBtn = document.getElementById('text-btn');
var TextField = document.getElementById('text-field');
TextBtn.onclick = function(){
    var userInput = TextField.value;
    document.getElementById('user-output-textbox').innerText = userInput;
}


//--------Random Number Generator --------
var number1             = document.getElementById('number1-text-field');
var number2             = document.getElementById('number2-text-field');
var randomNumberButton  = document.getElementById('random-number-button');
var randomNumberOutput  = document.getElementById('random-number-output');

randomNumberButton.onclick = function(){
    var min = number1.value;
    var max = number2.value;
    var rand = 0;
    if(min.length > 0 && max.length > 0){
        document.getElementById('random-number-output').innerText = Math.random() * (max - min) + min; 
        rand =  Math.floor(Math.random() * (max - min) + min);
    }

    var mod = rand%10;
    setStarsInvisible();
    setStarsVisible(mod);
};


function setStarsInvisible(){
    var Stars = document.getElementsByClassName('star');
    for(var i = 0; i < 10 ;i++)
    {
        Stars[i].style.visibility = "hidden";
    }
}

function setStarsVisible(num){
    var Stars = document.getElementsByClassName('star');
    for(var i = 0; i < num ;i++)
    {
        Stars[i].style.visibility = "visible";
    }
}
