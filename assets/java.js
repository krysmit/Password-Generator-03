// Assignment Code
var generateBtn = document.querySelector("#generate"); 
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*.~";
var availableChars = ""


//this function collects all of the user parameters for their password
function generatePassword() {
  
//collect input for length
var userPwLength = prompt("How long would you like your password to be? (8-128)");

if (userPwLength < 8 || userPwLength > 128) {
   alert("HEY. Type a number between 8-128.")
   return;
 } else if  (!userPwLength === true) {
   alert("YO. Type a number between 8-128.")
   return;
 };

//y/n for lower case
var determineLower = confirm("Would you like to use lower case letters?\nOk = Yes\nCancel = No");

if (determineLower == true) {
   availableChars += lowerCaseLetters
   console.log("lower case yes") 
} else {console.log("lower case no");
}


//y/n for upper case
var determineUpper = confirm("Would you like to use upper case letters?\nOk = Yes\nCancel = No");

if (determineUpper == true) {
   availableChars += upperCaseLetters
   console.log("upper case yes") 
} else {console.log("upper case no");
}


//y/n for numbers
var determineNumb = confirm("Would you like to use numbers?\nOk = Yes\nCancel = No");

if (determineNumb == true) {
   availableChars += numbers
   console.log("number yes") 
} else {console.log("number no");
}


//y/n for special char
var determineSpec = confirm("Would you like to use special characters?\nOk = Yes\nCancel = No");

if (determineSpec == true) {
   availableChars += specialChar
   console.log("special yes") 
} else {console.log("special no");
}



//Compiling answers into a password variable
var password = ""

//for loop to compile all answers
for ( var i = 0; i < userPwLength; i++ ) {
  password += availableChars[Math.floor(Math.random()*(availableChars.length -1))]
  // password += availableChars[Math.floor(Math.random()*userPwLength)]
}

{
   if (determineLower == true){
   console.log(availableChars);
 } else {console.log("lower case not in use");
}

if (determineUpper == true){
   console.log(availableChars);
 } else {console.log("upper case not in use");
}

if (determineNumb == true){
   console.log(availableChars);
 } else {console.log("number not in use");
}

 if (determineSpec == true){
   console.log(availableChars);
 } else {console.log("special not in use");

}



return password
  

}


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);