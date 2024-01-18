let counterTwitter = setInterval(countdownTwitter)
let counterYoutube = setInterval(countdownYoutube)
let counterFacebook = setInterval(countdownFacebook)

let indexTwitter = 0
let indexYoutube = 0
let indexFacebook = 0
let countTwitter = document.getElementById("numberTwitter")

function countdownTwitter() {
    let countTwitter = document.getElementById("numberTwitter")
    countTwitter.innerHTML = (indexTwitter+=20)

    if (indexTwitter == 1200) {
        clearInterval(counterTwitter)
    }
}

function countdownYoutube() {
    let countYoutube = document.getElementById("numberYoutube")
    countYoutube.innerHTML = (indexYoutube +=20)

    if (indexYoutube == 5000) {
        clearInterval(counterYoutube)
    }
}

function countdownFacebook() {
    let countFacebook = document.getElementById("numberFacebook")
    countFacebook.innerHTML = (indexFacebook+=20)

    if (indexFacebook == 7500) {
        clearInterval(counterFacebook)
    }
}