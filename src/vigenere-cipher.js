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
  type = true; //true = direct, false = reverse
  constructor (type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    // remove line with error and write your code here
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let encryptedMsg = '';
    message = message.toLowerCase();
    key = key.toLowerCase();

    //дополняем ключ до длины сообщения
    if (key.length < message.length) {
      while(key.length < message.length) {
        key = key.concat(key);
      }
      key = key.slice(0, message.length);
    } else if (key.length > message.length) {
      key = key.slice(0, message.length);
    }

    //кодируем
    for(let i = 0, j = 0; i < message.length; i++){
      if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {// a-z
        encryptedMsg = encryptedMsg.concat(String.fromCharCode((message[i].charCodeAt(0) - 97 + key[j].charCodeAt(0) - 97) % 26 + 97));
        j += 1;
      } else {
        encryptedMsg = encryptedMsg.concat(message[i]);
      }
    }
    return this.type ? encryptedMsg.toUpperCase() : encryptedMsg.toUpperCase().split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    // remove line with error and write your code here
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let decryptedMsg = '';
    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();

    //дополняем ключ до длины сообщения
    if (key.length < encryptedMessage.length) {
      while(key.length < encryptedMessage.length) {
        key = key.concat(key);
      }
      key = key.slice(0, encryptedMessage.length);
    } else if (key.length > encryptedMessage.length) {
      key = key.slice(0, encryptedMessage.length);
    }
    
    //декодируем
    for(let i = 0, j = 0; i < encryptedMessage.length; i++){
      if (encryptedMessage[i].charCodeAt(0) >= 97 && encryptedMessage[i].charCodeAt(0) <= 122) {// a-z
        decryptedMsg = decryptedMsg.concat(String.fromCharCode((encryptedMessage[i].charCodeAt(0) - 97 - (key[j].charCodeAt(0) - 97) + 26) % 26 + 97));
        j += 1;
      } else {
        decryptedMsg = decryptedMsg.concat(encryptedMessage[i]);
      }
    }
    return this.type ? decryptedMsg.toUpperCase() : decryptedMsg.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
