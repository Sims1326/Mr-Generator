// Assignment code here

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numericCharacters = "0123456789"
const specialCharacters =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


function generatePassword() {
    let passwordLength = window.prompt("How many characters? (8-129)")
    passwordLength = parseInt(passwordLength) ;

    while (passwordLength >129 || passwordLength < 8) {
        window.alert("password must be between 8 and 129 characters")
        let passwordLength = window.prompt("How many characters? (8-129)")
        passwordLength = parseInt(passwordLength) ; 

    }
    let charactersSel1 = window.confirm("Would you like to include lowercase letters? (okay for yes)")
    if (charactersSel1){
        window.alert("your password will include lowercase letters")
    }
    else{
        window.alert("your password will not include lowercase letters")
    }
    let charactersSel2 = window.confirm("Would you like to include capital letters? (okay for yes)")
    if (charactersSel2){
        window.alert("your password will include capitol letters")
    }
    else{
        window.alert("your password will not include capitol letters")
    }
    let charactersSel3 = window.confirm("Would you like to include numbers (okay for yes)")
    if (charactersSel3){
        window.alert("your password will include numbers")
    }
    else{
        window.alert("your password will not include numbers")
    }
    let charactersSel4 = window.confirm("Would you like to include special characters? (okay for yes)")
    if (charactersSel4){
        window.alert("your password will include special characters")
    }
    else{
        window.alert("your password will not include special characters")
    }
    
    for (i = 0; i < passwordLength; i++){
        
    }


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