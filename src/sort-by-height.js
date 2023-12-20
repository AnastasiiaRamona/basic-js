const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOfIndex = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === -1) {
      arrOfIndex.push(index);
    }
  }
  search(arr);

  arr.sort((a, b) => a - b);
  
  for (let index of arrOfIndex) {
    arr.splice(index, 0, -1);
  }
  return arr;
}

function search(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === -1) {
      arr.splice(index, 1);
    }
  }
  if (arr.includes(-1)) {
    search(arr);
  }
}

module.exports = {
  sortByHeight
};
