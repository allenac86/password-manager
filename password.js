const characterSet = require("./character-set");

const passwordLength = 18;
// string of the entire character set with letters (u&l case), numbers, and special chars
const concatCharSet =
  characterSet.lowercase +
  characterSet.uppercase +
  characterSet.numbers +
  characterSet.special;

const generatePassword = () => {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += concatCharSet.charAt(
      Math.floor(Math.random() * (concatCharSet.length + 1))
    );
  }

  return password;
};

module.exports = generatePassword;
