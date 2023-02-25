// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var low = "abcdefghijklmnopqrstuvwxyz";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var concatStr = "";
var generatedPass = "";
var password = "";

var randomNum = function (str) {
  return Math.floor(Math.random() * str.length);
};

// Write password to the #password input
function writePassword() {
  var lowNum = confirm("Should your password include lowercase characters?");
  var upNum = confirm("Should your password include uppercase characters?");
  var num = confirm("Should your password include numeric characters?");
  var specChar = confirm("Should your password include special characters?");
  var passLength = parseInt(
    prompt(
      "How many characters long should your password be?\n 8 - 128 supported"
    )
  );

  if (lowNum) {
    concatStr += low;
  }
  if (upNum) {
    concatStr += up;
  }
  if (num) {
    concatStr += numeric;
  }
  if (specChar) {
    concatStr += special;
  }
  // Error handling
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = prompt(
      "That doesn't appear to be a number, please try again.\nAccepted criteria is a numeric value from 8 - 128.\n\nHow long should your password be?"
    );
    if (typeof passLength == "number" && passLength > 8 && passLength < 128)
      break;
  }

  // Randomize concatenated string based on user choice, and choose indices to the length of the user choices
  for (var i = 0; i < concatStr.length; i++) {
    generatedPass += concatStr[randomNum(concatStr)];
  }

  for (var n = 0; n < passLength; n++) {
    {
      password += generatedPass[randomNum(generatedPass)];
    }
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
