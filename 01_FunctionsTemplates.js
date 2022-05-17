// Nivell 1, Exercici 1

function getName(name) {
  console.log(`El meu nom és ${name}`);
}
getName("Maria");

// Nivell 2, Exercici 1

let inputName = "Maria";
let inputUserName = "Cusell";

console.log(`El meu nom és ${inputName} i el meu cognom ${inputUserName}`);

// Nivell 2, Exercici 2

function add(a, b) {
  return a + b;
}
console.log(`El valor de la suma de dos números és ${add(4, 5)}`);

// Nivell 3, Exercici 1

let matrix = new Array(10);
for (let counter = 0; counter < 10; counter++) {
  matrix.push(countingToNine());
  countingToNine();
}
console.log(matrix);

function countingToNine() {
  for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
  }
}

// Nivell 3, Exercici 2

let message = (inputName) => `My name is ${inputName}`;
console.log(message("Mary"));
