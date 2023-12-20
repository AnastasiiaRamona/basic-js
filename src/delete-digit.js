const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString();
  let digits = number.split('');
  let newNumbers = [];
  for (let index = 0; index < number.length; index++) {
    let newNumber = digits.slice();
    newNumber.splice(index, 1);
    newNumbers.push(Number(newNumber.join('')));
  }

  return Number(Math.max(...newNumbers));
}

module.exports = {
  deleteDigit
};