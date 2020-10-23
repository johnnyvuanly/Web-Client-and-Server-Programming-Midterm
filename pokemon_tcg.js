// alert('Testing connection to html')

let cardInput = document.querySelector('#card')
let setInput = document.querySelector('#set')
let numberInput = document.querySelector('#number')
let checkButton = document.querySelector('#check')
let resultDisplay = document.querySelector('#answer')
let img = document.querySelector('#card-image')

// TODO display if the card the user searched for is legal or not

checkButton.addEventListener('click', function() {
    let userCards = cardInput.value
    let sets = setInput.value
    let userNumber = numberInput.value

    // TODO Validation

    url = `https://api.pokemontcg.io/v1/cards?name=${userCards}&set=${sets}&number=${userNumber}`

    fetch(url)
    .then( (res) => {
        // console.log(res)
        return res.json()
    })
    .then( cardData => {
        console.log(cardData) // Shows the object of what the user inputed or array(s) of the cards returned
        
        let cardResponse = cardData.cards 
        console.log(cardResponse)
        let cardImageURL = cardResponse[0].imageUrl // Shows the array with an object of the card data, grabs imageUrl key and shows its value
        console.log(cardImageURL)
        let setName = cardResponse[0].set // grabs the set key and shows its value
        console.log(setName)

        // This is how you set the src for an image in HTML using JavaScript
        img.src = cardImageURL

        return fetch(`https://api.pokemontcg.io/v1/sets/?name=${setName}`)

    })
    .then( response => response.json())
    .then( setData => {
        console.log(setData) // Grabs object
        let setResponse = setData.sets // Grabs the key sets within the obejct and gives us array of set data
        console.log(setResponse)
        let tournamentLegal = setResponse[0].standardLegal // Grabs standardLegal key and gets the value of true or false
        console.log(tournamentLegal)
        let expandedLegalCheck = setResponse[0].expandedLegal // Grabs expandedLegal key and gets the value of true or false
        console.log(expandedLegalCheck)

        if (tournamentLegal == true) {
            resultDisplay.innerHTML = 'This card is standard legal and expanded legal for tournament play!'
        } else if (expandedLegalCheck == true && tournamentLegal == false) {
            resultDisplay.innerHTML = 'This card is only expanded legal for tournament play.'
        } else {
            resultDisplay.innerHTML = 'This card is NOT standard legal for tournament play.'
        }
    })
    .catch(error => {
        console.log(error)
        alert(`Couldn't connect to the pokemontcg.io API`)
    })
})


// https://api.pokemontcg.io/v1/cards?name=charizard
// https://api.pokemontcg.io/v1/sets?name=dragon
// https://api.pokemontcg.io/v1/cards?name=charizard&set=dragon
// https://api.pokemontcg.io/v1/sets/sm75

