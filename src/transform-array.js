const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  if(arr.length === 0) return arr;

  let transformed = [...arr];

  let checker = true;//чекер остановки цикла, если команд нет
  //надо зарефакторить из-за DRY, но нет времени
  while(true) {
    for(let element of transformed) {
      if (element === '--discard-next') {
        if (transformed.length !== (transformed.indexOf(element) + 1)) { //граница массива
          // спец. случай, если через 1 это команда, которая влияет на этот же элемент, то эта команда удаляется
          if (transformed.length !== (transformed.indexOf(element) + 2)) { //так же смотрим границу
            if (transformed[transformed.indexOf(element) + 2] === '--double-prev' ||
                transformed[transformed.indexOf(element) + 2] === '--discard-prev') { //и экзист именно такой команды
              transformed.splice(transformed.indexOf(element) + 2, 1);
            }
          }
          transformed.splice(transformed.indexOf(element), 2);
        } else {
          transformed.splice(transformed.indexOf(element), 1);
        }
        checker = false;
        break;
      }
      if (element === '--discard-prev') {
        if (transformed.indexOf(element) - 1 >= 0) {
          transformed.splice(transformed.indexOf(element) - 1, 2);
        } else {
          transformed.splice(transformed.indexOf(element), 1);
        }
        checker = false;
        break;
      }
      if (element === '--double-next') {
        if (transformed.length !== (transformed.indexOf(element) + 1)) {
          transformed[transformed.indexOf(element)] = transformed[transformed.indexOf(element) + 1];
        } else {
          transformed.splice(transformed.indexOf(element), 1);
        }
        checker = false;
        break;
      }
      if (element === '--double-prev') {
        if (transformed.indexOf(element) - 1 >= 0) {
          transformed[transformed.indexOf(element)] = transformed[transformed.indexOf(element) - 1];
        } else {
          transformed.splice(transformed.indexOf(element), 1);
        }
        checker = false;
        break;
      }
    }
    if(checker) break;
    else checker = true;
  }
  return transformed;
}
module.exports = {
  transform
};
