module.exports = class Persona {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return `My name is ${this.name}`;
  }
};
