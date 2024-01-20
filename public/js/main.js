let counterTwitter = setInterval(countdownTwitter)
let counterYoutube = setInterval(countdownYoutube)
let counterThree = setInterval(countThree)
let counterFour = setInterval(countFour)
let counterFive = setInterval(countFive)

let indexTwitter = 0
let indexYoutube = 0
let indexThree = 0
let indexFour = 0
let indexFive = 0

//Coffee 1
function countdownTwitter() {
    let countTwitter = document.getElementById("numberTwitter")
    countTwitter.innerHTML = (indexTwitter+=5) 

    if (indexTwitter == 1200) {
        clearInterval(counterTwitter) //break of the function
    }
}

//Coffee 2
function countdownYoutube() {
    let countYoutube = document.getElementById("numberYoutube")
    countYoutube.innerHTML = (indexYoutube +=10)

    if (indexYoutube == 5000) {
        clearInterval(counterYoutube)
    }
}

//Coffee 3
function countThree() {
    let countThree = document.getElementById("numberThree")
    countThree.innerHTML = (indexThree+=12)

    if (indexThree == 7500) {
        clearInterval(counterThree)
    }
}

//Coffee 4
function countFour() {
    let countFour = document.getElementById("numberFour")
    countFour.innerHTML = (indexFour+=10)

    if (indexFour == 1500) {
        clearInterval(counterFour)
    }
}

//Coffee 5
function countFive() {
    let countFive = document.getElementById("numberFive")
    countFive.innerHTML = (indexFive+=1)

    if (indexFive == 500) {
        clearInterval(counterFive)
    }
}
