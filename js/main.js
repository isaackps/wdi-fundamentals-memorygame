//create an array with 4 objects to store the values of the cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
//create an array to hole the selected cards when the user selects it.
var cardsInPlay = [];

//create a function to check for a match
var checkForMatch = function() {
		//to check if the selected cards are a match
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match!");
		} else {
			alert("Sorry, try again.");
		}
};

//create a function to push the cards selected into the cardsInPlay[] array.
//we only want to see the rank of the cards.
var flipCard = function(cardsId) {
	console.log("User flipped" + " " + cards[cardsId].rank);
	cardsInPlay.push(cards[cardsId].rank);

	//show cardimage and suit
	console.log(cards[cardsId].cardImage);
	console.log(cards[cardsId].suit);

	//to check the number of cards being selected
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

//call the function
flipCard(0);
flipCard(2);


//console.log("User flipped " + cardTwo);