var counter = 0;
var questionNumber = 0;

console.log('1. Date.UTC begins on January 1 of what year?');
var one = prompt('1. Date.UTC begins on January 1 of what year?');
questionNumber += 1;

if (one === '1970') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: 1970');
}

console.log('2. The parseFloat() function converts a string argument to return a floating point _______.');
var two = prompt('2. The parseFloat() function converts a string argument to return a floating point _______.');
questionNumber += 1;

if (two.toLowerCase() === 'number') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: number');
}

console.log('3. Which property is used to present text in Helvetica: font-type or font-family?');
var three = prompt('3. Which property is used to present text in Helvetica: font-type or font-family?');
questionNumber += 1;

if (three.toLowerCase() === 'font-family') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: font-family');
}

console.log('4. ":last-child" is an example of a _______.');
var four = prompt('4. ":last-child" is an example of a _______.');
questionNumber += 1;

if ((four.toLowerCase() === 'pseudo-class') || (four.toLowerCase() === 'pseudoclass')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: pseudo-class');
}

console.log('5. Is the <span> element classified as inline or block-level?');
var five = prompt('5. Is the <span> element classified as inline or block-level?');
questionNumber += 1;

if (five.toLowerCase() === 'inline') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: inline');
}

console.log('6. 1 em is equal to how many px?');
var six = prompt('6. 1 em is equal to how many px?');
questionNumber += 1;

if ((six.toLowerCase() === '16') || (six.toLowerCase() === 'sixteen')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: 16');
}

console.log('7. Which is larger on the page: <h3> or <h5>?');
var seven = prompt('7. Which is larger: <h3> or <h5>?');
questionNumber += 1;

if ((seven.toLowerCase() === '<h3>') || (seven.toLowerCase() ===  'h3')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: <h3>');
}

console.log('8. What type of operator is the "bang" (!)?');
var eight = prompt('8. What type of operator is the "bang" (!)?');
questionNumber += 1;

if (eight.toLowerCase() === 'unary') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: Unary');
}

console.log('9. Math.floor() rounds up or down?');
var nine = prompt('9. Math.floor() rounds up or down?');
questionNumber += 1;

if ((nine.toLowerCase() === 'down') || (nine.toLowerCase() ===  'rounds down')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: down');
}

console.log('10. What symbol of a conditional operator translates to "OR"?');
var ten = prompt('10. What symbol of a conditional operator translates to "OR"?');
questionNumber += 1;

if (ten.toLowerCase() === '||') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: ||');
}

console.log('11. What HTML element connects a document to a style sheet?');
var eleven = prompt('11. What HTML element connects a document to a style sheet?');
questionNumber += 1;

if ((eleven.toLowerCase() === '<link>') || (eleven.toLowerCase() === 'link')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: <link>');
}

console.log('12. How do you center text in CSS? (_______: ______;)');
var twelve = prompt('12. How do you center text in CSS? (_______: ______;)');
questionNumber += 1;

if ((twelve.toLowerCase() === 'text-align: center;') || (twelve.toLowerCase() === 'text-align:center;') || (twelve.toLowerCase() === 'text-align: center') || (twelve.toLowerCase() === 'text-align:center')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: text-align: center;');
}

console.log('13. The class attribute can be added to "one HTML tag" or "multiple HTML tags"?');
var thirteen = prompt('13. The class attribute can be added to "one HTML tag" or "multiple HTML tags"?');
questionNumber += 1;

if ((thirteen.toLowerCase() === 'multiple HTML tags') || (thirteen.toLowerCase() === 'multiple')) {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: multiple HTML tags');
}

console.log('14. When centering a block element, enter "margin: 0 ____".');
var fourteen = prompt('14. When centering a block element, enter "margin: 0 ____".');
questionNumber += 1;

if (fourteen.toLowerCase() === 'auto') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: auto');
}

console.log('15. To separate the distance between 2 lines of text, use which property - line-height or line-break?');
var fifteen = prompt('15. To separate the distance between 2 lines of text, use which property - line-height or line-break?');
questionNumber += 1;

if (fifteen.toLowerCase() === 'line-height') {
	counter += 1;
	console.log('Correct! :D');
}	else {
	console.log('Incorrect: line-height');
}

console.log(counter);
console.log('Your score: ' + (Math.ceil(counter/questionNumber*100)).toString() + '%!');




