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

function reverseString(inputString) {
    const stringArray = inputString.split("");
    let moddedString = "";
    for (let i = stringArray.length - 1; i >= 0; i--) {
        moddedString += stringArray[i];
    }
    return moddedString;
}
module.exports = reverseString;

// calculator



// caesar cipher


// analyzeArray function
