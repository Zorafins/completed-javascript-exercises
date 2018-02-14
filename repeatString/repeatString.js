var repeatString = function(string,value) {
    if (value < 0) {
        return 'ERROR';
    } else {
        let repeatedString = ''
        for (i = 0;i < value;i++) {
        repeatedString += string; 
    }
    return repeatedString;
    }
}

module.exports = repeatString
