let button = document.querySelector("button")

button.addEventListener("click", () => {
    if(navigator.geolocation) { // If browser supports the geolocation api
        button.innerHTML = "Allow to detect location"
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
    else {
        button.innerHTML = "Your browser does not support this!"
    }
})


function onSuccess(position) {
    button.innerHTML = "Detecting location..."
    let {latitude, longitude} = position.coords
    // 56921a4e428e4efab0c1aa9a3142bab9
    let api = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=56921a4e428e4efab0c1aa9a3142bab9`

    fetch(api).then(response => response.json()).then((result) => {
        let allDetails = result.results[0].components
        // console.log(allDetails)
        let {city, postcode, country} = allDetails
        button.innerHTML = `${city} ${postcode}, ${country}`
        console.table(allDetails)
    }).catch(() => {
        button.innerHTML = "Something went wrong"
    })
}

function onError(error) {
    if (error.code == 1) {
        button.innerHTML = "You denied the request"
    }
    else if (error.code == 2) {
        button.innerHTML = "Location not available"
    }
    else {
        button.innerHTML = "Something went wrong"
    }
    button.setAttribute("disabled", "true")
}