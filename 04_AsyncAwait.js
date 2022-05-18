//NIVELL 1
//Nivell 1, Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat
// imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions getEmployee()
// i getSalary() que has definit a la tasca anterior.

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (employeeId) =>
  new Promise((resolve, reject) => {
    let foundEmployee = employees.find((ele) => ele.id == employeeId);

    foundEmployee
      ? resolve(foundEmployee)
      : reject(new Error("It does not work"));
  });

const getSalary = (employee) =>
  new Promise((resolve, reject) => {
    let amount = salaries.find((ele) => ele.id == employee.id);

    amount ? resolve(amount) : reject(new Error("It does not work"));
  });

async function resultEmployee(employeeId) {
  try {
    const elementEmployees = await getEmployee(employeeId);
    const elementSalarys = await getSalary(elementEmployees);
    console.log(
      `${elementEmployees.name} has a salary of ${elementSalarys.salary}`
    );
  } catch (error) {
    console.log("It does not work");
  }
}
resultEmployee(1);

//Nivell 1, Exercici 2
//Crea una nova funció asíncrona que cridi a una altra
// que retorni una Promise que efectuï la seva funció resolve()
// després de 2 segons de la seva invocació.

function resolveTwoSecondsLatter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Action resolved in 2 seconds");
    }, 2000);
  });
}

async function callWithDelay() {
  const result = await resolveTwoSecondsLatter();
  console.log(result);
}
callWithDelay();

//NIVELL 2
//Exercici 1
//Crea una funció que retorni el doble del número que se li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles usant la funció anterior.

const getTheDoble = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
};

getTheDoble(2);

async function operate(num1, num2, num3) {
  try {
    let result1 = await getTheDoble(num1);
    let result2 = await getTheDoble(num2);
    let result3 = await getTheDoble(num3);
    let totaladd = result1 + result2 + result3;
    console.log(
      `La suma del doble dels números ${num1}, ${num2}, ${num3} és ${totaladd}`
    );
  } catch (error) {
    console.log(`Something is wrong`);
  }
}
operate(2, 2, 2);

//NIVELL 3
//Exercici 1
//Força i captura tants errors com puguis dels nivells 1 i 2.
