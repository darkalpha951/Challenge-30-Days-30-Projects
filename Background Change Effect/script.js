let imgBox = document.querySelector(".img-box")
let imgWrap = document.querySelector(".img-wrap")
let originalImg = document.querySelector("#originalImg")
let line = document.querySelector("#line")


originalImg.style.width = imgBox.offsetWidth + "px"

let leftSpace = imgBox.offsetLeft

imgBox.addEventListener("mousemove", (e) => {
    let widthOnLeft = (e.pageX - leftSpace) + "px"
    imgWrap.style.width = widthOnLeft
    line.style.left = widthOnLeft
})