const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  if (inputString.length < 17) {
    return false;
  } else {
    let newArr = [];
    for (let index = -1; index < inputString.length; index = index + 3) {
      newArr.push(inputString[index + 1], inputString[index + 2]);
    }

    for (let index = -1; index < inputString.length; index = index + 3) {
      if ((inputString[index + 3] === "-") && (checkLetters(inputString[index + 1], newArr)) && (checkLetters(inputString[index + 2], newArr))) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = {
  isMAC48Address
};

function checkLetters(item, arr) {
  let lettersAndNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  for (let item of arr) {
    if (!(lettersAndNumbers.includes(item))) {
      return false;
    }
  }
  return true;
}