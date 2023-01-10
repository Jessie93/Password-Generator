// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  
  
  
  var get = document.querySelector("#generate");
  
  get.addEventListener("click", function () {
      ps = generatePassword();
  });
  
  const passwordElement = document.getElementById('password');
  const generateBtn = document.getElementById('generate-btn');
  
  function generatePassword() {
    let enter = parseInt(prompt("How many characters would you like in your password? Please choose between 10 and 64"));
  
    if (!enter) {
        alert("Please enter a number between 10 and 64");
    } else if (enter < 10 || enter > 64) {
        enter = parseInt(prompt("Please enter a number between 10 and 64"));
    }
  // Questions i would like asking
  // Let description from google Description. let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.
    let wantUpper = confirm('Do you want to include upper case letters?');
    let wantLower = confirm('Do you want to include lower case letters?');
    let wantNumber = confirm('Do you want to include numbers?');
    let wantSpecials = confirm('Do you want to include symbols?');
    if (
        !wantSpecials && !wantLower && !wantNumber && !wantUpper
      ) {
      alert('You must select at least one character type');
      return;
    }
    
  
    // if statement - looks to see if any of the 'wantUpper' 'wantNumber' etc are true. if so it will add the full character set to the passwordOptions. it does this by =+ 'upperCaseCharacters' etc
    // passwordOptions makes password
    // Something here isnt working!!
    let passwordOptions = '';
    if (wantUpper) {
      passwordOptions += upperCasedCharacters;
    }
    if (wantLower) {
      passwordOptions += lowerCasedCharacters;
    }
    if (wantNumber) {
      passwordOptions += numericCharacters;
    }
    if (wantSpecials) {
      passwordOptions += specialCharacters;
    }
    
  
  
    // password variable is an array placeholder for user generated amount of length
    let generatedPassword = [];
    
    // Start random selection variables:
    for (let i = 0; i < enter; i++) {
      let pickChoices = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
      generatedPassword.push(pickChoices);
  }
  
  
  
    // This joins the password array and converts it to a string
    let ps = generatedPassword.join("");
    passwordElement.value = ps;
    return ps;
  }
  
  