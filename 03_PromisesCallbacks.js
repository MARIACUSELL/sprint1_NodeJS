// Nivell 1, Exercici 1
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Meeting",
      location: "Skype",
      time: "2:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting alredy scheduled"));
  }
});
// Llamamos la promise
meeting
  .then((res) => {
    //resolve data
    console.log("Meeting scheduled");
    console.log(res);
  })
  .catch((err) => {
    //reject data
    console.log(err);
  });

// Nivell 1, Exercici 2

let message = (name) => console.log(`Congrats ${name}`);
const userInfo = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
};
userInfo("Maria", "Cusell", message);

// Nivell 2, Exercici 1
//Donats els objectes employees i salaries,
//crea una arrow function getEmployee() que retorni una Promise
// efectuant la cerca en l'objecte pel seu id.

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

getEmployee(1).then((value) => console.log(`Employee found: ${value.name}`));

//Nivell 2, Exercici 2
//Crea una altra arrow function getSalary() similar a l'anterior
//que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) =>
  new Promise((resolve, reject) => {
    let amount = salaries.find((ele) => ele.id == employee.id);
    amount ? resolve(amount) : reject(new Error("It does not work"));
  });

getSalary(employees[1]).then((value) =>
  console.log(`Salary found ${value.salary}`)
);

//Nivell 2, Exercici 3
//Invoca la primera funció getEmployee()
//i després getSalary() niant l'execució de les dues promises
//de manera que es retorni per la consola el nom de l'empleat i el seu salari

getEmployee(3).then((value1) =>
  getSalary(value1).then((value2) =>
    console.log(`Employee: ${value1.name} have this salary: ${value2.salary}`)
  )
);

// Nivell 3, Exercici 1
// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola*\

getEmployee(3)
  .then((value1) =>
    getSalary(value1).then((value2) =>
      console.log(`Employee: ${value1.name} have this salary: ${value2.salary}`)
    )
  )
  .catch((err) => console.error(err));
