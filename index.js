let firstCard = getRandomCard()
let secondCard = getRandomCard();
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ""
let button = document.getElementById("btn")
let display = document.getElementById("message-el")
let sumEl = document.getElementById("add")
let card = document.getElementById("card-el")
let newCard = document.getElementById("btn-new")
let player = {
    name: "per",
    chips: 145
}
let playerEL = document.getElementById("player-el")
playerEL.textContent = `${player.name}: $${player.chips}`
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13 + 1)
    if (randomNumber > 10) {
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}
button.addEventListener("click",function game(){
    card.textContent = "cards :"
    // for loop
    for (let i = 0; i < cards.length; i++) {
        card.textContent += cards[i] + " " 
        
    }

    sumEl.textContent = "sum " + sum

    if(sum <=20){
        display.textContent = "Do You want to draw a new card";
    }else if(sum ===21){
        display.textContent = "Woohoo😍! you have got the Blackjack";
        hasblackJack = true
    }else{
        display.textContent = "You are out of the game😪";
        isAlive = false
    }
})

newCard.addEventListener("click",()=>{
    if(isAlive === true && hasblackJack === false){
    let card2 = getRandomCard()
    sum += card2
    cards.push(card2)
    game()
    }
    

})

