const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members) || members.length === 0) return false;
  return members
    .filter((a) => typeof a === 'string')
    .map((a) => a
      .toString()
      .trim()
      .split(' ')[0]
      .slice(0,1)
      .toUpperCase()
    )
    .sort()
    .join('');
}

module.exports = {
  createDreamTeam
};
