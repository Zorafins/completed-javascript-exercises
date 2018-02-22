// Uses Evan Hahn's Caesar Shift code found at https://gist.github.com/EvanHahn/2587465

var caesar = function(str, shift) {

    // Wrap the shift factor
	if (shift < 0)
        return caesar(str, shift + 26);

    // Output variable
    let output = '';

    // Loop through each character
    for (let i = 0; i < str.length; i++) {

        // Get the character we'll be appending
        let character = str[i];

        // If it's a letter...
        if (character.match(/[a-z]/i)) {

            // Get its char code
            let code = str.charCodeAt(i);

            // Uppercase letters
            if ((code >= 65) && (code <= 90)) {
                character = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Lowercase letters
            else if ((code >= 97) && (code <= 122)) {
                character = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        // Append
        output += character;

    }


    return output;
}

module.exports = caesar
