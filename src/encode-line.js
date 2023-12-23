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
  // remove line with error and write your code here
  if(str.length === 0) return str;

  let i = 0;
  let count = 2;
  let encoded = '';
  while (true) {
    if ( str.includes(str[i].repeat(count)) ) { 
      count += 1;
    } else {
      count -= 1;
      encoded = encoded.concat((count > 1 ? count : '') + str[i]);
      i += count;
      count = 2;
    }
    
    if (i == str.length) break;
  }
  return encoded;
}

module.exports = {
  encodeLine
};
