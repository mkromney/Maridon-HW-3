// Assignment Notes: 
// You'll want to make sure you can generate special characters:
// "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// This is a list of all possible characters that can be included, and selected for password use - in order to provide separate prompts for them, I had to split them up into different sets //
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


// 


// This var prompts the user to enter the length of the password that they want //
var passwordLength = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));

// Makes sure the password length is between 8 and 128, and does not allow the user to choose a length outside of these parameters //
while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  passwordLength = parseInt(prompt("Please enter a number between 8 and 128:"));
}

// These lines prompt the user on whether or not to include the various possible character types // 
var includeUppercase = confirm("Include uppercase characters in your password?");
var includeLowercase = confirm("Include lowercase characters in your password?");
var includeNumbers = confirm("Include numbers in your password?");
var includeSpecialChars = confirm("Include special characters in your password?");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// This for loop Generates the password based on the selected criteria
  for (var i = 0; i < passwordLength; i++) {
   // Randomly choose a character type based on the selected criteria
   var charType = "";
   if (includeUppercase) charType += uppercaseChars;
   if (includeLowercase) charType += lowercaseChars;
   if (includeNumbers) charType += numberChars;
    if (includeSpecialChars) charType += specialChars;
   var randomChar = charType.charAt(Math.floor(Math.random() * charType.length));
}

  // Add the randomly chosen character to the password
  password += randomChar;

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - "this is a way that you can wait for user interaction like a click or keypress and then run some code whenevber that action happens"- definition from https://blog.webdevsimplified.com/2022-01/event-listeners/#:~:text=An%20event%20listener%20in%20JavaScript,click%20events%20on%20a%20button. //

generateBtn.addEventListener("click", writePassword);

