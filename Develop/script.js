// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase1 = ["qwertyuiopasdfghjklzxcvbnm"];
var uppercase1 = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var numeric1 = ["1234567890"];
var specialchar1 = ["!#$%&'*+,-.?@^_`~"];
var characters = [""]
console.log(lowercase)
console.log(uppercase)

// Write password to the #password input
function writePassword() {
  for (var i = 0; i < 10; i++);
  var num = Math.floor(Math.random() * 10) ;
  
  var numberOfLetters = Math.floor(Math.random() * characters.length);
  generatePassword += characters.substring('numberOfLetters', `numberOfLetters`+ 1)
  
var generatePassword = document.querySelector("#password")
    console.log(num)
    console.log(generatePassword);
    console.log(numberOfLetters);

    
}
  generatePassword.value = password;

  generateBtn.addEventListener("click", writePassword); {

    var numberOfLetters = prompt("Pick a password length. 8-128 characters long.");
      if (numberOfLetters > 8, numberOfLetters < 128){ 
        
      alert("Goodluck remembering" + + numberOfLetters + + "characters!")
      }
      else if (numberOfLetters < 8, numberOfLetters > 128){
        alert("Nice going, I remember when I couldn't read instructions.")
      }
    
    
    var lowercase = confirm("Would you like to use lowercase?")
    var uppercase = confirm("Would you like to use uppercase?")
    var numeric = confirm("Would you like to use numbers?")
    var specialchar = confirm("Would you like to use special characters?")
    
     
    
      if (lowercase){
        characters.push([lowercase1])
      }
     if (uppercase){
        characters.push([uppercase1])
      }
      if (numeric){
        characters.push([numeric1]);
      }
      if (specialchar){
        characters.push([specialchar1]);
      }
      characters.splice("")
      console.log(numberOfLetters)
      console.log(characters)
    }
    