// Assignment Code
var generateBtn = document.querySelector("#generate");

// These are the varaibale being used. They are set as arrays and as the password is generated, we will be pulling from here. 
const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "_", ",", ".", "`", "~", "[", "]", "{", "}"];

// This is a function that is generating a random password based on the criteria the user gives.
function generatePassword() {
  // We are setting this empty array that will act as a temporary plaeholder for the characters until we randomize them and
  // turn them into a string
  let allCharacters = [];
  // Upon clicking the "Generate Password" button, the user will be promtped to chose the number of characters for the pasword
  // to contain
  let passwordLength = prompt("How many characters would you like your password to contain?");
  // This converts the user's entry to a number from a string.
  passwordLength = Number(passwordLength);
  // This confirms that the user has entered a number and if not alerts them that they must choose a number.
  if (isNaN(passwordLength)) {
    alert("You must choose a number");
    return;
  }
  // If the user choses a length less than 8 or greater than 128 they will be alerted that the acceptable range is between 8-128. 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128");
    return;
  }
  // Once we have verified that the desired number of characters falls into an acceptable range, we will then ask the user a series
  // of questions to determine the type of characters the users wants for the password.
  let specialCharacters = confirm("Would you like your password to include special characters?");
  let uppercaseCharacters = confirm("Click okay to confirm if you would like to include uppercase letters");
  let lowercaseCharacters = confirm("Click okay to confirm if you would like to include lowercase letters");
  let numericCharacters = confirm("Click okay to confirm if you would like to include numbers");
  // If the user selects cancel for all four of the above, then they will be see an alert telling them they must chose at least one.
  if (
    !specialCharacters &&
    !uppercaseCharacters &&
    !lowercaseCharacters &&
    !numericCharacters
  ) {
    alert("Should include at least one character type!");
  }
  // This is a variable set to an empty string where our password will everntually be passed to. 
  let password = "";
  // This is determining which characters to use based upon the user's responses. I.E., if they want special characters in their password,
  // at least one special character will be added. If there is a character type that they do not want, it will be ommited from their password.
  // We are also ensuring here that any type of character they want is guarnteed to be in the password by grabbing that character type at random
  // and passing it into the empty password string.
  if (specialCharacters) {
    allCharacters = allCharacters.concat(specialArr);
    password = password + specialArr[Math.floor(Math.random() * specialArr.length)];
  }
  if (uppercaseCharacters) {
    allCharacters = allCharacters.concat(uppercaseArr);
    password = password + uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
  }
  if (lowercaseCharacters) {
    allCharacters = allCharacters.concat(lowercaseArr);
    password = password + lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
  }
  if (numericCharacters) {
    allCharacters = allCharacters.concat(numericArr);
    password = password + numericArr[Math.floor(Math.random() * numericArr.length)];
  }
  // This generates random chararcters from the arrays of possible characters
  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters[randomNum];
  }
  // Because we have already added code that guarantees one of each character desired, we are now removing any extra characters so that the password
  // that is returned will be the desired length
  password = password.slice(0, passwordLength);


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
