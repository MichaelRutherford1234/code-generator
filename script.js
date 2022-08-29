// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//Todo: code goes here
var lower = 'abcdefghijklmnopqrstuvwxyz';
var  upper = lower.toLocaleUpperCase();
var numbers = '0123456789'
var special = '"#$%&\'()*+,-./<=>?@[\]^_`{|}~';
var possible = "";
var password = '';

var characters= 12; 

var hasLower = confirm('has lowercase letter?');
var hasUpper = confirm('has uppercase letter?');
var hasNumber = confirm('has numbers?');
var hasSpecial = confirm(' has special characters');

if (hasLower) {
  possible += lower;
}
if (hasUpper){
  possible += upper;
}
if (hasNumber) {
  possible += numbers;
}
if (hasSpecial){
  possible += special;
}  
for (var i = 0; i < characters; i++) {
  var random = Math.floor(Math.random()* possible.length);
  console.log(random);
  password += special;
}

return '';

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

h