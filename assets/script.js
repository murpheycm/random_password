//When "Generate Button" is clicked, questions are prompted
document.querySelector("#generate").addEventListener("click", writePassword);

//Variables and arrays for each password character type
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","@","#","^","(",")","`",";",":","{","}","]","[","|"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Confirm password length
function generatePassword() {
  var passwordLength = (prompt("What would you like your password length to be? Please choose a number between 8 and 129."));
  while(passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length must be between 8-129 characters.");
      passwordLength = (prompt("How many characters would you like your password to contain?"));
  }

  //Confirm password characters *Worked with Professor to Debug Code to keep it from re-looping
  var confirmSym = confirm("Click OK if you would like to include symbols.");
  var confirmNum = confirm("Click OK if you would like to include numbers.");    
  var confirmLower = confirm("Click OK if you would like to include lowercase letters.");
  var confirmUpper = confirm("Click OK if you would like to include uppercase letters.");
  
  while(confirmUpper === false && confirmLower === false && confirmSym === false && confirmNum === false) {
    alert("Please choose at least one parameter.");
    confirmSym = confirm("Click OK to confirm if you would like to include symbols.");
    confirmNum = confirm("Click OK to confirm if you would like to include numbers.");    
    confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters.");
    confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters.");  
  }

  // Actions for confirmations
  var pwChars = []
     
  if (confirmSym) {
      pwChars = pwChars.concat(symbol)
  }
  if (confirmNum) {
    pwChars = pwChars.concat(number)
  }   
  if (confirmLower) {
  pwChars = pwChars.concat(alpha)
  }
  if (confirmUpper) {
    pwChars = pwChars.concat(alphaUpper)
  }

  //String filled by random characters selected from the loop and arrays
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    newPassword = newPassword + pwChars[Math.floor(Math.random() * pwChars.length)];
  }
  return newPassword;
}

//Print password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}