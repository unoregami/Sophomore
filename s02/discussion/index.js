// console.log("hi");

// [SECTION] Exponent Operator
const firstNum = 8 ** 2;
console.log(firstNum);
const secondNum = Math.pow(8, 2);
console.log(secondNum);


/* [SECTION] Template Literals
	it allows us to write strings w/o using the concat - code readability
*/
let name = "Juan";


// Pre-Template Literal String
// Using single quotes
let message = 'Hello ' + name + '! Welcome to programming!';
console.log('Message without Template Literals: ' + message);

message = `Hello ${name} ! Welcome to Programming!`;
console.log(`Message with Template Literals: ${message}`);


/* Template literals allow us to write strings with embedded JavaScript expression
- expression are any valid unit of code that resolves a value
- `${}` are used to include JavaScript expression in strings using template literals
*/
const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);


/* Array Destructuring
	- allows us to unpack elements in arrays into distinct variables
	- allows us to name array elements with variables instead of using index number
	- it helps with code readability

	Syntax:
		let/const [variableName, variableName2, variableName3]
*/
const fullName = 'Juan Dela Cruz';
const fullName1 = ['Juan', 'Dela', 'Cruz'];

// Pre-Array Destructing
console.log("Pre-Array Destructing: 	")
console.log(fullName1[0]);
console.log(fullName1[1]);
console.log(fullName1[2]);

console.log(`Hello ${fullName1[0]} ${fullName1[1]} ${fullName1[2]}! It's nice to meet you.`);

// Array Destructuring
const [firstName, middleName, lastName] = fullName1;

console.log("Array Destructuring: ")
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName} ${middleName} ${lastName}. It's nice to meet you.`);


/* [SECTION] Object Destructing
	- allows to us unpack of object into distinct variables
	- shortens the syntax for accessing properties from objects

	Syntax:
		let/const {propertyName, propertyName2, propertyName3}
*/
const person = {
	givenName: 'Jane',
	maidenName: 'Baltazar',
	familyName: 'Bautista',
};

// Pre-Object Destructing
console.log("Pre-Object Destructing: ");
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);


// Object Destructing
const {givenName, maidenName, familyName} = person;

console.log("Object Destructing: ");
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

// Using function
function getFullName({givenName, maidenName, familyName}) {
	console.log(`${givenName} ${maidenName} ${lastName}`);
};

getFullName(person);


/* [SECTION] Arrow Function
	- compact alternative syntax to traditional functions
	- useful for code snippets where creating function will not be reused in any other portion of the code
	- adheres to the "DRY" (Don't Repeat Yourself) principle where there is no longer need to create a function and think of a name for function that will only be used in certain code snippets

	Syntax:
		const variableName = () => {
			console.log()
		}
*/
const hello = () => {
	console.log("Hello World using Arrow Function");
};

hello();


/*
	function functionName(parameterA, parameterB){
		console.log();
	};
*/
function printFullName(firstName, maidenName, lastName){
	console.log(firstName + ' ' + maidenName + ' ' + lastName);
};

printFullName('Pedro', 'Navarro', 'Penduko');


// arrow function
const printFullName1 = (firstName, maidenName, lastName) => {
	console.log(`${firstName} ${maidenName} ${lastName}`);
};

printFullName1('Sophia', 'Macalindong', 'Masilag');


// Arrow Function - the function is only used in the 'forEach' method to print out a text with the statement's name
const students = ['Juan', 'Pedro', 'Romel'];

students.forEach((student) => {
	console.log(`${student} is a student`);
});