var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
// the first card that the user flipped 
var cardOne = cards [0];
var cardTwo = cards [2];

cardsInPlay.push(cardOne);
console.log ("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log ("User flipped " + cardTwo);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");

} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");

} else {
  console.log("Pick Another card!");
}