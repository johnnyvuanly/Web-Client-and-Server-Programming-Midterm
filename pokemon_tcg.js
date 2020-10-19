// alert('Testing connection to html')

let url = 'https://api.pokemontcg.io/v1/cards/'
let url2 = 'https://api.pokemontcg.io/v1/sets'

console.log(url, url2)

let cardInput = document.querySelector('#card')
let setInput = document.querySelector('#set')
let checkButton = document.querySelector('#check')
let resultDisplay = document.querySelector('#answer')

checkButton.addEventListener('click', function() {
    let cards = cardInput.value
    let sets = setInput.value

    fetch(url).then( (res) => {
        console.log(res)
        return res.json()
    })
})