const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let currentDepth = this.calculateDepth(elem);
        count = Math.max(count, currentDepth);
      }
    }
    return 1 + count;
  }
}

module.exports = {
  DepthCalculator
};

let calc = new DepthCalculator;
console.log(calc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));