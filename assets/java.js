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
   console.log("lower case yes") 
} else {console.log("lower case no");
}


//promt y/n for upper case
var determineUpper = confirm("Would you like to use upper case letters?\nOk = Yes\nCancel = No");

if (determineUpper == true) {
   console.log("upper case yes") 
} else {console.log("upper case no");
}



//promt y/n for numbers
var determineNumb = confirm("Would you like to use numbers?\nOk = Yes\nCancel = No");

if (determineNumb == true) {
   console.log("number yes") 
} else {console.log("number no");
}


//prompt y/n for special char
var determineSpec = confirm("Would you like to use special characters?\nOk = Yes\nCancel = No");

if (determineSpec == true) {
   console.log("special yes") 
} else {console.log("special no");
}

var password = ""

/*
Collected Variables
userPwLength
determineLower
determineUpper
determineNumb
determineSpec
*/

if (determineLower == true){
   password += Math.random(lowerCaseLetters)
//   availableChars += lower case string
   console.log("lower case check")
} else {console.log("lower case not in use");
}

if (determineUpper == true){
   password += Math.random(upperCaseLetters)
//   availableChars += lower case string
   console.log("upper case check")
 } else {console.log("upper case not in use");
}

if (determineNumb == true){
   password += Math.random(numbers)
//   availableChars += lower case string
   console.log("number check")
 } else {console.log("number not in use");
}

 if (determineSpec == true){
   password += Math.random(specialChar)
//   availableChars += lower case string
   console.log("special char check")
 } else {console.log("special not in use");
}


 function randomFunction(someString){
    //math floor and math random to generate a random character
  }



var length = userPwLength

var result = '';

//var charactersLength = characters.length;

for ( var i = 0; i < length; i++ ) {

password += Math.random(availableChars);

}

return result;






return password

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);