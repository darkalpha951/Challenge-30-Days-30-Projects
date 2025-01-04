const api = `EMNKCK6yD0ipmnmKtpxiiA==bpuGv6RE7FaKRPNu`
const url = `https://api.api-ninjas.com/v1/quotes`
let newQuoteBtn = document.querySelector(".newQuote")
let quote = document.querySelector(".quote")
let author = document.querySelector(".author")
let tweet = document.querySelector(".tweet")

const headers = {
    'X-Api-Key': api
}

async function resp () {
    let a = await fetch(url, {method: "GET", headers: headers})
    let res = await a.json()
    return res
}

const main = async() => {
    let response = await resp()
    quote.innerHTML = `"${response[0].quote}"`
    author.innerHTML = `~ ${response[0].author}`
}


newQuoteBtn.addEventListener('click', main)
tweet.addEventListener('click', () => {
    window.open(`https://x.com/compose/tweet?text=${encodeURIComponent(quote.innerHTML + "\n" + author.innerHTML)}`, "_blank", "width=800, height=400")
})