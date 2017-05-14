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
var flipCard = function() {
	//console.log("User flipped" + " " + cards[].rank);
	//cardsInPlay.push(cards[].rank);
	var cardId = this.getAttribute('data-id');
	//show cardimage and suit
	//console.log(cards[cardsId].cardImage);
	//console.log(cards[cardsId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	//to check the number of cards being selected
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var cardElement;
//createBoard for the game
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		}
};
/*
var resetButton = function() {
	var resetBtn = document.createElement('button');
	resetBtn.setAttribute('text-align', 'center');
	resetBtn.setAttribute('margin', '20px');
	resetBtn.textContent = 'reset';
	document.getElementById('reset').appendChild(resetBtn);
	resetBtn.addEventListener('click', resetGame);
	//resetBtn.setAttribute('data-id', 'null');
};

var resetGame = function() {
		this.setAttribute('src', 'images/back.png');
	while (cardsInPlay.length > 0) {
		cardsInPlay.pop();
	}	
	//cardElement.setAttribute('data-id', null);
	//var cardBack = this.getElementsByTagName('img');
	//cardBack.setAttribute('src', 'images/back.png');

};
*/

//call the function
createBoard(); 
//resetButton();

//flipCard(0);
//flipCard(2);

//console.log("User flipped " + cardTwo);