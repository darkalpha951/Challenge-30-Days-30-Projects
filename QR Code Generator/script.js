let btn = document.querySelector("button")
window.onload = reset()

function reset() {
    document.querySelector(".qr").classList.add("hide")
    btn.addEventListener("click", getQRCode)
}

btn.addEventListener("click", getQRCode)

function getQRCode() {
    const qrData = document.querySelector("input").value;
    if (!qrData.trim()) {
        console.log("Dimag hai ki nhi?")
        return
    }
    if (qrData) {
        document.querySelector(".qr").classList.remove("hide")
        QRCode.toCanvas(document.getElementById("qrcode"), qrData, function (error) {
            if (error) {
                console.error(error)
            }
            else {
                console.log("QR code generated successfully!")
            }
        })
    }
}