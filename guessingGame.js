let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');
let readlineSync = require('readline-sync');

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

while (!guessingGameIsDone(game)) {
  let guess = readlineSync.question(' Guess a letter: ');
  guessingGameMakeGuess(game, guess);
  console.log();
  console.log(` Current word is ${game.currentWord}`);
  console.log();
}

let isGameDone = guessingGameIsDone(game);

// console.log(`We have guessed every letter in ${wordToGuess}.`);

if (isGameDone) {
  console.log(`Congratulations ${name}, you have won the guessing game!`);
  console.log(`You took ${game.numGuesses} turns to win.`);
}

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
