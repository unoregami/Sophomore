let trainer = {
	name: "Ashe BananaKetchup",
	age: Math.floor(Math.random() * (99 - 13) + 13),
	gender: "Male"
};

//POTION COUNT
let potionCount = 35;

function Pokemon(name, level, wild1){
	// Properties
	this.name = name;
	this.level = Math.floor(level);
	this.exp = 0;
	this.health = Math.round((10 * this.level) + (0.2 * (10 * this.level))) ;
	let maxHealth = this.health;
	let isFaint = false;
	let randomAtk = Math.random() * (7 - 4) + 4;
	this.attack = Math.round(randomAtk + (randomAtk * (0.1 * this.level)));
	let wild = wild1;
	if (wild == true) {
		for (let i = 0; i < this.level; i++){
			this.attack = Math.round(this.attack * 0.1 + this.attack);
		}
	}
	

	//Methods
	this.tackle = function(target, wild) {
		let chance = Math.floor(Math.random() * (5 - 3) + 4);
		if (wild == true) {
			chance = Math.floor(Math.random() * 5 + 1);
		}
		console.log(`${this.name} TACKLED ${target.name}!`)
		switch (chance){
		case 1:
		case 2:
		case 3:
			console.log(`But it MISSED!`);
			break;
		case 4:
		case 5:
			chance = Math.floor(Math.random() * 6 + 1);
			if (chance == 6) {
				console.log(`A CRITICAL HIT!!`);
				target.health = target.health - (this.attack * 2);
			} else {
				target.health = target.health - this.attack;	
			}
			if (target.health <= 0) {
				target.health = 0;
				break;
			}
			console.log(`${target.name}'s health is now reduced to ${target.health}`);
			break;
		}
	}

	this.items = function(){
		console.log(`[0]BACK | [1]FULL HEATLTH POTION (${potionCount})`);
		while (true) {
			let decision = prompt("What item will you use: ");
			decision = decision.toLowerCase();
			switch (decision){
			case "back":
			case "0":
				return 0;
			case "potion":
			case "full health potion":
			case "1":
				if (potionCount > 0) {
					potionCount -= 1;
					this.health = maxHealth;
					console.log(`Trainer ${trainer.name} used POTION! ${this.name} is back to ${this.health} health!`);
					return console.log(`POTIONS REMAINING: ${potionCount}`);
				}
				return console.log("YOU HAVE NO POTIONS LEFT!");
			default:
				console.log("Your choice is INVALID. Try again");
			}
		}
	}

	//LIST POKEMONS TO SWITCH
	this.switch1 = function() {
		while (true){
			for (let i = 0; i < catchedPokemons.length; i++) {
				if (i == 0) {
					console.log(`[${i}]BACK`);
				}
				console.log(`[${i+1}]${catchedPokemons[i].name}`);
			}

			let json = {};
			let decision = prompt("SELECT A POKEMON TO INSPECT: ");
			if (catchedPokemons.length == 1) {
				switch (decision){
				case "0":
					return 0;
				case "1":
					json = JSON.stringify(catchedPokemons[0]);
					console.log(`${json}`);
					if (catchedPokemons[0].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(0);
				default:
					console.log("Your choice is INVALID. Try Again.");
					continue;
				}
			} else if (catchedPokemons.length == 2) {
				switch (decision){
				case "0":
					return 0;
				case "1":
					json = JSON.stringify(catchedPokemons[0]);
					console.log(`${json}`);
					if (catchedPokemons[0].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(0);
				case "2":
					json = JSON.stringify(catchedPokemons[1]);
					console.log(`${json}`);
					if (catchedPokemons[1].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(1);
				default:
					console.log("Your choice is INVALID. Try Again.");
					continue;
				}
			} else if (catchedPokemons.length == 3) {
				switch (decision){
				case "0":
					return 0;
				case "1":
					json = JSON.stringify(catchedPokemons[0]);
					console.log(`${json}`);
					if (catchedPokemons[0].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(0);
				case "2":
					json = JSON.stringify(catchedPokemons[1]);
					console.log(`${json}`);
					if (catchedPokemons[1].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(1);
				case "3":
					json = JSON.stringify(catchedPokemons[2]);
					console.log(`${json}`);
					if (catchedPokemons[2].getFaint() == true) {
						console.log("THIS POKEMON HAS FAINTED.");
						continue;
					}
					return swap(2);
				default:
					console.log("Your choice is INVALID. Try Again.");
					continue;
				}
			}
		}
	}

	this.catch = function(target){
		let maxHP = target.getMaxHP();
		let rate = (maxHP * 255 * 4) / (target.health * 12);
		let prob = Math.floor(Math.random() * (255 - 128) + 128);

		if (rate >= prob || target.health <= Math.round(maxHP * 0.33)) {
			target.name = target.name.replace("Wild ", "");
			console.log(`CATCH SUCCESS! You have caught ${target.name}!`);
			target.unWild();
			catchedPokemons.push(target);
			return true;
		} else {
			console.log("Catch failed.");
		}
	}

	this.run = function(){
		let chance = Math.floor(Math.random() * 3 + 1);
		if (this.level < 3) {
			chance = 1;
		}
		switch (chance) {
		case 1:
		case 2:
			console.log("You have fled successfully.");
			return 1;
		case 3:
			console.log("Fleeing has FAILED.");
		}
	}

	this.levelUp = function(){
		let presentLevel = this.level;
		if (this.level >= 10){
			if (this.exp >= 100) {
				this.exp = 100;
			}
			return console.log(`${this.name} is at MAXIMUM LEVEL!`);
		}
		while (this.exp >= 100) {
			this.exp -= 100;
			this.level += 1;
		}
		if (presentLevel < this.level){
			this.health = Math.round(maxHealth * 0.2 + maxHealth);
			maxHealth = this.health;
			this.attack = Math.round(this.attack * 0.1 + this.attack);
			console.log(`${this.name} has LEVELED up to... ${this.level}!\nHP: ${this.health}\nATK: ${this.attack}`);
		}
	}

	this.learnSkill = function(){
		{};
	}

	this.faint = function(){
		console.log(this.name + ' FAINTED.');
		isFaint = true;
	}

	this.unFaint = function(){
		console.log(this.name + ' IS BACK IN THE BALL GAME!');
		isFaint = false;
	}

	this.unWild = function(){
		wild = false;
	} 

	this.getMaxHP = function(){
		return maxHealth;
	}

	this.getFaint = function(){
		return isFaint;
	}
} 


//BATTLE FUNCTION
function battle(yourPokemon, enemyPokemon, trainerPokemon){
	this.gainExp = function(myLevel, enemyLevel){
		let exp = Math.floor((enemyLevel / myLevel) * (Math.random() * (50 - 30) + 30));
		yourPokemon.exp += exp
		console.log(`${yourPokemon.name} GAINED ${exp} EXP!`);
	}

	console.log(`${enemyPokemon.name} APPEARS! ${yourPokemon.name} GO!`);
	this.json = JSON.stringify(yourPokemon);
	console.log(this.json);
	json = JSON.stringify(enemyPokemon);
	console.log(this.json);

	this.number = 0;
	while (yourPokemon.run != 1) {
		console.log("[1]TACKLE\t|\t[2]ITEMS\n[3]SWITCH\t|\t[4]CATCH\n[5]RUN\t\t|");
		let decision = prompt("What will you do?");
		decision = decision.toLowerCase();

		switch (decision){
		case "tackle":
		case "1":
			yourPokemon.tackle(enemyPokemon, false);
			break;
		case "items":
		case "2":
			this.x = yourPokemon.items();
			if (this.x == 0) {
				continue;
			}
			break;
		case "switch":
		case "3":
			yourPokemon.switch1();
			yourPokemon = catchedPokemons[0];
			break;
		case "catch":
		case "4":
			if (catchedPokemons.length >= 3){
				console.log("YOU ALREADY HAVE THE MAXIMUM AMOUNT OF POKEMONS!");
				break;
			}
			if (trainerPokemon == true) {
				console.log("You cannot catch your opponent's pokemon. silly.");
				break;
			}
			var isCatched = yourPokemon.catch(enemyPokemon);
			break;
		case "run":
		case "5":
			this.number = yourPokemon.run();
			break;
		default:
			console.log("Your choice is INVALID. Try Again.");
			continue;
		}
		if (this.number == 1){
			break;
		}

		if (enemyPokemon.health <= 0) {
			enemyPokemon.faint();
			this.gainExp(yourPokemon.level, enemyPokemon.level);

			if (yourPokemon.exp >= 100) {
				yourPokemon.levelUp();
			}
			break;
		}
		if (isCatched == true){
			break;
		}

		if (trainerPokemon == true) {
			enemyPokemon.tackle(yourPokemon, false);
		} else {
			enemyPokemon.tackle(yourPokemon, true);	
		}

		if (yourPokemon.health <= 0) {
			yourPokemon.faint();
			let x = catchedPokemons[0].getFaint();
			let y = "";
			let z = "";
			if (catchedPokemons.length == 2){
				y = catchedPokemons[1].getFaint();	
			} else if (catchedPokemons.length == 3) {
				y = catchedPokemons[1].getFaint();
				z = catchedPokemons[2].getFaint();
			}
			
			switch (catchedPokemons.length) {
			case 1:
				if (x == true) {
				console.log(`All your Pokemons have fainted. YOU LOST.`)
				return true;
				}
			case 2:
				if (x == true && y == true) {
				console.log(`All your Pokemons have fainted. YOU LOST.`)
				return true;
				}
			case 3:
				if (x == true && y == true && z == true) {
				console.log(`All your Pokemons have fainted. YOU LOST.`)
				return true;
				}
			}

			yourPokemon.switch1();
			yourPokemon = catchedPokemons[0];
		}
	}
}

//SWAPS CURRENT POKEMON TO INDEX 0
function swap(index){
	if (index == 0) {
		return console.log("YOU ARE ALREADY USING THIS POKEMON!");
	}
	let x = catchedPokemons[0];
	catchedPokemons[0] = catchedPokemons[index];
	catchedPokemons[index] = x;
	console.log(`You are now using ${catchedPokemons[0].name}`);
}

//RELEASE POKEMON
function release(index){
	if (catchedPokemons.length == 1) {
		return console.log("YOU CANNOT RELEASE THIS POKEMON. YOU ONLY HAVE 1 POKEMON!");
	}
	let releasedPokemon = "";
	let last = catchedPokemons.length - 1
	if (index == last) {
		releasedPokemon = catchedPokemons[last].name;
		catchedPokemons.pop();
		return console.log(`${releasedPokemon} has been RELEASED! Bye-bye!`);
	}
	let x = catchedPokemons[last];
	catchedPokemons[last] = catchedPokemons[index];
	catchedPokemons[index] = x;
	releasedPokemon = catchedPokemons[last].name;
	catchedPokemons.pop();
	return console.log(`${releasedPokemon} has been RELEASED! Bye-bye!`);
}

//PLACEHOLDER FOR CATCHED POKEMONS
let catchedPokemons = [];

//PLACEHOLDER FOR POKEMONS' SKILLS
let pokemonSkills = [{

}];

//MY POKEMON LIST
/*
LIST OF POKEMONS & THEIR SKILLS:

	- BULBASAUR 	= LVL5: VINE WHIP 		LVL10: RAZOR LEAF
	- CHARMANDER	= LVL5: EMBER 			LVL10: DRAGON BREATH
	- SQUIRTLE		= LVL5: WATER GUN 		LVL10: BITE
	- EEVEE 		= LVL5: SAND ATTACK 	LVL10: QUICK ATTACK
	- LOPUNNY		= LVL5: QUICK ATTACK 	LVL10: SWIFT
	- ZAPDOS		= LVL5: THUNDER SHOCK 	LVL10: PLUCK
	- GRENINJA		= LVL5: WATER GUN 		LVL10: LICK
	- AXEW			= LVL5: BITE 			LVL10: ASSURANCE
	- MEWTWO		= LVL5: ANCIENT POWER 	LVL10: PSYCHO CUT
	- RAYQUAZA		= LVL5: TWISTER			LVL10: CRUNCH
	- ARCEUS 		= LVL5: EARTH POWER 	LVL10: HYPER VOICE
	- DRAGONITE 	= LVL5: TWISTER 		LVL10: DRAGON TAIL
	- LUGIA 		= LVL5: WEATHER BALL 	LVL10: EXTRASENSORY 
*/
function pokemonList(){
	while (true){
		let optionList = "";
		for (let i = -1; i < catchedPokemons.length; i++) {
			if (i == -1) {
				optionList += (`[${i+1}]BACK`);
				continue;
			}
			optionList += (` \t| \t[${i+1}]${catchedPokemons[i].name} (LVL: ${catchedPokemons[i].level})`);
		}
		console.log(optionList);
	
		let json = {};
		this.decision = prompt("SELECT A POKEMON TO INSPECT: ");
		if (catchedPokemons.length == 1) {
			switch (this.decision){
			case "0":
				return 0;
			case "1":
				json = JSON.stringify(catchedPokemons[0]);
				console.log(`${json}`);
				options(0);
				break;
			default:
				console.log("Your choice is INVALID. Try Again.");
				continue;
			}
		} else if (catchedPokemons.length == 2) {
			switch (this.decision){
			case "0":
				return 0;
			case "1":
				json = JSON.stringify(catchedPokemons[0]);
				console.log(`${json}`);
				options(0);
				break;
			case "2":
				json = JSON.stringify(catchedPokemons[1]);
				console.log(`${json}`);
				options(1);
				break;
			default:
				console.log("Your choice is INVALID. Try Again.");
				continue;
			}
		} else if (catchedPokemons.length == 3) {
			switch (this.decision){
			case "0":
				return 0;
			case "1":
				json = JSON.stringify(catchedPokemons[0]);
				console.log(`${json}`);
				options(0);
				break;
			case "2":
				json = JSON.stringify(catchedPokemons[1]);
				console.log(`${json}`);
				options(1);
				break;
			case "3":
				json = JSON.stringify(catchedPokemons[2]);
				console.log(`${json}`);
				options(2);
				break;
			default:
				console.log("Your choice is INVALID. Try Again.");
				continue;
			}
		}
	}
}
//POTION AND SWITCH OPTION
function options(index){
	maxHP = catchedPokemons[index].getMaxHP();
	console.log(`[0]BACK \t| \t[1]FULL HEATLTH POTION (${potionCount}) \t| \t[2]SWITCH \t| \t[3]RELEASE`);
	while (true) {
		let decision = prompt("What will you do: ");
		decision = decision.toLowerCase();
		switch (decision){
		case "back":
		case "0":
			return 0;
		case "potion":
		case "full health potion":
		case "1":
			if (potionCount > 0) {
				potionCount -= 1;
				catchedPokemons[index].health = maxHP;
				console.log(`Trainer ${trainer.name} used POTION! ${catchedPokemons[index].name} is back to ${catchedPokemons[index].health} health!`);
				catchedPokemons[index].unFaint();
				return console.log(`POTIONS REMAINING: ${potionCount}`);
			}
			return console.log("YOU HAVE NO POTIONS LEFT!");
		case "switch":
		case "2":
			swap(index);
			return 0;
		case "release":
		case "3":
			release(index);
			return 0;
		default:
			console.log("Your choice is INVALID. Try again");
		}
	}
}

//5 RANDOM WILD POKEMONS
let wildPokemons = [{
		name: "Wild Eevee"
	},
	{
		name: "Wild Lopunny"
	},
	{
		name: "Wild Zapdos"
	},
	{
		name: "Wild Greninja"
	},
	{
		name: "Wild Axew"
	}];

//FIGHT WILD POKEMONS
function grass(){
	if (catchedPokemons[0].level >= 5) {
		this.wildPokemon = wildPokemons[Math.floor(Math.random() * 5)];
		this.wildPokemon = new Pokemon(this.wildPokemon.name, Math.floor(Math.random() * (10 - 4) + 5), true);
		return battle(catchedPokemons[0], this.wildPokemon);
	}
	this.wildPokemon = wildPokemons[Math.floor(Math.random() * 5)];
	this.wildPokemon = new Pokemon(this.wildPokemon.name, Math.floor(Math.random() * 5 + 1), true);
	return battle(catchedPokemons[0], this.wildPokemon);
}


//5 RANDOM TRAINER POKEMONS
let trainerPokemons = [{
	name: "Mewtwo",
	level: Math.floor(Math.random() * (15 - 8) + 9)
},
{
	name: "Rayquaza",
	level: Math.floor(Math.random() * (15 - 8) + 9)
},
{
	name: "Arceus",
	level: Math.floor(Math.random() * (15 - 8) + 9)
},
{
	name: "Dragonite",
	level: Math.floor(Math.random() * (15 - 8) + 9)
},
{
	name: "Lugia",
	level: Math.floor(Math.random() * (15 - 8) + 9)
}];

//FIGHT TRAINER BOSS
function fightTrainer(){
	this.random1 = trainerPokemons[Math.floor(Math.random() * 5)];
	this.random2 = trainerPokemons[Math.floor(Math.random() * 5)];
	this.random3 = trainerPokemons[Math.floor(Math.random() * 5)];
	let enemyTrainer = {
		name: "Lee Mayonnaise",
		age: Math.floor(Math.random() * (99 - 13) + 13),
		gender: "Female",
		pokemon1: new Pokemon(this.random1.name, this.random1.level, true),
		pokemon2: new Pokemon(this.random2.name, this.random2.level, true),
		pokemon3: new Pokemon(this.random3.name, this.random3.level, true)
	};
	console.log(`Trainer ${enemyTrainer.name} wants to fight you!`)
	let isLost = battle(catchedPokemons[0], enemyTrainer.pokemon1, true);
	if (isLost == true) {
		return isLost;
	}
	isLost = battle(catchedPokemons[0], enemyTrainer.pokemon2, true);
	if (isLost == true) {
		return isLost;
	}
	isLost = battle(catchedPokemons[0], enemyTrainer.pokemon3, true);
	if (isLost == true) {
		return isLost;
	}

	if (enemyTrainer.pokemon1.getFaint() == true && enemyTrainer.pokemon2.getFaint() == true && enemyTrainer.pokemon3.getFaint() == true) {
		console.log("YOU HAVE DEFEATED THE TRAINER! YOU WON!");
		return true;
	}
}


//MAIN OPTION
function mainMenu(){
	this.valid = 0;
	while (this.valid == 0){
		console.log("[1]POKEMON (MAXIMUM OF 3)\n[2]GRASS\n[3]FIGHT TRAINER\n[4]EXIT");
		let decision = prompt("WELCOME TO THE MAIN MENU! WHAT IS YOUR CHOICE:")
		decision = decision.toLowerCase();
		
		switch (decision){
		case "pokemon":
		case "1":
			this.valid = 1;
			let x = pokemonList();
			if (x == 0) {
				continue;
			}
			break;
		case "grass":
		case "2":
			this.valid = 1;
			var status = grass();
			if (status == true) {
				return status;
			}
			break;
		case "fight trainer":
		case "3":
			this.valid = 1;
			var status = fightTrainer();
			if (status == true) {
				return status;
			}
			break;
		case "exit":
		case "4":
			this.valid = 1;
			return true;
		default:
			console.log("Your choice is INVALID. Try Again.");
		}
	}
}

//START GAME
//CHOOSING STARTER POKEMON
console.log(`Trainer ${trainer.name}, ${trainer.age} years old, ${trainer.gender}, has joined the Pokemon Adventure!\nHe must now choose a STARTING POKEMON! \n[1]BULBASAUR\t[2]CHARMANDER\t[3]SQUIRTLE`);

while (true){
	let number = 0;
	let decision = prompt("What starter POKEMON will you choose?");
	decision = decision.toLowerCase();
	switch (decision) {
	case "bulbasaur":
	case "1":
		console.log(`Trainer ${trainer.name} picked... BULBASAUR!`);
		var starter = new Pokemon("Bulbasaur", 1, false);
		number = 1;
		break;
	case "charmander":
	case "2":
		console.log(`Trainer ${trainer.name} picked... CHARMANDER!`);
		var starter = new Pokemon("Charmander", 1, false);
		number = 1;
		break;
	case "squirtle":
	case "3":
		console.log(`Trainer ${trainer.name} picked... SQUIRTLE!`);
		var starter = new Pokemon("Squirtle", 1, false);
		number = 1;
		break;
	defaultkey: "value", 
		console.log("Your choice is invalid. Try Again.");
	}
	if (number == 1) {
		catchedPokemons.push(starter);
		break;
	}
}


//GAME RUNNING
while (true){
	let exit = mainMenu();
	if (exit == true) {
		break;
	}
}
console.log("THANK YOU FOR PLAYING.");