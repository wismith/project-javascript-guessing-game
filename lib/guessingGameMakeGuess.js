/**
 * Given a game and guess,
 */
function guessingGameMakeGuess(game, guess) {
  console.log(game.currentWord);
  game.numGuesses++;
  if (game.targetWord.includes(guess)) {
      for (let i = 0; i < game.targetWord.length; i++){
          if (game.targetWord[i] === guess){
              let array = game.currentWord.split('');
              array[i] = guess;
              game.currentWord = array.join('');
          }
      }
  }
}

module.exports = guessingGameMakeGuess;
