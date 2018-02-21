function echo(value) {
	return value;
}

function shout(value) {
	return value.toUpperCase();
}

function repeat(value, num) {
	if (num == undefined) {
		return value + " " + value;
	}
	let repeatedValue = "";
	for (i=0; i<num; i++) {
		repeatedValue += (value + " ")
	}
	return repeatedValue.slice(0, -1);
}

function pieceOfWord(value, num) {
	return value.slice(0, num);
}

function firstWord(value) {
	let array = value.split(" ");
	return array[0];
}

function titleCreator(value) {
	let titleCase = value.replace(/\b\w/g, l => l.toUpperCase());
	let array = titleCase.split(" ");
	for (i = 0; i < array.length; i++) {
		if ((array[i] == "And") && i != 0) {
			array[i] = "and";
		} else if ((array[i] == "The") && i != 0) {
			array[i] = "the";
		} else if ((array[i] == "Over") && i != 0) {
			array[i] = "over";
		}
	}
	return array.join(" ");
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}