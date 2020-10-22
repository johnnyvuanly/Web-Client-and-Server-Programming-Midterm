// alert('Testing connection to html')

let cardInput = document.querySelector('#card')
let setInput = document.querySelector('#set')
let checkButton = document.querySelector('#check')
let resultDisplay = document.querySelector('#answer')

// TODO display if the card the user searched for is legal or not

checkButton.addEventListener('click', function() {
    let cards = cardInput.value
    let sets = setInput.value

    url = `https://api.pokemontcg.io/v1/cards?name=${cards}&set=${sets}`

    fetch(url).then( (res) => {
        console.log(res)
        return res.json()
    }).then( cardData => {
        console.log(cardData) // Shows the object of what the user inputed
        // TODO check whether the card the user looked for is standard legal or not
        // TODO display the image of the card
        // cardData.forEach(function(element) {
        //     element.imageUrlHiRes
        // }) 
    }).catch(error => {
        console.log(error)
        alert(`Couldn't connect to the pokemontcg.io API`)
    })
})

// If user enters a promo card for the set then what should you do?
// 

// https://api.pokemontcg.io/v1/cards?name=charizard
// https://api.pokemontcg.io/v1/sets?name=dragon
// https://api.pokemontcg.io/v1/cards?name=charizard&set=dragon
// https://api.pokemontcg.io/v1/sets/sm75

