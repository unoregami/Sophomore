/*
JSON Objects
	- JavaScript Objects Notation
	- Serialization is the process of converting data into a series of bytes for easier trasmission/transfer of information

	Syntax:
		{
			"propertyA": "valueA",
			"propertyB": "valueB"
		}
*/
const prompt = require("prompt-sync")();
address = {
	"city": "Dasma",
	"province": "Cavite",
	"country": "Philippines"
}
console.log(address);

/*
JSON Methods
	- stringified JSON is JavaScript Object converted into string to be used in other functions of a JavaScript Application
*/

let batchesArr = [{batchName: "Batch X"}, {batchName: "Batch Y"}];

// The stringify method is used to convert JavaScript objects into string
console.log("Result from stringify method: ");
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
	name: "Juan",
	age: 31,
	address: {
		city: "Manila",
		country: "Philippines"
	}
})
console.log(data);

//User Details
let firstName = prompt("What is your First Name: ");
let lastName = prompt("What is your Last Name: ");
let age = prompt("What is your Age: ");

let otherData = JSON.stringify({
	firstName: firstName,
	lastName: lastName,
	age: age
})

console.log(otherData);