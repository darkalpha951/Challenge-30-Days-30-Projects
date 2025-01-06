let audio = new Audio("./song/song.mp3")
let button = document.querySelector("button")
let slider = document.querySelector(".slider")
let play = document.querySelector(".play")
let pause = document.querySelector(".pause")


function playSong(e) {
    
    if (audio.paused) {
        audio.play()
        play.classList.add("hide")
        pause.classList.remove("hide")
    }
    else {
        audio.pause()
        play.classList.remove("hide")
        pause.classList.add("hide")
    }
}
button.addEventListener('click', playSong)


slider.addEventListener("input", () => {
    let value = slider.value
    let duration = audio.duration
    audio.currentTime = (value/100)* audio.duration
    audio.play()
    play.classList.add("hide")
    pause.classList.remove("hide")
})

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime
    slider.value = (currentTime/audio.duration) * 100
})