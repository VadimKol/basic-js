const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // remove line with error and write your code here
    this.chain.push(value === undefined ? '' : value);
    return this;
  },
  removeLink(position) {
    // remove line with error and write your code here
    if (
        typeof position !== 'number' || 
        !Number.isInteger(position)  ||
        !(position > 0 && position <= this.chain.length) //от 1
       ) 
    {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // remove line with error and write your code here
    let chainString = this.chain.map((a) => `( ${a} )`).join('~~');
    this.chain = [];
    return chainString;
  }
};

module.exports = {
  chainMaker
};
