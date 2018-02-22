var palindromes = function(str) {
    let splitString = str.split("");
    for (i = 0;i < splitString.length; i++) {
        if ((splitString[i] === "!") || (splitString[i] === ",") || (splitString[i] === ".")) {
            splitString.splice(i, 1);
        }
    }
    let puncRemoved = splitString.join(""); // string with punctuation removed
    let spacesRemoved = puncRemoved.replace(/ +/g, ""); // string with spaces also removed
    let spacesRemovedArray = spacesRemoved.split(""); // turns spaces removed string into an array
    let reversedArray = spacesRemovedArray.reverse(); // reverses spaces removed array
    let reversedString = reversedArray.join(""); // joins reversed array
    if (reversedString.toLowerCase() === spacesRemoved.toLowerCase()) { // compares the reversed string with the non-reversed string
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
