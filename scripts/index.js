// document.querySelector("button").addEventListener("click", handleClick);
// finds the first button in the document(i.e w),then adds a event listener so it listens the click on that button,and when it happens it will call the function mentioned and will run the code written inside the function

// function handleClick() {
//     alert("I got clicked!");
// }
// or we can call an anonymous function -without named
// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked!")
// });

//FOR ALL BUTTONS
// document.querySelector(".set").addEventListener("click", function() {
//     alert("I got clicked!")
// });


//SOUND,INSTEAD OF ALERT
// document.querySelector(".set").addEventListener("click", function() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });

// BUTTONS IDENTITY
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         this.style.color = "white";
//     });
// }
// when we click on the button,color changes to white


// BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}
// KEYBOARD-PRESS

// keyboard
// document.addEventListener("keypress", function() {
//         alert("key pressed");
//     }) //koi bhi key dabayenge toh alert aajayega
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    //console(in dev tools) show krega,kounsa key dabaya
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }
}
//HIGHER-ORDER-FUNCTION-->Which can take a function as an argument
// the one passed in higher order function are called CALLBACK-FUNCTION
/* EXPLANATION OF CALLBACK FN AND EVENT
 function anotherAddEventListener(typeOfEvent,Callback){
 Detect-event-code...
 var eventThat Happened={
eventType:"keypress";
key="p";
durationOfKeypress:2
 }
 }
 AS CALLBACK CAN READ EACH EVENT
 if(eventThatHappened.eventType===typeOfEvent){}
 callback(eventThatHappened);
}
 can pass the event object to see what event occurred
*/

// ANIMATION(FLASH)
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    //drum pe dabaane se light color ka hojayega drum
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    // drum wapas same color ka hojaye dabane ke baad(pressed class hatjaye)
}