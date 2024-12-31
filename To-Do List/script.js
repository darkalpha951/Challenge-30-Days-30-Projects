let input  = document.querySelector("input")
// console.log(input)


let todos = document.getElementsByClassName("todos")[0]
// console.log(todos)

document.addEventListener("DOMContentLoaded", () => {
    for (let i = localStorage.length - 1 ; i>=0 ; i--) {
            let key = localStorage.key(i)
            let taskdata = JSON.parse(localStorage.getItem(key))
            todos.innerHTML +=` <div class="todo" data-key = "${key}">
                                <div class="uncheck ${taskdata.completed ? "hide" : ""}"><i class="fa-regular fa-circle"></i></div>
                                <div class="check ${taskdata.completed ? "" : "hide"}"><i class="fa-solid fa-circle-check"></i></div>
                                <div class="task ${taskdata.completed ? "line-through" : ""}">${taskdata.value}</div>
                                <div class="cross"><i class="fa-solid fa-xmark"></i></div>
                                </div>
                                `
            addDeleteListener()
            addLineThroughEventListener()
        }
})

let button = document.querySelector("button")
button.addEventListener('click', () => {
        let taskdata = {
            value: input.value,
            completed: false
        }

        let key = localStorage.length
        localStorage.setItem(Number.parseInt(key), JSON.stringify(taskdata))
        input.value = ""
        todos.innerHTML +=` <div class="todo" data-key = "${key}">
                                <div class="uncheck"><i class="fa-regular fa-circle"></i></div>
                                <div class="check hide"> <i class="fa-solid fa-circle-check"></i></div>
                                <div class="task">${taskdata.value}</div>
                                <div class="cross"><i class="fa-solid fa-xmark"></i></div>
                                </div>
                                `     

        addDeleteListener()
        addLineThroughEventListener()
 })
                        
                        



// TO DELETE ANY TODO

function addDeleteListener() {
    let crosses = document.querySelectorAll(".cross")
    crosses.forEach((cross) => {
        cross.removeEventListener('click', handledelete)
        cross.addEventListener('click', handledelete)
    });
}


function handledelete(e) {
    let todoDiv = e.target.closest('.todo')
    let key = todoDiv.getAttribute("data-key")
    localStorage.removeItem(key)
    todoDiv.remove()
}

function addLineThroughEventListener() {
    let tasks = document.querySelectorAll(".task")
    tasks.forEach((task) => {
        task.addEventListener('click', (e) => {
            let t = e.target.closest('.todo')
            let taskElement = e.target
            let key = t.getAttribute("data-key")

            taskElement.classList.toggle("line-through")
            t.children[0].classList.toggle("hide")
            t.children[1].classList.toggle("hide")

            // update state in localstorage
            let taskdata = JSON.parse(localStorage.getItem(key))
            taskdata.completed = taskElement.classList.contains("line-through")
            localStorage.setItem(key, JSON.stringify(taskdata))
    
        })
    })

    let unchecks = document.querySelectorAll(".uncheck")
    unchecks.forEach((uncheck) => {
        uncheck.addEventListener("click", (e) => {
            let t = e.target.closest('.todo')
            let task = t.querySelector('.task')
            let key = t.getAttribute("data-key")


            t.children[0].classList.toggle("hide")
            t.children[1].classList.toggle("hide")
            task.classList.toggle("line-through")

            
            // update state in localstorage
            let taskdata = JSON.parse(localStorage.getItem(key))
            taskdata.completed = task.classList.contains("line-through")
            localStorage.setItem(key, JSON.stringify(taskdata))
        })
    })

    let checks = document.querySelectorAll(".check")
    checks.forEach((check) => {
        check.addEventListener("click", (e) => {
            let t = e.target.closest('.todo')
            let task = t.querySelector('.task')
            let key = t.getAttribute("data-key")


            t.children[0].classList.toggle("hide")
            t.children[1].classList.toggle("hide")
            task.classList.toggle("line-through")

            
            // update state in localstorage
            let taskdata = JSON.parse(localStorage.getItem(key))
            taskdata.completed = task.classList.contains("line-through")
            localStorage.setItem(key, JSON.stringify(taskdata))
        })
    })
}