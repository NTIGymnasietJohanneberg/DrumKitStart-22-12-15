//Drum kit

//alert("Hello!");
//Detectin button pressed
let numberOfDrumButton = document.querySelectorAll('.drum').length; 

for (let i = 0; i < numberOfDrumButton; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function checkClick() {


        /* console.log(this);
        alert('Funkar!!');
        this.style.color = "white"; */

        let buttonInnerHTML = this.innerHTML;

        //console.log(buttonInnerHTML);

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}//End eventlistener for button pressed

//Detecting keyPressed

document.addEventListener('keydown', function (keyPressed) {
    
    //alert('key pressed down!');
    //console.log(keyPressed);

    makeSound(keyPressed.key);
    buttonAnimation(keyPressed.key);

});
//End keyPressed detection




//makeSound function start

function makeSound(key) {

    switch (key) {

        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let hihat = new Audio("sounds/open-hihat.mp3");
            hihat.play();
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "m":
            let crasch = new Audio("sounds/crash.mp3");
            crasch.play();
            break;
        case "n":
            let clap = new Audio("sounds/clap.mp3");
            clap.play();
            break;
        default:
            //console.log(buttonInnerHTML);
            break;

    }


}//End make sound function


/*
*Start button animation function
*/

function buttonAnimation(currentKey) {

   let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
















/**
 * Higher order function = adEventListener('arg', function(e) {
 * Gör något...
 * })
 * 
 */

//Add function
function add(num1, num2) {

    return num1 + num2;

}

//Subtract function
function sub(num1, num2) {
    return num1 - num2;
}

//Multiply function
function mltiply(num1, num2) {

    return num1 * num2;
}

//Divide function

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(4, 5, add));
console.log(calculator(4, 5, mltiply));