var reverseString = function(str) {
  let splitString = str.split(''); // splits str into an array called splitString
  let reverseArray = splitString.reverse(); // reverses splitString array
  let joinArray = reverseArray.join(''); // joins reverseArray into a string
  return joinArray; 
}

module.exports = reverseString