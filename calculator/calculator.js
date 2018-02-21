function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
  //Using for loop

  //let sum = 0;
  //for (let i = 0; i < array.length; i++) {
  //  sum = sum + array[i];
  //}
  //return sum;

  //Using reduce()

  if (array.length == 0) {
	return 0;
  } else {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
  }
}

function multiply (array) {
  //Using for loop:

  //let sum = 1;
  //for (let i = 0; i < array.length; i++) {
	//sum = sum * array[i];
  //}
  //return sum;

  //Using reduce()

  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return array.reduce(reducer);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let x = a;
	if (x == 0) {
	  return 1;
	}
	while (x > 1) {
	  a *= x-1;
	  x--;
	}
	return a
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}