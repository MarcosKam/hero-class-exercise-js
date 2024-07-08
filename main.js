class Hero {
  constructor(name, age, heroClass) {
    this.name = name;
    this.age = age;
    this.heroClass = heroClass;
  }

  attack() {
    let attackType;

    switch (this.heroClass) {
      case "mage":
        attackType = "magic";
        break;
      case "warrior":
        attackType = "sword";
        break;
      case "monk":
        attackType = "martial arts";
        break;
      case "ninja":
        attackType = "shuriken";
        break;
      default:
        attackType = "unknown";
    }

    console.log(`The ${this.heroClass} attacked with ${attackType}`);
  }
}

let firstHero = new Hero("Ragi", 23, "mage");
let secondHero = new Hero("Alys", 18, "warrior");

firstHero.attack();
secondHero.attack();
