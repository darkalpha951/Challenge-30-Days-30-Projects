let buttons = document.querySelectorAll("button")
let toastBox = document.querySelector("#toastBox")

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again`


buttons.forEach((button)=> {
    button.addEventListener("click", showToast)
})

function showToast(e) {
    let elem = document.createElement("div")
    elem.classList.add("toast")
    if (e.target.innerHTML == "Success") {
        elem.innerHTML = successMsg
    }
    if (e.target.innerHTML == "Error") {
        elem.innerHTML = errorMsg
        elem.classList.add("error")

    }
    if (e.target.innerHTML == "Invalid") {
        elem.innerHTML = invalidMsg
        elem.classList.add("invalid")
    }
    toastBox.appendChild(elem)

    setTimeout(() => {
        elem.remove()
    }, 6000);
}