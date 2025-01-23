let lists = document.querySelectorAll(".list")
let leftBox = document.querySelector(".left")
let rightBox = document.querySelector(".right")
let selected = null


lists.forEach((list) => {
    list.addEventListener("dragstart", (e) => {
        selected = e.target
    })
})

rightBox.addEventListener('dragover', (e) => {
    e.preventDefault()
})
rightBox.addEventListener("drop", (e) => {
    rightBox.appendChild(selected)
    leftBox.removeChild(selected)
    selected = null
})


leftBox.addEventListener('dragover', (e) => {
    e.preventDefault()
})
leftBox.addEventListener("drop", (e) => {
    leftBox.appendChild(selected)
    rightBox.removeChild(selected)
    selected = null
})