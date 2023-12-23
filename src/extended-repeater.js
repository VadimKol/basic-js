const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  // remove line with error and write your code here
  if(typeof str !== 'string') str = String(str);
  if(typeof addition !== 'string') addition = String(addition);

  let add = [];

  for(let i = 0; i < additionRepeatTimes; i++)
    add.push(addition);

  add = add.join(additionSeparator);
  let fullStr = str.concat(add);
  let repeatedStr = [];

  for(let i = 0; i < repeatTimes; i++)
    repeatedStr.push(fullStr);

  return repeatedStr.join(separator);

}

module.exports = {
  repeater
};
