class Animal {
  ages;
  doit() {
    console.log('aaauuu');
  }
  constructor(ages = 1) {
    this.ages = ages;
  }
}

const animal = new Animal(10);
const animal2 = new Animal();

console.log(animal);
console.log(animal2);

console.log(animal?.hernya);

Animal.prototype.hernya = '10';

console.log(animal?.hernya);
