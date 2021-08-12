// Assignment Code
var generateBtn = document.querySelector("#generate");
// insert all variables of the password length and complexity
var lowerCaseLetters
var upperCaseLetters
var numbers
var specialChar

//clicking the button to promt a window to ask about pw criteria
function writePassword() {
  prompt("asdf")
  alert (writePassword);
} 

generateBtn.addEventListener("click", writePassword);


//collect input for length
//what happens if they choose under 8 - please type a number between 8-128
//what happens if they choose over 128 - please type a number between 8-128
//what happens if they write a word - please type a number between 8-128
//what happens if they choose a number between 8-128


function pwLength() {
  prompt("How long would you like your password to be? (8-128)");

if (pwLength < 8 || pwLength > 128) {
  prompt("Enter a number between 8-128.");
} else if (pwLength = "8 - 128") {
  alert("Thank you!")
}
}


//prompt y/n for lower case
//lower case n
//lower case y

if (lowerCaseLetters = "y") {
  prompt
}



//promt y/n for upper case
//lower case n
//lower case y





//promt y/n for numbers
//numbers n
//numbers y




//prompt y/n for special char
//special char n
//special char y




//generate password on screen







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);