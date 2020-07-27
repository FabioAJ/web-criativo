/*
Author: Fábio Augusto Amaro Jaime
Date: 27/07/2020
Objective: Site that simulates a light switch, skills training with HTML, CSS and JS. Note: flaticon icons.
*/

var on = false;
var audio = new Audio("sound/switch.mp3");

function onOff(img) {
    if(on == false) {
        document.getElementById("interruptor").src = "img/on.png";
        document.getElementById("background").style = "background-color:white";
        document.getElementById("interruptorText").style = "color:#252525";
        audio.play();
        on = true;
    } else if(on == true) {
        document.getElementById("interruptor").src = "img/off.png";
        document.getElementById("background").style = "background-color:#252525";
        document.getElementById("interruptorText").style = "color:#white";
        audio.play();
        on = false;
    }
}