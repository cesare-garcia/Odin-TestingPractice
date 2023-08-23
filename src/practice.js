// function capitalize -> takes a string and returns it with the first character capitalized

// function capitalize(inputString) {
//     const stringArray = inputString.split("");
//     stringArray[0] = stringArray[0].toUpperCase();
//     let moddedString = "";
//     for (let i = 0; i < stringArray.length; i++) {
//         moddedString += stringArray[i];
//     }
//     return moddedString;
// }
// module.exports = capitalize;

// reverseString -> takes a string and returns it reversed

// function reverseString(inputString) {
//     const stringArray = inputString.split("");
//     let moddedString = "";
//     for (let i = stringArray.length - 1; i >= 0; i--) {
//         moddedString += stringArray[i];
//     }
//     return moddedString;
// }
// module.exports = reverseString;

// calculator

// let calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a, b) {
//         return a - b;
//     },
//     divide: function(a, b) {
//         return a / b;
//     },
//     multiply: function(a, b) {
//         return a * b;
//     },
// };
// module.exports = calculator;

// caesar cipher

// function caesarCipher(inputString, key) {
//     let stringArray = inputString.split("");
//     let moddedString = "";

//     for (let i = 0; i < stringArray.length; i++) {
//         if (containsSpecialChar(stringArray[i])) {
//             moddedString += stringArray[i];
//         } else if (containsUppercase(stringArray[i])) {
//             let shiftedString = shiftUppercase(stringArray[i], key);
//             moddedString += shiftedString;
//         } else if (containsLowercase(stringArray[i])) {
//             let shiftedString = shiftLowercase(stringArray[i], key);
//             moddedString += shiftedString;
//         } else {
//             moddedString += stringArray[i];
//         }
//     }

//     return moddedString;
// };
// module.exports = caesarCipher;

// function containsUppercase(string) {
//     return /[A-Z]/.test(string);
// }

// function containsLowercase(string) {
//     return /[a-z]/.test(string);
// }

// function containsSpecialChar(string) {
//     return /[0-9-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(string);
// }

// function shiftUppercase(arrayElement, key) {
//     let ucAlphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     let elementCounter = 0;
//     while (arrayElement !== ucAlphabetArray[elementCounter]) {
//         elementCounter++;
//     }

//     elementCounter += key;

//     while (elementCounter >= 26) {
//         elementCounter -= 26;
//     }

//     return ucAlphabetArray[elementCounter];
// }

// function shiftLowercase(arrayElement, key) {
//     let lcAlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
//     let elementCounter = 0;
//     while (arrayElement !== lcAlphabetArray[elementCounter]) {
//         elementCounter++;
//     }

//     elementCounter += key;

//     while (elementCounter >= 26) {
//         elementCounter -= 26;
//     }

//     return lcAlphabetArray[elementCounter];
// }

// analyzeArray function
