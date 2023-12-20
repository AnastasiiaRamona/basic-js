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


function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    let team = [];
    let nameOfTeam = [];
    for (let member of arr) {
      if (typeof (member) === "string") {
        team.push(member);
      }
    } if (team.length === 0) {
      return false;
    }

    for (let name of team) {
      name = name.replaceAll(' ', '');
      let upperName = name.toUpperCase();
      nameOfTeam.push(upperName[0]);
    }

    nameOfTeam.sort((a, b) => a.localeCompare(b));
    nameOfTeam = nameOfTeam.join(``);
    return nameOfTeam;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
