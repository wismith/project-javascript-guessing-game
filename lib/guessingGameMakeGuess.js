/**
 * Given a game and guess,
 */
function guessingGameMakeGuess(game, guess) {
  game.numGuesses++;
  if (game.targetWord.includes(guess)) {
      console.log(' You got a letter!');
      for (let i = 0; i < game.targetWord.length; i++){
          if (game.targetWord[i] === guess){
              let array = game.currentWord.split('');
              array[i] = guess;
              game.currentWord = array.join('');
          }
      }
  } else {
      console.log(' Nope - try again!');
  }
  
}

module.exports = guessingGameMakeGuess;
