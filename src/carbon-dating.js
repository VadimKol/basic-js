const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  sampleActivity = Number(sampleActivity);
  //чекаем на адекватное значение, и убираем всякую фигню, что прошла в строку, 'WOOT' например
  if (Number.isNaN(sampleActivity) || !(sampleActivity>= 0 && sampleActivity <= MODERN_ACTIVITY)) return false;

  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));// ln(A0/A) / k; k = ln2 / half-life c14

  if (result === Infinity) return false;
  // remove line with error and write your code here
  return result;
}

module.exports = {
  dateSample
};
