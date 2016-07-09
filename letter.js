
// function(lettersAreCharacters){
// }

// var inquirer = require('inquirer');
//--------------------------------------------------------------------
//prompt user for a letter <this works>-------------------------------
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
    // {
    //   name: 'password',
    //   // hidden: true
    // }
  ];

  prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    // console.log('Command-line input received:');
    console.log('You guessed letter: ' + result.letter);
    // console.log('  Password: ' + result.password);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

//--------------------------------------------------------------------
//--------------------------------------------------------------------












// var Letter= function(let) {

	//make a charac property and set it to what you think makes second_instructor_demonstration

	//^[a-zA-Z_$][0-9a-zA-Z_$]*$
// var re = new RegExp([a-zA-Z_$]);


	//make an appear property and set it to what makes sense

	//make a letterRender property and set it to a function that does what you think makes sense
// }


//Get letter that is being typed

//prompt: Guess a letter?
//promptAnswer
//promptAnswer = process.argv[0] does this = a letter from the word array?
//yes or no
//If Yes then add it to guessWordBank (else) add to the noWordBank
	//guessWordBank = currentWord character list
	//noWordBank = set number of chances (var chancesUget = 10)
// var getFromScreen = process.argv[2];

// function createLetter(name) {
// 		this.name = letter;
// 		this.printInfo = function() {
// 		console.log("Letter: " + this.name);
// 		}
// 	}

		var askQuestion = function() {

		inquirer.prompt([{
			name: "letter",
			message: "Guess a letter?"
		}]).then(function(answers) {
			var newLetter = new Letter(answers.name);
			newLetter.printInfo();		
		})
}
// console.log("Guessed this letter: " + getFromScreen);
// exports.