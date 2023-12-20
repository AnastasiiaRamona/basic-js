const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkArguments(...args) {
    if (args.some(arg => !arg)) {
      throw new Error('Incorrect arguments!');
    }
  }

  transformMessage(message, key, encrypt) {
    this.checkArguments(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const currentChar = message[i];

      if (this.alphabet.indexOf(currentChar) === -1) {
        result += currentChar;
        continue;
      }

      const keyChar = key[keyIndex % key.length];
      const keyShift = this.alphabet.indexOf(keyChar);
      const messageShift = this.alphabet.indexOf(currentChar);

      let transformedIndex;

      if (encrypt) {
        transformedIndex = (messageShift + keyShift) % this.alphabet.length;
      } else {
        transformedIndex = (messageShift - keyShift + this.alphabet.length) % this.alphabet.length;
      }

      result += this.alphabet[transformedIndex];
      keyIndex++;
    }

    return result;
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    if (this.isDirect) {
      return this.transformMessage(message, key, true);
    } else {
      return this.transformMessage(message, key, false).split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    this.checkArguments(encryptedMessage, key);
    let decryptedMessage;
  
    if (this.isDirect) {
      decryptedMessage = this.transformMessage(encryptedMessage, key, false);
    } else {
      decryptedMessage = this.transformMessage(encryptedMessage, key, true).split('').reverse().join('');
    }
  
    return decryptedMessage;
  }
}


module.exports = {
  VigenereCipheringMachine
};
