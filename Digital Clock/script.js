let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


// console.log(currentHours, currentMinutes, currentSeconds)

setInterval(() => {
    let currentTime = new Date()
    let currentHours = currentTime.getHours()
    let currentSeconds = currentTime.getSeconds()
    let currentMinutes = currentTime.getMinutes()
    hrs.innerHTML = formatDigits(currentHours)
    min.innerHTML = formatDigits(currentMinutes)
    sec.innerHTML = formatDigits(currentSeconds)
}, 1000);

function formatDigits(value) {
    return value < 10 ? `0${value}` : value
}