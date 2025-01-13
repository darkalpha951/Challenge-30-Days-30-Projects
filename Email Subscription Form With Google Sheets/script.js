const scriptURL = 'https://script.google.com/macros/s/AKfycbyEb1dFQ-HWl2hJ8UYYweE5ixUDBPWZvi5sWgNTG6EHlieOl24OBPZY6hnRuVLGBm32/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            document.querySelector("span").innerHTML = "Thank You For Subscribing!"
            setTimeout(() => {
                document.querySelector("span").innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message));
})



