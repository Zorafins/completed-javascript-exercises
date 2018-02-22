var snakeCase = function(str) {
    // Splits up WTF case only if there are 0 spaces in str
    if (str.indexOf(" ") < 0) {
        str = str.replace(/(\.\.)/g, " $1");
    }

    // Splits up camel case only if there are 0 spaces in str 
    if (str.indexOf(" ") < 0) {
        str = str.replace(/([A-Z])/g, " $1");
    }

    // Splits up kebab case
    str = str.replace(/([-])/g, " $1");

    // Remove all other punctuation
    str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"")

    // Replaces spaces with underscores and returns as lower case
    let splitString = str.split(" ");
    let joinedString = splitString.join("_");
    return joinedString.toLowerCase();
}

module.exports = snakeCase
