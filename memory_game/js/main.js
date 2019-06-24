var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch () {
/* Joel Suggested changing the rule here to also include the 2 card rule.*/
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
};
function flipCard (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
  checkForMatch ();
  }
};
flipCard (0);
flipCard (2);