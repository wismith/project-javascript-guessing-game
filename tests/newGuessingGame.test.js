let { testEquals } = require('./testHelpers');

let newGuessingGame = require('../lib/newGuessingGame');

function testNewGuessingGame() {
  let expectedTargetWord = 'hello';
  let expectedCurrentWord = '_____';

  let game = newGuessingGame(expectedTargetWord);

  testEquals(game.targetWord, expectedTargetWord, 'New game has given target word');
  testEquals(game.numGuesses, 0, 'New game has 0 number of guesses.');
  testEquals(game.currentWord, expectedCurrentWord, 'New game has all-blank current word');
}

testNewGuessingGame();
