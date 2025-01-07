let play = document.querySelector(".play")
let pause = document.querySelector(".pause")

let btn = document.querySelector(".btn")
let reset = document.querySelector(".reset")

btn.addEventListener("click", () => {
    if (play.classList.contains("hide")) {
        pause.classList.add("hide")
        play.classList.remove("hide")
        stopTimer()
    }
    else  if (pause.classList.contains("hide")) {
        play.classList.add("hide")
        pause.classList.remove("hide")
        startTimer()
    }
        
})

reset.addEventListener("click", resetTimer)


let timerDisplay = document.querySelector("p");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timerInterval; // Variable to store the timer interval

function startTimer() {
    timerInterval = setInterval(() => {
        seconds += 1

        if (seconds == 60) {
            seconds = 0
            minutes += 1
        }
        if (minutes == 60) {
            minutes = 0
            hours += 1
        }

        timerDisplay.textContent = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval)
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value
}

function resetTimer() {
    stopTimer()
    hours = 0
    minutes = 0
    seconds = 0
    timerDisplay.textContent = "00 : 00 : 00"
    pause.classList.add("hide")
    play.classList.remove("hide")
}