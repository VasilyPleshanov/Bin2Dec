const form = document.querySelector('.form')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const display = document.querySelector('.display')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const stringBin = String(input.value)
    console.log(stringBin)

    let reverseStringBin = ''
    for (let i = stringBin.length -1; i >= 0; i--) {
        reverseStringBin += stringBin[i]
    }
    console.log(reverseStringBin)

    let stringDec =''
    for (let i = 0; i < reverseStringBin.length; i++) {
        let numberDec = Number(reverseStringBin[i]) * Math.pow(2, i)
        console.log(numberDec)
        stringDec = Number(stringDec) + numberDec
    }

    display.innerHTML = stringDec
    console.log(stringDec)
})