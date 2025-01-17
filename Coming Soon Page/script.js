let countDownDate = new Date("Oct 16, 2025 00:00:00")

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now
    
    let days = Math.floor(distance/(1000*60*60*24))
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60))
    let seconds = Math.floor((distance%(1000*60))/1000)

    document.getElementById("days").innerHTML = corrector(days)
    document.getElementById("hours").innerHTML = corrector(hours)
    document.getElementById("minutes").innerHTML = corrector(minutes)
    document.getElementById("seconds").innerHTML = corrector(seconds)

    if (distance < 0) {
        clearInterval(x)

        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
    }

}, 1000)


function corrector(value) {
    if (parseInt(value) < 10) {
        return `0${value}`
    }
    return `${value}`
}