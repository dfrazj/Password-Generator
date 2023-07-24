//multiple arrays of characters for user to pick from
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialcharacters = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var possiblePassword = []
var password = []

function getrandomarray (arr) {
  var randomindex = Math.floor (Math.random()*arr.length)
  var randomelement = arr[randomindex]
  return randomelement
}

function generatePassword () {
//Ask user how many characters the want in their password
var passwordLength = parseInt( window.prompt("How many characters would you like your password to contain?"));
if (Number.isNaN || passwordLength < 8 || passwordLength > 128) {
  window.alert ("must enter a number value, and number must be greater than 8 and less than 128.")
  return null
}
//Ask user if they want special characters in their password
var useofspecialcharacters = window.confirm ("Click OK to confirm including special characters.");
if (useofspecialcharacters === true) {
  possiblePassword += specialcharacters
}
console.log(possiblePassword);
//Ask user if they want numeric characters in their password
var useofnumericcharacters = window.confirm ("Click OK to confirm including numeric characters.");
if (useofnumericcharacters === true) {
  possiblePassword += numbers
}

//Ask user if they want lowercase characters in their password
var useoflowercasecharacters = window.confirm ("Click OK to confirm including lowercase characters.");
if (useoflowercasecharacters === true) {
  possiblePassword += lowerCaseLetters
}

//Ask user if they want uppercase characters in their password
var useofuppercasecharacters = window.confirm ("Click OK to confirm including uppercase characters.");
if (useofuppercasecharacters === true) {
  possiblePassword += upperCaseLetters
}

while (!useofspecialcharacters && !useofnumericcharacters && !useoflowercasecharacters && !useofuppercasecharacters) {
  window.alert ("must pick at least one option.");
  return null
}
for (var i = 0; i < possiblePassword.passwordLength; i++) {
  console.log(passwordLength);
  console.log (possiblePassword);
  var newPassword = getrandomarray(possiblePassword)
  console.log (newPassword);
  password.push (newPassword)
}
return password.join ("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
