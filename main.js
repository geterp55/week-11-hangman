var dessert = require('./word.js');


//--------word from list and split into each letter-----------------
//Test access the ice cream <yes this works>
// console.log(dessert.ice_cream.treat_1);

var getDessert = (dessert.ice_cream);
//Test if variable pulls a dessert <yes this works>
// console.log(getDessert);

//Test if variable  can split into individual characters  <yes this works>
// console.log(getDessert.split(''));
// console.log(getDessert);
//------------------------------------------------------------------

//gets all the keys in the ice cream object<this works>
var objKeys = Object.keys(getDessert);
// console.log(objKeys);
//-------------------------------------------------------------------

//get random key object or word <this works>
var rand = objKeys[Math.floor(Math.random() * objKeys.length)];
// console.log(rand);


//--------------------------------------------------------------------
//Split current word<this works>
// console.log(rand.split(''));

var randomWord = (rand.split(''));
console.log(randomWord);
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

//'Prompt' user to 'guess words'






//each character of currentWord needs to be set to characters



//set var randomWord = to guessed letters entered

// var inquirer = require('inquirer');
// var prompt = require('prompt');

// prompt.get[guessLetter];

// var getFromScreen = process.argv[2];

// function createLetter(name) {
// 		this.name = letter;
// 		this.printInfo = function() {
// 		console.log("Letter: " + this.name);
// 		}
// 	}

// 		var askQuestion = function() {

// 		inquirer.prompt([{
// 			name: "letter",
// 			message: "Guess a letter?"
// 			type: "text",
// 		}]).then(function(answers) {
// 			var newLetter = new Letter(answers.name);
// 			newLetter.printInfo();		
// 		})
// }
// console.log("Guessed this letter: " + getFromScreen);



//Constructors with Prompts for guessing letters


















