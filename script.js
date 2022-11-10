// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the varaibale being used 
const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "_", ",", ".", "`", "~", "[", "]", "{", "}"];


function generatePassword() {
  let allCharacters = [];
  let passwordLength = prompt("How many characters would you like your password to contain?");
  passwordLength = Number(passwordLength);
  if (isNaN(passwordLength)) {
    alert("You must choose a number");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128");
    return;
  }


  let specialCharacters = confirm("Would you like your password to include special characters?");
  let uppercaseCharacters = confirm("Click okay to confirm if you would like to include uppercase letters");
  let lowercaseCharacters = confirm("Click okay to confirm if you would like to include lowercase letters");
  let numericCharacters = confirm("Click okay to confirm if you would like to include numbers");

  if (
    !specialCharacters &&
    !uppercaseCharacters &&
    !lowercaseCharacters &&
    !numericCharacters
  ) {
    alert("Should include at least one character type!");
  }

  if (specialCharacters) {
    allCharacters = allCharacters.concat(specialArr);
    password = password + specialCharacters[Math.floor(Math.random * specialArr.length)];
  }
  if (uppercaseCharacters) {
    allCharacters = allCharacters.concat(uppercaseArr);
    password = password + uppercaseCharacters[Math.floor(Math.random * uppercaseArr.length)];
  }
  if (lowercaseCharacters) {
    allCharacters = allCharacters.concat(lowercaseArr);
    password = password + lowercaseCharacters[Math.floor(Math.random * lowercaseArr.length)];
  }
  if (numericCharacters) {
    allCharacters = allCharacters.concat(numericArr);
    password = password + numericCharacters[Math.floor(Math.random * numericArr.length)];
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters[randomNum]
  }


  return password;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function writePassword() {

// let shouldIncludeSpecialCharacters;
// let shouldIncludeUppercase;
// let shouldIncludeLowercase;
// let shouldIncludeNumeric;
// let length;

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


