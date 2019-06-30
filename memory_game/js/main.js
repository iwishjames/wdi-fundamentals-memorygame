var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",

}
];

var cardsInPlay = [];

function checkForMatch () {
/* Joel Suggested changing the rule here to also include the 2 card rule.*/
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
};
function flipCard () {
  this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('clickedCard', cards[cardId].cardImage)
  if (cardsInPlay.length === 2) {
  checkForMatch ();
  }
};

const createBoard = function () {
	for (let i = 0; i = cards.length; i++) {
		let cardElement = document.createElement('img');

		cardElement.setAttribute('BackOfCard', images/back.png);
		cardElement.setAttribute('data-id', + i).appendChild("game-board");
	};
};

document.getElementsByTagName('cardElement')[0].addEventListener('click', flipCard);

createBoard();