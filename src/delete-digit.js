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
  // remove line with error and write your code here
  let max = 0;
  let i = 0;
  let nArr = String(n).split('');

  while(i < nArr.length) {
    let tempArr = [...nArr];
    tempArr.splice(i, 1);
    let temp = Number(tempArr.join(''));
    if(temp > max) max = temp;
    i += 1;
  }

  return max;
}

module.exports = {
  deleteDigit
};
