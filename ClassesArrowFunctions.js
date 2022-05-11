// Nivell 1, Exercici 1

((a, b) => {
  console.log(a + b);
})(10, 20);

// Nivell 2, Exercici 1

let object = (name, age) => ({
  name: name,
  age: age,
});
console.log(object("Maria", 54));

// Nivell 2, Exercici 2

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  sayName() {
    return console.log(`Nom: ${this.#name}`);
  }
}

const person = new Person("Enric");
console.log(person.name);

sayName("Enric");

// Nivell 3, Exercici 1

function createObjects() {
  let object = [];
}
