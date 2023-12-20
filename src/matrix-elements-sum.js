const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let sum = 0;

  for (let index = 0; index < matrix.length; index++) {
    for (let index2 = 0; index2 < matrix[index].length; index2++) {
      if (index === 0 || matrix[index - 1][index2] !== 0) {
        sum += matrix[index][index2];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};

console.log(getMatrixElementsSum([[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]));