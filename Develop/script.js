// We begin with an empty function that will define a password based on the attributes that follow it //
function generatePassword() {
  // parseInt takes an argument and turns it into a string that returns a value, in this case we need to ask it to define the length of the password, the parameters are set below //
  var passwordLength = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));

  // Here we have ensureed that the password will not exceed nor fall below a certain length based on the criteria I set - not less than 8 and not more than 128, the while function logs this and returns an error if a given number falls outside these parameters //
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Invalid input! Please enter a number between 8 and 128:"));
  }

  // These lines create confirmation boxes which ask the user which character types to include. They became the references I use in the for loop below //
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
  var includeNumbers = confirm("Do you want to include numbers in your password?");
  var includeSpecialChars = confirm("Do you want to include special characters in your password?");

  // These variables define the sorts of characters that will be possible to generate a password from. Pulled the special characters list from owasp.org, but did not include double quotes ", they messed up the string, also not all symbols are allowed on all sites, and there is a foreign language consideration here, for example Swedish with åäö &c. //
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numberChars = "0123456789";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

  // We need to have an open variable not yet defined by the parameters - a user will later define //
  var password = "";

  // This for loop considers the user's input selections and uses if statements to decide whether or not to use a character type in the password. It considers the password length the user stored under the passwordLength var //
  for (var i = 0; i < passwordLength; i++) {
    // Randomly choose a character type based on the selected criteria
    var charType = ""; 
    if (includeUppercase) charType += uppercaseChars;
    if (includeLowercase) charType += lowercaseChars;
    if (includeNumbers) charType += numberChars;
    if (includeSpecialChars) charType += specialChars;

    // This line was particularly difficult to figure out. The variable randomChar is determined by: math.floor which "rounds down and returns the largest integer less than or equal to a given number. math.random returns a double value with a positive sign, greater than or equal to 0.0 and less than 1.0 - essentially we are determining the range of possibilities, and making sure that while they are random, they fall within in the parameters we have set, from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor - and: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - this code also references the length we set in previous lines under passwordLength //
    var randomChar = charType.charAt(Math.floor(Math.random() * charType.length));
    
    // This bit will add the user's chosen character types. The '+=' operator I use above and below is known as the addition assignment and it performs an addition - usually a string concatenation - and assigns the result to the left operand. Learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment //
    password += randomChar;
  }

  // This return function "ends function execution and specifies a value to be returned to the function caller" definition from https://www.google.com/search?q=what+does+return+do+in+js&oq=what+does+return+do+in+js&aqs=chrome..69i57j0i20i263i512j0i512l8.3649j1j7&sourceid=chrome&ie=UTF-8 //
  return password;
}

// This function's task is to write the password. This is linked to the box in the HTML script and allows us to see the coded responses of our queries. The hashtag # in #password is an ID attribute of the linked HTML element, using the query.selector as a criteria we can pull the first element that matches the parameters given in the code above //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add an event listener to the "Generate Password" button to call the writePassword function //
// Adds an event listener to generate button - "this is a way that you can wait for user interaction like a click or keypress and then run some code whenever that action happens"- definition from https://blog.webdevsimplified.com/2022-01/event-listeners/#:~:text=An%20event%20listener%20in%20JavaScript,click%20events%20on%20a%20button. //
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);