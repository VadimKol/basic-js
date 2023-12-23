const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // remove line with error and write your code here
  for(let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
  }

  let dnsStat = {};
  let currentStat = '';

  for(let i = 0, k = 0; i < domains.length; i++) {
    currentStat = currentStat.concat('.' + domains[i][k]);
    //смотрим чтобы ключа, такого уже не было, .ru к примеру из другой строки, чтобы не считать
    //берем .ru, потом .ru.yandex и так далее
    //все возможные подстроки, тоже должны работать
    if (!dnsStat.hasOwnProperty(currentStat)) { 
      dnsStat[currentStat] = 1;
      for(let j = 0; j < domains.length; j++) {
        if (j !== i) {
          if (('.' + domains[j].join('.')).includes(currentStat)) {
            dnsStat[currentStat] += 1;
          }
        }
      }
    }

    //добавляем следующие подстроки
    if(k < domains[i].length) {
      k += 1;
      i -= 1;
    }
    //если подстрок больше нет, идем к следующему урл-у
    if(k == domains[i+1].length) {
      k = 0;
      i += 1;
      currentStat = '';
    }
  }

  return dnsStat;
}

module.exports = {
  getDNSStats
};
