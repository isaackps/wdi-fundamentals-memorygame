//console.log("Up and running!");

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];
var cardOne;
var cardTwo;

cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("youfound a match!");
	} else {
		alert("Sorry, try again.");
	}
}



console.log(cardOne);
console.log(cardsInPlay);
//console.log("User flipped " + cardTwo);