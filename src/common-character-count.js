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
  // remove line with error and write your code here
  let countCommon = 0;

  for(let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if(s2.includes(char)) {
      s1 = s1.replace(char, '');
      s2 = s2.replace(char, '');
      countCommon += 1;
      i = -1;
    }
  }
  
  return countCommon;
}

module.exports = {
  getCommonCharacterCount
};
