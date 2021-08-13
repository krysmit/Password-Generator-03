// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength;
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*.~";



//this function collects all of the user parameters for their password
function generatePassword() {
  
//collect input for length
var userPwLength = prompt("How long would you like your password to be? (8-128)");

if (userPwLength < 8 || userPwLength > 128) {
  alert("HEY. Type a number between 8-128.");
} else if  (!userPwLength === true) {
  alert("YO. Type a number between 8-128.");
} else (userPwLength = 8 - 128); {
};


//prompt y/n for lower case
var determineLower = confirm("Would you like to use lower case letters?\nOk = Yes\nCancel = No");

if (determineLower == true) {
   console.log("AHHHHH") 
} else {console.log("adsf");
}


//promt y/n for upper case
var determineUpper = confirm("Would you like to use lower case letters?\nOk = Yes\nCancel = No");

if (determineUpper == true) {
   console.log("AHHHHH") 
} else {console.log("adsf");
}



//promt y/n for numbers
var determineNumb = confirm("Would you like to use numbers?\nOk = Yes\nCancel = No");

if (determineNumb == true) {
   console.log("OHKAY") 
} else {console.log("duuuude");
}


//prompt y/n for special char
var determineSpec = confirm("Would you like to use special characters?\nOk = Yes\nCancel = No");

if (determineSpec == true) {
   console.log("GAAAHHH") 
} else {console.log("rrhhheeee");
}

var password = ""

//generate password on screen
/*
Collected Variables
userPwLength
determineLower
determineUpper
determineNumb
determineSpec
*/

  var result = '';
  var characters = userPwLength;
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
console.log(makeid(5));



return password
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);