let assert = require('assert');
let chalk = require('chalk');

function printTestResult(actual, expected, message, isPassing) {
  let passFail = '';

  if (isPassing) {
    passFail = chalk.green('PASS');
  } else {
    passFail = chalk.red('FAIL');
  }

  console.log('[%s] %s', passFail, message);

  if (!isPassing) {
    console.log('  -> Expected:', expected);
    console.log('  -> Received:', actual);
  }
}

let testHelpers = {
  testEquals: function(actual, expected, message) {
    let isPassing = true;

    try {
      assert.deepStrictEqual(actual, expected, message);
    } catch (err) {
      isPassing = false;
    }

    printTestResult(actual, expected, message, isPassing);
  },
  testNotEquals: function(actual, expected, message) {
    let isPassing = true;

    try {
      assert.notDeepStrictEqual(actual, expected, message);
    } catch (err) {
      isPassing = false;
    }

    printTestResult(actual, expected, message, isPassing);
  },
};

module.exports = testHelpers;
