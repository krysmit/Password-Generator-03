// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*.~";

// insert all variables of the password length and complexit
//var lowerCaseLetters;
//var upperCaseLetters;
//var numbers;
//var specialChar;


//clicking the button to promt a window to ask about pw criteria


function generatePassword() {
  

//collect input for length
//what happens if they choose under 8 - please type a number between 8-128
//what happens if they choose over 128 - please type a number between 8-128
//what happens if they write a word - please type a number between 8-128
//what happens if they choose a number between 8-128

/*
function (pwLength) {
  prompt("How long would you like your password to be? (8-128)");
if ((pwLength < 8) || (pwLength > 128)) {
  prompt("Enter a number between 8-128.");
} else if (pwLength = "8 - 128") {
  alert("Thank you!")
}
}
*/

//prompt y/n for lower case
//lower case n
//lower case y
function determineLower() {
    if (confirm("Would you like to use lower case letters?"));{
        console.log("something happened");
    }
} else {console.log("adsf")
}



//promt y/n for upper case
//lower case n
//lower case y
function determineUpper {

}




//promt y/n for numbers
//numbers n
//numbers y



//prompt y/n for special char
//special char n
//special char y



//generate password on screen






/*
function lowerCaseLetters() {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
console.log(makeid(5));
*/
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);