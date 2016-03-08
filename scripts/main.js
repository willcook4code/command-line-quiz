var counter = 0;
var questionNumber = 0;

console.log('1. Date.UTC begins on January 1 of what year?');
var one = prompt('1. Date.UTC begins on January 1 of what year?');

if (one === '1970') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct!');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('2. The parseFloat() function converts a string argument to return a floating point _______.');
var two = prompt('2. The parseFloat() function converts a string argument to return a floating point _______.');

if (two === 'number') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('3. Which property is used to present text in Helvetica - font-type or font-family?');
var three = prompt('3. Which property is used to present text in Helvetica - font-type or font-family?');

if (three === 'number') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('4. ":last-child" is an example of a _______.');
var four = prompt('4. ":last-child" is an example of a _______.');

if (four === 'pseudo-class' || 'pseudoclass') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('5. Is the <span> element classified as inline or block-level?');
var five = prompt('5. Is the <span> element classified as inline or block-level?');

if (five === 'inline') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('6. 1 em is equal to how many px?');
var six = prompt('6. 1 em is equal to how many px?');

if (six === '16' || 'sixteen') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('7. Which is larger on the page - <h3> or <h5>?');
var seven = prompt('7. Which is larger - <h3> or <h5>?');

if (seven === '<h3>') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('8. What type of operator is the "bang" (!)?');
var eight = prompt('8. What type of operator is the "bang" (!)?');

if (eight === 'Unary') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('9. Math.floor() rounds up or down?');
var nine = prompt('9. Math.floor() rounds up or down?');

if (nine === 'down') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('10. What symbol of a conditional operator translates to "OR"?');
var ten = prompt('10. What symbol of a conditional operator translates to "OR"?');

if (ten === '||') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('11. What HTML element connects a document to a style sheet?');
var eleven = prompt('11. What HTML element connects a document to a style sheet?');

if (eleven === '<link>') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('12. How do you center text in CSS? (_______: ______;)');
var twelve = prompt('12. How do you center text in CSS? (_______: ______;)');

if (twelve === 'text-align: center;' || 'text-align:center;') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('13. The class attribute can be added to "one HTML tag" or "multiple HTML tags"?');
var thirteen = prompt('13. The class attribute can be added to "one HTML tag" or "multiple HTML tags"?');

if (thirteen === 'multiple HTML tags') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('14. When centering a block element, enter "margin: 0 ____".');
var fourteen = prompt('14. When centering a block element, enter "margin: 0 ____".');

if (fourteen === 'auto') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}

console.log('15. To separate the distance between 2 lines of text, use which property - line-height or line-break?');
var fifteen = prompt('15. To separate the distance between 2 lines of text, use which property - line-height or line-break?');

if (fifteen === 'line-height') {
	counter += 1;
	questionNumber += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect :(');
	questionNumber += 1;
}
console.log(counter);
console.log('Your score: ' + (counter/questionNumber).toString() + '%!');




