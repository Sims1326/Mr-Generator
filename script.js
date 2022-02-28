// Assignment code here

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numericCharacters = "0123456789"
const specialCharacters =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


function generatePassword() {
    let passwordLength = window.prompt("How many characters? (8-129)")
    passwordLength = parseInt(passwordLength) 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);