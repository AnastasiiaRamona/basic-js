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
  const season = [`winter`, `spring`, `summer`, `autumn`];

  if (arguments.length ? false : true ) {
    return `Unable to determine the time of year!`;
  } else if (!(date instanceof Date) || (Object.hasOwn(date, "toString"))) {
    throw new Error(`Invalid date!`);
  } else {
    const numberOfMonth = date.getMonth();
    if (numberOfMonth <=1 || numberOfMonth === 11) {
      return season[0];
    } else if (numberOfMonth >=2 && numberOfMonth <=4) {
      return season[1];
    } else if (numberOfMonth >=5 && numberOfMonth <=7) {
      return season[2];
    } else {
      return season[3];
    }
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(new Date(1994, 1, 2, 3, 4, 5)));
