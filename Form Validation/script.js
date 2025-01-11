let nameError = document.querySelector("#name-error")
let phoneError = document.querySelector("#phone-error")
let mailError = document.querySelector("#email-error")
let messageError = document.querySelector("#message-error")
let submitError = document.querySelector("#submit-error")


function validateName() {
    let contactName = document.querySelector("#contact-name")
    let nameValue = contactName.value.trim()
    if (nameValue.length == 0) {
        nameError.innerHTML = "Name is required"
        return false;
    }
    if (!nameValue.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = "Please enter full name"
        return false;
    }
    nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}

function validatePhone() {
    let phone = document.querySelector("#contact-phone").value

    if(phone.length == 0 || !phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = `Phone no is required`
        return false;
    }
    if(phone.length != 10) {
        phoneError.innerHTML = `Phone no should be 10 digits`
        return false;
    }

    phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}

function validateMail() {
    let mail = document.querySelector("#contact-mail").value
    
    if (mail.length == 0) {
        mailError.innerHTML = "Email is required"
        return false;
    }
    if (!mail.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        mailError.innerHTML = "Enter Invalid"
        return false
    }
    mailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}


function validateMessage() {
    let message = document.querySelector("#contact-message").value

    let remainingLetters = 30-message.length

    if (remainingLetters > 0) {
        messageError.innerHTML = `${remainingLetters} letters remaining`
        return false;
    }

    messageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}



function validateForm() {
    if (!validateName() || !validatePhone() || !validateMail()  || !validateMessage()) {
        submitError.style.display = "block"
        submitError.innerHTML  = `Please fix the error to submit`
        setTimeout(() => {
            submitError.style.display = "none"
        }, 3000);
        return false;
    }
}