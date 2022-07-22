// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");


// make an array for the password generator
var passwordCriteria = {
  numbers: "1234567890",
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", 
  lowerCases: "abcdefghijklmnopqrstuvwxyz",
  upperCases: "ABCDEFGHIJKLMNOPQRSTUVQXYZ",
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt questions fo password generator
function generatePassword() {

  // to make password selector empty
var selectPassword = "";

// sets length to 8 to make while loop, if length <= 7 and >= 129 it will promt to enter only between 8 nd 128
config = {
    passwordLength: 8,
  };
  
    while (true) {
  var passwordLength = window.prompt("Please enter the number of characters you want for your new password. Select between 8 to 128 only!");
        if (passwordLength >= 8 && passwordLength <= 128) {
          break;
        } else {
          window.alert("Please enter a number betwwen 8 and 128 only!!!");
        }
      };
  // to confirm if user wants to include numbers 
  var numbers = window.confirm("Do you want to include numbers in your password?");

  // to confirm if user wants to include lowe case
  var lowerCases = window.confirm("Do you want to include lower cases in your password?");

  // to confirm if user wants to include numbers 
  var upperCases = window.confirm("Do you want to include upper cases in your password?");

  // to confirm if user wants to include numbers 
  var special = window.confirm("Do you want to include special characters in your password?");

  // if true will get values from passwor criteria to add in the password selector variable
  if (numbers == true) {
    selectPassword += passwordCriteria.numbers;
  }

  if (lowerCases == true) {
    selectPassword += passwordCriteria.lowerCases;
  }

  if (upperCases == true) {
    selectPassword += passwordCriteria.upperCases;
  }

  if (special == true) {
    selectPassword += passwordCriteria.special;
  }

  var randomPassword = "";

  // to make sure password length is a number & not a string, covert to int
  passwordLength = parseInt(passwordLength);

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += (selectPassword[Math.floor(Math.random() * selectPassword.length)]);
  }
  return randomPassword;

};
