let amountChanged = 0

document.getElementById('clickNum').textContent = `The background has been 
changed ${amountChanged} times!`

const redClick = document.getElementById('redClick')

redClick.addEventListener('click', () => {
    if(document.body.style.backgroundColor !== 'red') {
        amountChanged ++
    }
    document.getElementById('clickNum').textContent = `The background has been changed ${amountChanged} times!`
    document.body.style.backgroundColor = 'red'
})

const blueClick = document.getElementById('blueClick')

blueClick.addEventListener('click', () => {
    if(document.body.style.backgroundColor !== 'blue') {
        amountChanged ++
    }
    document.getElementById('clickNum').textContent = `The background has been changed ${amountChanged} times!`
    document.body.style.backgroundColor = 'blue'
})

const greenClick = document.getElementById('greenClick')

greenClick.addEventListener('click', () => {
    if(document.body.style.backgroundColor !== 'green') {
        amountChanged ++
    }
    document.getElementById('clickNum').textContent = `The background has been changed ${amountChanged} times!`
    document.body.style.backgroundColor = 'green'
})

const randomClick = document.getElementById('randomClick')

randomClick.addEventListener('click', () => {
    amountChanged ++
    document.getElementById('clickNum').textContent = `The background has been changed ${amountChanged} times!`
    document.body.style.backgroundColor = randomRgb()
})

function randomRgb() {
    const red = Math.ceil(Math.random() * 255) 
    const green = Math.ceil(Math.random() * 255)
    const blue = Math.ceil(Math.random() * 255)
    
    return `rgb(${red} ${green} ${blue})`
}





