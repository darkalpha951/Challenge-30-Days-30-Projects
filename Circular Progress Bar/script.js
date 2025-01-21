let number = document.getElementById("number")
let counter = 0

setInterval(() => {
    
    if (counter == 65) {
        clearInterval()
    }
    else {
        counter += 1
        number.innerHTML = counter + "%"
    }

}, 30.77); // 2000/65 ms = 30.77 ms