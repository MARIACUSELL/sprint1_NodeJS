// Nivell 1, Exercici 1

// versió 1: Incorpora la impressió per consola
((a, b) => {
  console.log(a + b);
})(10, 20);

// versió 2: Impressió per consola diretament de la funció
console.log(
  ((a, b) => {
    return a + b;
  })(10, 20)
);

// versió 3: Guardem la funció autoejecutable en una variable i imprimim per consola el contingut de la variable.
let add = ((a, b) => {
  return a + b;
})(10, 20);
console.log(add);

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
    return console.log("Hola, soc " + this.name);
  }
}

const person = new Person("Enric");
console.log(person.name);

person.sayName();

// Nivell 3, Exercici 1

function Person() {}
Person.prototype.name = "Claudia Mayne";
let person1 = new Person();
console.log(Person.prototype);
