//create an array to store the value of the cards
var cards = ["king", "king", "queen", "queen"];
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
var flipCard = function(cardsId) {
	console.log("User flipped" + " " + cards[cardsId]);
	cardsInPlay.push(cards[cardsId]);

	//to check the number of cards being selected
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

//call the function
flipCard(0);
flipCard(2);


//console.log("User flipped " + cardTwo);