let screenshotButton = document.querySelector("#src-btn")
let screenshotPreview = document.querySelector(".src-preview")
let closeButton = screenshotPreview.querySelector("#close-btn")

const captureScreen = async () => {
    try {
        let stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true })
        let video = document.createElement("video")

        video.addEventListener('loadedmetadata', () => {
            let canvas = document.createElement('canvas')
            let ctx = canvas.getContext("2d")

            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            
            video.play() // Playing the video so that the drawn image won't be black or blank

            // Drawing an image from the captured video screen
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            stream.getVideoTracks()[0].stop() // Terminating the first video track of the stream

            screenshotPreview.querySelector("img").src = canvas.toDataURL()
            screenshotPreview.classList.add("show")
        })



        video.srcObject = stream

    } catch (error) {
        alert("Failed to Capture Screenshot!")
    }
}

closeButton.addEventListener("click", () => {
    screenshotPreview.classList.remove("show")
})
screenshotButton.addEventListener("click", captureScreen);