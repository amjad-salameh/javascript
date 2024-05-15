// 1. Abstraction
console.log("Abstraction");
console.log("============");
console.log();

class Character {
  constructor(name) {
    this.name = name;
  }
  #health = 100;
  strength = 20;
  defense = 15;
  get health() {
    console.log("get health");
    return this.#health;
  }
  set health(value) {
    console.log("set health", value);
    if (value < 0) {
      this.#health = 0;
    }
    this.#health = value;
  }
  attack(target) {
    target.receiveDamage(this.strength - target.defense);
    // target.health -= this.strength - target.defense;
    console.log(
      `${this.name} attacked ${target.name} and caused ${
        this.strength - target.defense
      } damage, so the target health is ${target.health}`
    );
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(
      `${this.name} received ${damage} damage and now has ${this.health} health`
    );
  }
}

let subhi = new Character(100);
subhi.health = 200; 
console.log(subhi.health);
