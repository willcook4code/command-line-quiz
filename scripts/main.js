counter = 0

console.log('1. Date.UTC begins on January 1 of what year?');
var one = prompt('1. Date.UTC begins on January 1 of what year?');

if (one === '1970') {
	counter += 1;
	console.log('Correct!');
}	else {
	console.log('Incorrect :(');
}

console.log('2. The parseFloat() function converts a string argument to return a floating point _______.');
var two = prompt('2. The parseFloat() function converts a string argument to return a floating point _______.');

if (two === 'number') {
	counter += 1;
	console.log('Correct!');
}	else {
	console.log('Incorrect :(');
}

console.log(counter);
console.log('Your score: ' + (counter/15).toString() + '%!' );