//random word
var dessert = require('./word.js');
var getDessert = (dessert.ice_cream);
var objKeys = Object.keys(getDessert);
var rand = objKeys[Math.floor(Math.random() * objKeys.length)];
var randomWord = (rand.split(''));

console.log(randomWord);
//--------------------------------------------------------------
//--------------------------------------------------------------
//Get random word and count characters in the word

var charCount = randomWord.length;
console.log(charCount);


var lettersGuessed = [];
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//prompt user for a letter <this works>-------------------------------
function getLetter () {
	var prompt = require('prompt');
	
	var properties = [
	    {
	      name: 'letter', 
	      // hidden: true,
	      message: 'Guess a letter ',
	      // validator: /^[a-zA-Z\s\-]+$/,
	      // warning: 'Username must be only letters, spaces, or dashes'
	      validator: /^[a-zA-Z]+$/,
	      warning: 'Guess must be only letters'
	    },
	    
	];

	prompt.start();

	prompt.get(properties, function (err, result) {
		if (err) { return onErr(err); }

		lettersGuessed.push(result.letter);
		console.log('You guessed letter: ' + result.letter);
		// if letter in word
			// fillDisplayWord(result.letter) with the letter 
			// checkIfWinner();
		// else
			// isOutOfTries(); -- has logic to end game if yes, otherwise, call getLetter()
	});

	function onErr(err) {
		console.log(err);
		return 1;
	}
}

// fills semi colons w/ letter
function fillDisplayWord (letter) {

}

// if we've guessed all letters then console log good job
// if we haven't, call getLetter();
function checkIfWinner () {

}

// check if tries is > maxTries, if yes, connsole log loser
// otherwise, increment tries and call getLetter();
function isOutOfTries () {

}



// START APPLICATION
getLetter();









//--------------------------------------------------------------------
//--------------------------------------------------------------------
//if letterGuess = a letter in randomWord then print the letter to the screen.
	
		// var letterGuess = prompt.get;
		// var a = indexOf(letterGuess);

		// if(letterGuess === a){
		// 	console.log(a);
		// } else {
		// 	console.log("Awwww, don't cry...try again.");
		// }


		// function win() {
		// 	var letterGuess = result.letter;
		// 	var a = indexOf(letterGuess);

		// 	if(letterGuess === a){
		// 		console.log(a);
		// 	}
		// }
		// console.log(win);





//--------------------------------------------------------------
//--------------------------------------------------------------
//guess the letters of the word
// var letterGuess = [];
// if(letterGuess =  randomWord)





// function characters(){
// 	var characterCut = randomWord[0];
// 	console.log(characterCut);
// }