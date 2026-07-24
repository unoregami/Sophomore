let divisibleBy = "";
divisibleBy = (x) => {
	console.log("-----START PROGRAM-----");
	for (let i = 0; i <= x; i++) {
		if (x <= 50){
			console.log(`The current value is at ${x}. TERMINATING...`);
			break;
		}

		if (i % 5 == 0){
			if (i % 10 == 0){
				console.log(`The current value is divisible by 10. SKIPPING...`);
				continue;
			}
			console.log(`The current value [${i}] is divisible by 5.`);
		}
	}
	console.log("-----END PROGRAM-----");
}

do {
	let userInput = parseInt(prompt("Enter a value: "));
	console.log(`This is your value: ${userInput}`);
	divisibleBy(userInput);

	var repeat = prompt("Do you want to try again?: ");
	repeat = repeat.toLowerCase();
} while (repeat == "yes" || repeat == "y");

console.log("Thanks for using the program");