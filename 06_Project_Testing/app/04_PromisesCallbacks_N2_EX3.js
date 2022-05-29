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

getEmployee(1).then((value1) =>
  getSalary(value1).then((value2) => {
    return `Employee: ${value1.name} has this salary: ${value2.salary}`;
  })
);

module.exports = { getEmployee, getSalary };
