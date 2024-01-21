let counterOne = setInterval(countOne)
let counterTwo = setInterval(countTwo)
let counterThree = setInterval(countThree)
let counterFour = setInterval(countFour)
let counterFive = setInterval(countFive)

let indexOne = 0
let indexTwo = 0
let indexThree = 0
let indexFour = 0
let indexFive = 0

//Coffee 1
function countOne() {
    let countOne = document.getElementById("numberOne")
    countOne.innerHTML = (indexOne+=5) 

    if (indexOne == 1200) {
        clearInterval(counterOne) //break of the function
    }
}

//Coffee 2
function countTwo() {
    let countTwo = document.getElementById("numberTwo")
    countTwo.innerHTML = (indexTwo +=10)

    if (indexTwo == 5000) {
        clearInterval(counterTwo)
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
    countFive.innerHTML = (indexFive+=5)

    if (indexFive == 4500) {
        clearInterval(counterFive)
    }
}
