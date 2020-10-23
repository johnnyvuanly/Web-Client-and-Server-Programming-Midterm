// alert('Testing connection to html')

let cardInput = document.querySelector('#card')
let setInput = document.querySelector('#set')
let numberInput = document.querySelector('#number')
let checkButton = document.querySelector('#check')
let resultDisplay = document.querySelector('#answer')

// TODO display if the card the user searched for is legal or not

checkButton.addEventListener('click', function() {
    let userCards = cardInput.value
    let sets = setInput.value
    let userNumber = numberInput.value

    url = `https://api.pokemontcg.io/v1/cards?name=${userCards}&set=${sets}&number=${userNumber}`

    fetch(url).then( (res) => {
        // console.log(res)
        return res.json()
    }).then( cardData => {
        console.log(cardData) // Shows the object of what the user inputed
        // TODO check whether the card the user looked for is standard legal or not
        // TODO display the image of the card
        let cardResponse = cardData.cards
        console.log(cardResponse)
        let cardImage = cardResponse[0].imageUrl
        console.log(cardImage)
        let setName = cardResponse[0].set
        console.log(setName)

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

