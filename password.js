import characterSet from "./character-set.js";

const passwordLength = 16;
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
      Math.floor(Math.random() * concatCharSet.length)
    );
  }

  return password;
};

export default generatePassword;
