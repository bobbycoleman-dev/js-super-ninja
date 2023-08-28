class Ninja {
	constructor(name, health = 90, speed = 3, strength = 3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName() {
		console.log(this.name);
	}

	showStats() {
		console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
	}

	drinkSake() {
		this.health += 10;
		console.log(`${this.name} drank Sake. +10 health. Health: ${this.health}`);
	}
}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10)
    this.wisdom = 10
  }

  speakWisdom() {
    super.drinkSake()
    console.log("What one programmer can do in one month, two programmers can do in two months.")
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom()
superSensei.showStats()