const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arrS2 = [];

  for (let symbol1 of s1) {
    for (let index = 0; index < s2.length; index++) {
      let symbol2 = s2[index];

      if ((symbol1 === symbol2) & !arrS2.includes(index)) {
        arrS2.push(index);
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};