const form = document.querySelector('.form')
const input = document.querySelector('.input')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let reverseStringBin = ''
    for (let i = String(input.value).length -1; i >= 0; i--) {
        reverseStringBin += String(input.value)[i]
    }
    console.log(reverseStringBin)

    let stringDec =''
    for (let i = 0; i < reverseStringBin.length; i++) {
        let numberDec = Number(reverseStringBin[i]) * Math.pow(2, i)
        console.log(numberDec)
        stringDec = Number(stringDec) + numberDec
    }

    input.value = stringDec
    console.log(stringDec)
})

input.addEventListener('keydown', (e) => {
    if (e.keyCode == 8 || e.keyCode == 13) {
        return
    } else {
        if ((e.keyCode < 48 || e.keyCode > 49) && (e.keyCode < 96 || e.keyCode > 97 )) {
            alert('Введите число 0 или 1')
            e.preventDefault()
        }
    }
})