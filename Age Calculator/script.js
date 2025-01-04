let input = document.querySelector("input")
let calculate  = document.querySelector("button")
let father = document.querySelector(".father")

window.onload = calculate.addEventListener("click", ageCalculator)
function ageCalculator() {

    let elem = document.querySelector(".age")
    if (!elem) {
        elem = document.createElement("div");
        elem.classList.add("age");
        father.appendChild(elem);
    }
    elem.innerHTML = `You are
            <span class="yellow">x</span>
            years,
            <span class="yellow">y</span>
            months,
            <span class="yellow">z</span>
            days old.`

    
    // dob input by user 
    let dob = input.value.split("-")
    let year = parseInt(dob[0], 10)
    let month = parseInt(dob[1], 10)
    let date = parseInt(dob[2], 10)
    if (isNaN(year) || isNaN(month) || isNaN(date)) {
        document.getElementsByClassName('age')[0].innerHTML = "Date to select karle"
        return
    }
    
    let today = new Date()
    let todayDate = today.getDate() 
    let todayMonth = today.getMonth() + 1
    let todayYear = today.getFullYear() 
    let yearOld = todayYear - year
    
    
    let monthOld = todayMonth - month
    if (monthOld < 0) {
        monthOld += 12
        yearOld -= 1
    }

    // Calculate day difference
    let dateOld = todayDate - date
    if (dateOld < 0) {
        let previousMonth = new Date(todayYear, todayMonth - 1, 0) // Get the last day of the previous month
        dateOld += previousMonth.getDate()  // Add the number of days in the previous month
        monthOld -= 1
        if (monthOld < 0) {
            monthOld += 12
            yearOld -= 1
        }
    }
    if (yearOld < 0) {
        document.getElementsByClassName('age')[0].innerHTML = "Pagal ho gaya hai kya?"
        return
    }

    let resultOld = [yearOld, monthOld, dateOld]
    console.log(yearOld)
    console.log(monthOld)
    console.log(dateOld)
    let result = Array.from(document.getElementsByClassName("yellow"))
    for (i in result) {
        result[i].innerHTML = resultOld[i]
    }
}