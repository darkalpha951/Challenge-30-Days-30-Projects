let button = document.querySelector("button")
let input = document.querySelector("input")
let copy = document.getElementsByClassName("copy")[0]

button.addEventListener('click', generatePassword)

let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', 
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
   
let length = 10
function generatePassword() {
    let password = []
    for (i = 0; i < length; i++) {
        let randomElement = characters[Math.floor(Math.random() * characters.length)]
        password.push(randomElement)
    }
    password = password.join("")
    console.log(password)

    input.value = password


    copy.addEventListener('click', () => {
        input.select()
        input.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(input.value)
    })

}