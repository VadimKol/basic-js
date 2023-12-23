const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // remove line with error and write your code here
  let outputArr = [];
  let countuniq = [];
  //идея не моя, к сожалению, просто в новый массив добавляем файлы
  //если файл там уже есть, то прикручиваем уникальный счетчик таких файлов
  //ну и увеличиваем его, если добавляем одинаковые файлы. Используя этот счетчик, делаем новые уникальные файлы и им тоже свои счетчики
  while (names.length !== 0) {
    if(!outputArr.includes(names[0])) {
      outputArr.push(names[0]);
      countuniq.push(1);
      names.splice(0, 1);
    }
    else {
      outputArr.push(names[0] + '(' + countuniq[outputArr.indexOf(names[0])] + ')');
      countuniq[outputArr.indexOf(names[0])] += 1;
      countuniq.push(1);
      names.splice(0, 1);
    }
  }
  return outputArr;
}

module.exports = {
  renameFiles
};
