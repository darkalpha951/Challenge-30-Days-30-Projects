let pass = document.querySelector("#password")
let msg = document.querySelector("#message")
let strength = document.querySelector("#strength")


pass.addEventListener('input', () => {
    let length = pass.value.length
    if (length > 0) {
        msg.style.display = "block"
    }
    else {
        msg.style.display = "none"
    }

    if (length < 4) {
        strength.innerHTML = "weak"
        pass.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    }
    if (length > 4 && length < 8) {
        strength.innerHTML = "medium"
        pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    if (length > 8) {
        strength.innerHTML = "strong"
        pass.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    }
})