// Crea un mock que comprovi les crides al constructor de la classe Persona
// i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2

const Person = require("../app/05_MockClassePersona_N2_EX2");
jest.mock("../app/05_MockClassePersona_N2_EX2");

beforeEach(() => {
  // Neteja instancies i crides al constructor, i tots els mètodes:
  Person.mockClear();
});

describe("Tets to control create class Person", () => {
  test("Lets call new() on Person", () => {
    const newPerson = new Person();
    // El constructor crea l'objecte:
    expect(newPerson).toBeTruthy();
  });
});

describe("Test to control calls to the class Person ", () => {
  test("Check calling the class constructor", () => {
    const newPerson = new Person();

    newPerson.sayName();
    expect(Person).toHaveBeenCalledTimes(1);
  });
});

describe("Tets to control say name", () => {
  test("Check calling a method on the class instance", () => {
    expect(Person).not.toHaveBeenCalled();

    const newPerson = new Person();

    expect(Person).toHaveBeenCalledTimes(1);

    newPerson.sayName("Maria");

    const mockPersonInstance = Person.mock.instances[0];
    const mockPerson = mockPersonInstance.sayName;

    expect(mockPerson).toHaveBeenCalledWith("Maria");
    expect(mockPerson).toHaveBeenCalledTimes(1);
  });
});
