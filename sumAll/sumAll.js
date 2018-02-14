var sumAll = function(a, b) {
    
    if ((a < 0) || (b < 0) || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    } else if (a < b) {
        return ((b-a)+1) * (a + b) / 2;
    } else if (a > b) {
        return ((a-b)+1) * (b + a) / 2;  
    }
}

module.exports = sumAll
