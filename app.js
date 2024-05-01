
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const hourDisplay = document.querySelector(".hour .count");
const minuteDisplay = document.querySelector(".minute .count");
const secondDisplay = document.querySelector(".second .count");
const startButton = document.querySelector(".btnStart");

let alarmClock = document.querySelector(".wrapper .clock");

let hours, minutes, seconds, countdown;

startButton.addEventListener("click", function() {

hours = parseInt(hourInput.value) || 0;
minutes = parseInt(minuteInput.value) || 0;
seconds = parseInt(secondInput.value) || 0;

startCountdown();

});

function startCountdown() {
countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
if (seconds > 0) {
    disabledStartBtn();
    seconds--;
} else {
    if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            clearInterval(countdown);
            alarmClock.style.display = "block"
        }
    }
}

if (hours<10) {
    hourDisplay.textContent = `0${hours}`;
}else{
    hourDisplay.textContent = `${hours}`;
}

if (minutes<10) {
    minuteDisplay.textContent = `0${minutes}`;
}else{
    minuteDisplay.textContent = `${minutes}`;
}

if (seconds<10) {
    secondDisplay.textContent = `0${seconds}`;
}else{
    secondDisplay.textContent = `${seconds}`;
}

}

function disabledStartBtn() {
if (hourInput.value.trim() !== "" || secondInput.value !== "" || minuteInput.value !=="") {
    startButton.setAttribute("disabled","disabled")
}else{
    startButton.removeAttribute("disabled","disabled")
}
}