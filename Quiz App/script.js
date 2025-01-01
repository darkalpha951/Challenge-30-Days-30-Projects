let arr = [
    ["1. Which is the largest animal in the world?", "Shark", "Blue Whale", "Elephant", "Giraffe", "Blue Whale"],
    ["2. Which is the smallest country in the world?", "Vatican City", "Bhutan", "Nepal", "Sri Lanka", "Vatican City"],
    ["3. Which is the largest desert in the world?", "Kalahari", "Gobi", "Sahara", "Antarctica", "Antarctica"],
    ["4. Which is the smallest continent in the world?", "Asia", "Australia", "Arctic", "Africa", "Australia"],
]

let question = document.querySelector(".question")
let options = Array.from(document.getElementsByClassName("option"))
console.log(options[0].innerHTML)
let button = document.querySelector(".button")

let score = 0

function waitForClick () {
    return new Promise((resolve, reject) => {
        button.addEventListener("click", () => {
            button.classList.add("hide")
            options.forEach((option) => {
                option.removeEventListener('click', changeColor)
                option.style.background = ""
                option.style.color = ""
                option.setAttribute("data-correct", false)
                option.classList.remove("no_cursor")
                option.style.opacity = ""
            })
            resolve()
        })
    })
}

const addOptionListener = () => {
    options.forEach((option) => {
        option.addEventListener("click", changeColor)
        
    })
}

const processItems = async () => {
    for (ques in arr) {
        question.innerHTML = arr[ques][0]
        options[0].innerHTML = arr[ques][1]
        options[1].innerHTML = arr[ques][2]
        options[2].innerHTML = arr[ques][3]
        options[3].innerHTML = arr[ques][4]


        options.forEach((option, index) => {
            let text = option.innerHTML
            if (text == arr[ques][5]) {
                option.setAttribute("data-correct", "true")
            }
            else {
                option.setAttribute("data-correct", "false")
            }
        })

        addOptionListener()
        let a  = await waitForClick()
    }

    options.forEach((option) => {
        option.classList.add("hide")
    })
    question.innerHTML = `Your score is: ${score}/4`
    button.classList.remove("hide")
    button.innerHTML = "<button>Play Again</button>"
    button.addEventListener("click", () => {
        location.reload()
    })
}

processItems()
    

function changeColor(e) {
        button.classList.remove("hide")
        let optionDiv = e.target
        if (optionDiv.getAttribute("data-correct") == "true") {
            optionDiv.style.background = "green"
            optionDiv.style.color = "white"
            score += 1
        }
        else {
            optionDiv.style.background = "red"
            optionDiv.style.color = "white"
        }
        options.forEach((op) => {
            op.classList.add("no_cursor")
            if (op.getAttribute("data-correct") == "true") {
                op.style.background = "green"
                op.style.color = "white"
                op.style.opacity = 1
            }
        })
    }