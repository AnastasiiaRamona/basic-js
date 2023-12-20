const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let index = email.length-1; index >= 0; index--) {
    if (email[index] === "@") {
      email = email.slice(index+1);
      break;
    }
  }
  return email;
}

module.exports = {
  getEmailDomain
};