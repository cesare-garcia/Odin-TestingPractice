// function capitalize -> takes a string and returns it with the first character capitalized

function capitalize(inputString) {
    const stringArray = inputString.split("");
    stringArray[0] = stringArray[0].toUpperCase();
    let moddedString = "";
    for (let i = 0; i < stringArray.length; i++) {
        moddedString += stringArray[i];
    }
    console.log(moddedString);
    return moddedString;
}
module.exports = capitalize;

// reverseString -> takes a string and returns it reversed



// calculator



// caesar cipher


// analyzeArray function
