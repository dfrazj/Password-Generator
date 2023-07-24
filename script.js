//multiple arrays of characters for user to pick from
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialcharacters = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

//Ask user how many characters the want in their password
var passwordLength = window.prompt("How many characters would you like your password to contain?");

//Ask user if they want special characters in their password
var useofspecialcharacters = window.confirm ("Click OK to confirm including special characters.");

//Ask user if they want numeric characters in their password
var useofnumericcharacters = window.confirm ("Click OK to confirm including numeric characters.");

//Ask user if they want lowercase characters in their password
var useoflowercasecharacters = window.confirm ("Click OK to confirm including lowercase characters.");

//Ask user if they want uppercase characters in their password
var useofuppercasecharacters = window.confirm ("Click OK to confirm including uppercase characters.");


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
