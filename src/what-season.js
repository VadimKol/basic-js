const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // remove line with error and write your code here
  if (date === undefined || date === null) return 'Unable to determine the time of year!';

  //так ну тут проверяем, что это объект, и объект Даты, а не какойто другой объект, массив например или вобще число
  //вторая штука, смотрим на наличие этого хитрого символа
  //если я правильно понимаю, в реальном объекте Даты, этот символ просто не используется === undefined
  //а в фейковом, он его устанавливает, чтобы обойти первое условие
  if (Object.prototype.toString.call(date) !== '[object Date]' || date[Symbol.toStringTag] === 'Date') throw new Error('Invalid date!');

  if(date.getMonth() >= 2 && date.getMonth() <= 4) //date.getDate()
    return 'spring';
  if(date.getMonth() >= 5 && date.getMonth() <= 7)
    return 'summer';
  if(date.getMonth() >= 8 && date.getMonth() <= 10)
    return 'autumn';
  return 'winter';
}

module.exports = {
  getSeason
};
