let input = document.querySelector("input")

let eye = document.querySelector(".eye")
let eye_slash = document.querySelector(".eye_slash")

eye.addEventListener("click", () => {
    input.type = "password"
    eye.classList.toggle("hide")
    eye_slash.classList.toggle("hide")
})

eye_slash.addEventListener("click", () => {
    input.type = "text"
    eye.classList.toggle("hide")
    eye_slash.classList.toggle("hide")
})