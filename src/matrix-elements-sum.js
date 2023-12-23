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
  // remove line with error and write your code here
  let sum = 0;
  let canSum = true;
  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[i].length; j++) {
      k = i - 1;
      while(k >= 0){ //смотрим, есть ли 0 сверху
        if (matrix[k][j] !== 0) k -= 1;
        else {
          canSum = false;
          break;
        }
      }
      if(canSum) sum += matrix[i][j];
      canSum = true;
    }
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
