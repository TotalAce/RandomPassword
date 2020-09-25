// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase1 = "qwertyuiopasdfghjklzxcvbnm";
var uppercase1 = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numeric1 = "1234567890";
var specialchar1 = "!#$%&'*+,-.?@^_`~";
var characters = ""
var finalPassword = ""
console.log(lowercase1)
console.log(uppercase1)
console.log(characters)

  function writePassword() {  
    var numberOfLetters = prompt("Pick a password length. 8-128 characters long.");
      if (numberOfLetters > 8, numberOfLetters < 128){ 
        
      alert("Goodluck remembering " + numberOfLetters + " characters!")
      }
      else if (numberOfLetters < 8, numberOfLetters > 128){
        alert("Nice going, I remember when I couldn't read instructions.")
      }
    
    var lowercase = confirm("Would you like to use lowercase?")
    var uppercase = confirm("Would you like to use uppercase?")
    var numeric = confirm("Would you like to use numbers?")
    var specialchar = confirm("Would you like to use special characters?")
    
    
      if (lowercase){
        characters += lowercase1;
      }
     if (uppercase){
        characters += uppercase1;
      }
      if (numeric){
        characters += numeric1;
      }
      if (specialchar){
        characters += specialchar1;
      }
     // console.log(numberOfLetters)
      console.log(characters)


// Write password to the #password input

  for (var i = 0; i < numberOfLetters; i++) {
  var randoIndex = Math.floor(Math.random() * numberOfLetters) ;
  var randoElement = characters[randoIndex];
  finalPassword = finalPassword + randoElement;

console.log(randoIndex)
}
console.log(finalPassword) 

var generatePassword = document.querySelector("#password")
generatePassword.value = finalPassword;
}
generateBtn.addEventListener("click", writePassword); 

    
    
    
    
    