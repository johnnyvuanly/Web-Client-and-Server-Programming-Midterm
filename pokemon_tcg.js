// alert('Testing connection to html')

//let url = 'https://api.pokemontcg.io/v1/cards/'
let url = 'https://api.pokemontcg.io/v1/cards?setCode'

console.log(url)

let cardInput = document.querySelector('#card')
let setInput = document.querySelector('#set')
let checkButton = document.querySelector('#check')
let resultDisplay = document.querySelector('#answer')

// TODO display if the card the user searched for is legal or not

checkButton.addEventListener('click', function() {
    let cards = cardInput.value
    let sets = setInput.value

    fetch(url).then( (res) => {
        console.log(res)
        return res.json()
    }).then( cardData => {
        console.log(cardData)
        let findNumber = cardData.name
    })
})

// If user enters a promo card for the set then what should you do?
// 