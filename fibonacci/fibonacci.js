var fibonacci = function(num) {

    // Deal with negatives
    if (num < 0) {
        return "OOPS";
    }

    let a = 0;
    let b = 1;
    for (let i = 1; i < num; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

module.exports = fibonacci
