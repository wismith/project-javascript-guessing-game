let { testEquals } = require('./testHelpers');

let newGuessingGame = require('../lib/newGuessingGame');
let guessingGameMakeGuess = require('../lib/guessingGameMakeGuess');
let guessingGameIsDone = require('../lib/guessingGameIsDone');

function testNewGameIsNotDone() {
  let game = newGuessingGame('hello');

  testEquals(guessingGameIsDone(game), false, 'New guessing game is not done');
}

function testIncompleteGameIsNotDone() {
  let game = newGuessingGame('abc');

  guessingGameMakeGuess('a');
  guessingGameMakeGuess('b');

  testEquals(guessingGameIsDone(game), false, 'Game is not done before we guess every letter');
}

function testCompleteGameIsDone() {
  let game = newGuessingGame('abc');

  guessingGameMakeGuess('a');
  guessingGameMakeGuess('b');
  guessingGameMakeGuess('c');

  testEquals(guessingGameIsDone(game), true, 'Game is done once we guess every letter');
}

testNewGameIsNotDone();
testIncompleteGameIsNotDone();
testCompleteGameIsDone();
