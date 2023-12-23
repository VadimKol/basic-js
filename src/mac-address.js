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
function isMAC48Address(n) {
  // remove line with error and write your code here
  n = n.split('-');
  
  if (n.length !== 6) return false;

  for(let element of n ){
    if(element.length !== 2) return false;
    if (!((element[0] >= 0 && element[0] <= 9) || 'ABCDEF'.includes(element[0])) ||
        !((element[1] >= 0 && element[1] <= 9) || 'ABCDEF'.includes(element[1]))) {
      return false;
    }
  }
  
  return true;
}
module.exports = {
  isMAC48Address
};
