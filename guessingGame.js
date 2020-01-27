let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');
let readlineSync = require('readline-sync');

let wordToGuess = 'hello';

let game = newGuessingGame('hello');

// console.log(`"Guessing" the word '${wordToGuess}', one letter at a time.`);
let name = readlineSync.question('\n Hello! What is your name? ');
console.log(`\n We're going to play a guessing game, ${name}!\n`);


/*
for (let letter of wordToGuess) {
  console.log(`Guessing letter: ${letter}`);

  guessingGameMakeGuess(game, letter);

  console.log(`Current word is: ${game.currentWord}`);
  console.log();
}
*/

while (guessingGameIsDone(game) === false){
  let guess = readlineSync.question(' Guess a letter: ');
  guessingGameMakeGuess(game,guess);
  console.log(`Current word is ${game.currentWord}`);
  console.log();
}



let isGameDone = guessingGameIsDone(game);

// console.log(`We have guessed every letter in ${wordToGuess}.`);
console.log(`The game is done? ${isGameDone}`);
console.log(`How many turns did we take? ${game.numGuesses}`);

// // The code below is commented out because it will run
// // forever until you correctly imlpement the guessingGameMakeGuess
// // and guessingGameIsDone functions.
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//
// while (!guessingGameIsDone(game)) {
//   for (let letter in alphabet) {
//     guessingGameMakeGuess(game, letter);
//   }
// }
//
// console.log(`Congratulations! You won in ${game.numGuesses} moves`);
