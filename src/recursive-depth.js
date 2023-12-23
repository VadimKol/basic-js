const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1;
  firstarr = [];
  calculateDepth(arr, curdepth = 1) {//второй аргумент, это хитрость, чтобы найти глубину рекурсии, и сейвить ее во внешке от рекурсии
    if (this.depth === 1) this.firstarr = arr;//основная задача обнулить depth, для следующего теста, ну или вызова этого метода
    // remove line with error and write your code here
    for(let i = 0; i < arr.length; i++) { //делал через оf, но проблема с indexOf и сравнениями массивов, чтобы найти ласт элемент
      if(Array.isArray(arr[i])) {
        if(curdepth + 1 > this.depth) this.depth += 1;

        this.calculateDepth(arr[i], curdepth + 1);
      }
      //то есть я на последнем элементе, в своем первом массиве, тут то и обнуляем depth, и вспомогательный массив
      //этот массив не нужен, но без него непонятно, где конец работы функции
      if (this.firstarr == arr && i === arr.length - 1) { //это конец работы этой функции
        let lastDepth = this.depth;
        this.firstarr = [];
        this.depth = 1;
        return lastDepth;
      }
    }
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};
