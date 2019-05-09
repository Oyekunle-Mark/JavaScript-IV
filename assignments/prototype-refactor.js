/*
* Prototype Refactor

* 1. Copy and paste your code or the solution from yesterday
* 2. Your goal is to refactor all of this code to use ES6 Classes.
* The console.log() statements should still return what is expected of them.
*/

class GameObject {
  constructor(createdAt, name, dimensions) {
    this.createdAt = createdAt;
    this.name = name;
    this.dimensions = dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(createdAt, name, dimensions, healthPoints) {
    super(createdAt, name, dimensions);
    this.healthPoints = healthPoints;
  }

  takeDamage(points) {
    this.healthPoints -= points;
    return `${this.name} took damage.\n`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanObj) {
    super(
      humanObj.createdAt,
      humanObj.name,
      humanObj.dimensions,
      humanObj.healthPoints
    );

    this.team = humanObj.team;
    this.weapons = humanObj.weapons;
    this.language = humanObj.language;
  }

  greet() {
    return `${this.name} offers greetings in ${this.language}`;
  }

  logPoint() {
    return this.healthPoints
      ? `${this.name} has a health point of ${this.healthPoints}`
      : `${this.name} is destroyed`;
  }

  bluff() {
    return `HAHAHAHAHAAHHAAHAAAA!!!!! I am ${
      this.name
    }, I will kill you with my ${this.weapons[0]}`;
  }
}

class HeroVillainCharacter extends Humanoid {
  attack(victim) {
    if (victim.healthPoints <= 0) {
      return `${victim.name} has been destroyed and is no longer in the game.`;
    }

    victim.takeDamage(5);
    return `${this.name} attacked ${
      victim.name
    }!!! Damage inflicted. ${victim.logPoint()}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const batman = new HeroVillainCharacter({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 4
  },
  healthPoints: 30,
  name: "Batman",
  team: "Justice League",
  weapons: ["Batarang", "Grappling Gun"],
  language: "English"
});

const joker = new HeroVillainCharacter({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3
  },
  healthPoints: 30,
  name: "The Joker",
  team: "Fiendish Villains",
  weapons: ["Joker venom", "Knives"],
  language: "English"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Batman and joker fight begins here
console.log("\nBatman faces off against The Joker.\n");
console.log(batman.bluff());
console.log(joker.bluff());
console.log(batman.logPoint());
console.log(joker.logPoint());
console.log(batman.attack(joker));
console.log(joker.attack(batman));
