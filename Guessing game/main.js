//All my main vaiabels
var number = Math.floor(Math.random() * (99999999 - 1) + 1);

var theNum = document.getElementById("theNum");
var input = document.getElementById("pg");
var button = document.getElementById("guessButton");
var buttonText = document.getElementById("gbp");
var text = "";
var tryNum = 1;
var reNum = false;

//Check if ctrl, backspace and enter keys is pressd
const keyMap = [{
    key: 'Control',
    pressed: false,
},
{
    key: 'Backspace',
    pressed: false
},
{
    key: 'Enter',
    pressed: false
}
]

//Aleret if string is wrong
function AlertNavigator(str = "Empty String or not a string") {
    let outPutBox = document.getElementById('AlertYou')
    outPutBox.innerHTML = `<p>`+str+`</p>`
}

//Check keypress
window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keyMap.length; i++) {
        if (keyMap[i].key == e.key) {
            keyMap[i].pressed = true
        }
    }
    if ( ! isNaN(Number(e.key)) && text.length <= 7) {
        text = text += e.key;
    } 
    if (keyMap[0].pressed && keyMap[1].pressed) {
        text = ""
    };
    if (keyMap[1].pressed) {
        text = text.slice(0, -1);
    }
    if (keyMap[2].pressed) {
        guessfun();
    }
    input.textContent = text;   
});

//Reset keymap
window.addEventListener('keyup', (e) => {
    for (let i = 0; i < keyMap.length; i++) {
        if (keyMap[i].key == e.key) {
            keyMap[i].pressed = false
        }
    }
});

//Run guessfun
button.addEventListener("click", (e) => {
    guessfun();
});


//The gussing game itself
function guessfun() {
    //Restart
    if (reNum) {
        theNum.textContent = "";
        text = "";
        tryNum = 1;
        input.textContent = text;
        buttonText.textContent = "Guess";
        number = Math.floor(Math.random() * (99999999 - 1) + 1);
        reNum = false;
    }
    else if (!reNum) {
        //If the number is gussed ask if the player wants to play again
        if (text == number) {
            AlertNavigator("Congratulations you guessed the number on try: " + tryNum);
            theNum.textContent = number;
            buttonText.textContent = "Retry";
            reNum = true;
        }
        //If the guess is less than the number, tell the player
        else if (text > number) {
            AlertNavigator("Your guess is > the corret number");
            text = "";
            input.textContent = text;
            tryNum++;
        }
        //If the guess is more than the number, tell the player
        else if (text < number) {
            AlertNavigator("Your guess is < the corret number");
            text = "";
            input.textContent = text;
            tryNum++;
        }
    }
};