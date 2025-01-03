let father = document.querySelector(".father")
let button = document.querySelector("button")
let input = document.querySelector("input")
let trash = document.querySelector(".trash")
let note = document.querySelector(".note")

// add a note
function addNote() {
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `<p contenteditable="true" class="input-box"></p>
    <div class="trash">
    <i class="fa-solid fa-trash"></i>
    </div>`
    
    father.appendChild(note)

    let newNote = note.querySelector(".input-box")
    newNote.addEventListener("keyup", updateStorage)
    updateStorage()
}
button.addEventListener('click', addNote)

// delete the note
father.addEventListener(('click'), (e) => {
    if (e.target.closest(".trash")) {
        let trashNote = e.target.closest('.note')
        trashNote.remove()
        updateStorage()
    }
})

// update localStorage
function updateStorage() {
    let arr = []
    document.querySelectorAll(".input-box").forEach((nt) => {
        arr.push(nt.innerHTML)
    })
    localStorage.setItem("notes", JSON.stringify(arr))
}

// show notes
function showNotes() {
    let savedNotes = JSON.parse(localStorage.getItem("notes"))
    if (savedNotes && savedNotes.length > 0) {
        savedNotes.forEach((content) => {
            let note = document.createElement("div")
            note.classList.add("note")
            note.innerHTML = `<p contenteditable="true" class="input-box">${content}</p>
                                <div class="trash">
                                    <i class="fa-solid fa-trash"></i>
                                </div>`
            father.appendChild(note)      
            
            let newNote = note.querySelector(".input-box")
            newNote.addEventListener("keyup", updateStorage)
        })
    }
}

window.onload = showNotes