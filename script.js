// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log('button clicked');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword()
let answer = prompt("How many characters would you like your password to contain?");
answer = Number(answer);
if (answer <= 8) {
  alert("Password must be at least 8 characters");
} else if (answer > 129) {
  alert("Password must be less than 129 characters");
} else {
  confirm("Click okay to confirm if you would like to include special characters");
}
}

// If answer is >= 8 alert 'Password must be at least 8 characters'
// If answer is < 129 alert 'Password must be less than 129 characters'
// 


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


// const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "_", ",", ".", "`", "~", "[", "]", "{", "}"];

// alert("Password must be at least 8 characters")
// alert("Password must be less than 129 characters")
// alert("Must include at least one type of character")