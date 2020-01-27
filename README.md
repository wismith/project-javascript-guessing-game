# Guessing Game

## Contents <!-- omit in toc -->

- [Description](#description)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Iterations](#iterations)
  - [[v0] Creating A New Game](#v0-creating-a-new-game)
  - [[v1] Making Guesses](#v1-making-guesses)
  - [[v2] Check If Game Done](#v2-check-if-game-done)
  - [[v3] User Input](#v3-user-input)
  - [[v4] Hidden Target Word](#v4-hidden-target-word)
  - [[v5] Improved UI And Extra Features](#v5-improved-ui-and-extra-features)

## Description

We're going to implement a word guessing game that works a bit like Wheel of Fortune. There's a target word and users pick one letter at a time, until they've guessed every letter in a word.

## Getting Started

1. Fork this repository
1. Clone your fork to your local machine using `git clone`
1. Enter the project directory using `cd`
1. Run `npm install` to install the required dependencies
1. Run `npm test` to run the automated tests (some will be failing)
1. Run `node guessingGame.js` or `npm start` to see to see the computer make a hard-coded sequence of "guesses"
1. Get started on the [Iterations](#iterations) below.

## Project Structure

- `README.md` is this file
- `guessingGame.js` is the main file you are meant to run
- `lib/` contains the individual functions used to make the game
- `tests/` contains automated tests (and a collection of test helper functions)

## Iterations

This project is broken down into iterations. For each iteration, create a new feature branch and submit a pull request against **your** fork's `master` branch. Tag an instructor for code review.

The `guessingGame.js` file contains a simple script that will work correctly once you've gotten through the first few iterations.

The rough sequence of iterations will be:

1. Implement the core logic of the game, hard-coding the sequence of guesses we make
1. Implement user input, so an actual human is making guesses
1. Make it so the user guessing doesn't know the target word beforehand

**Keep in mind**, we've broken this project down into iterations that reflect the way a more experienced engineer would build it. Part of this is to give you good examples of a well-sequenced project so that you can structure your personal and group projects similarly.

### [v0] Creating A New Game

**Note**: This iteration is complete and serves as a starting point. You  don't need to do anything.

The `newGuessingGame` function create a new guessing game object. A new game looks like this:

```javascript
{
  targetWord: 'hello',
  currentWord: '_____',
  numGuesses: 0,
}
```

As the user makes guesses, the `currentWord` entry should be modified to reflect whether they've guessed correct letters or not.

### [v1] Making Guesses

**Remember**: Do this work on a feature branch, not on `master`.

Implement the `guessingGameMakeGuess` function. Use the automated tests in `tests/guessingGameMakeGuess.test.js` to guide you. Run the tests *and* read the test file.

Every time a guess is made, `game.numGuesses` should be incremented. If the guess is correct, `game.currentWord` should be updated with the filled-in letters.

For example:

```javascript
let game = newGuessingGame('waffles');
console.log(game.currentWord); // => '_______';

guessingGameMakeGuess(game, 'f');
console.log(game.currentWord); // => '__ff___';

guessingGameMakeGuess(game, 'w');
console.log(game.currentWord); // => 'w_ff___';
```

### [v2] Check If Game Done

**Remember**: Each iteration should be its own feature branch. The idea is to get feedback on each iteration.

Implement the `guessingGameIsDone` function. Use the automated tests in `tests/guessingGameIsDone.test.js` to guide you. Run the tests *and* read the test file.

This function should return `true` only once the user has guessed all the letters in `game.targetWord`.

Once both `guessingGameIsDone` and `guessingMakeMakeGuess`

### [v3] User Input

Testing dynamic user input is a real pain, so don't worry about doing this for now.

Modify `guessingGame.js` so that the user is prompted for input with `readine-sync`, rather than guessing a fixed value. The game should end once the user has guessed every letter.

### [v4] Hidden Target Word

The `readline-sync` module supports a password-like input, as follows:

```javascript
let readlineSync = require('readline-sync');

let secretInput = readlineSync.question('Enter a secret word: ', { hideEchoBack: true });

console.log(`You entered: ${secretInput}`);
```

We have an example of this type of "hidden input" in our collection of [JavaScript Examples][jfarmer-javascript-examples]. The [readline-sync README][github-readline-sync] also has many examples.

Use this to get the target word dynamically and create a new guessing game with that target word.

Have someone else enter a surprise target word and try to guess!

### [v5] Improved UI And Extra Features

Think of some ways to improve the UI and implement them. Some ideas:

- Clear the screen after every guess
- Use the [chalk module][github-chalk] to add color (you installed this with `npm install`)
- Add support for phrases instead of single words
- Add improved error handling, e.g., a user enters multiple letters, a user enters a number or other non-alphabetic character
- Is your game case sensitive? Make it case insensitive
- Something else you think of yourself

[github-readline-sync]: https://github.com/anseki/readline-sync#readme
[github-chalk]: https://github.com/chalk/chalk#readme
[jfarmer-javascript-examples]: https://github.com/jfarmer/examples-javascript
