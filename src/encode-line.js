const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeList = [];
  let count = 1;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index+1]) {
      count++;
    } else {
      if (count > 1) {
        encodeList.push(count, str[index]);
      } else {
        encodeList.push(str[index]);
      }
      count = 1;
    }
  }
  return encodeList.join('');
}

module.exports = {
  encodeLine
};