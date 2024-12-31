const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
console.log(searchBox)
console.log(searchBtn)




const response = async(url) => {
    try {
        let a = await fetch(url)
        if (!a.ok) {
            throw new Error(`HTTP error! Status: ${a.status}`)
        }
        let res = await a.json()
        console.log(res)
        return res
    } catch (error) {
        console.log("Error fetching url: " + error.message)
        return null
    }
}

let temp = document.getElementsByClassName('temp')[0]
let dcity = document.getElementsByClassName('city')[0]
let humid = document.getElementById("humid_percentage")
let wind = document.getElementById("wind_speed")

const mainFunc = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98af5145aa14588235f09455bd8a4a8a`
    let res = await response(url)
    if (res != null) {
        let ktemp = res.main.temp
        let ctemp = (ktemp - 273.15)
        temp.innerHTML = `${Math.round(ctemp)}°C`
        dcity.innerHTML = res.name
        humid.innerHTML = `${res.main.humidity}%`
        wind.innerHTML = `${res.wind.speed}km/h`
    }

}


searchBtn.addEventListener("click", () => {
    mainFunc(searchBox.value)

})