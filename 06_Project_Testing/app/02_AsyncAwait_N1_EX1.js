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

const getEmployee = (employeeId) => {
  return new Promise((resolve, reject) => {
    let foundEmployee = employees.find((ele) => ele.id == employeeId);

    foundEmployee
      ? resolve(foundEmployee)
      : reject(new Error("Id not correct"));
  });
};

const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    let amount = salaries.find((ele) => ele.id == employee.id);

    amount ? resolve(amount) : reject(new Error("There is a problem"));
  });
};

async function resultEmployee(employeeId) {
  try {
    const elementEmployees = await getEmployee(employeeId);
    const elementSalarys = await getSalary(elementEmployees);
    return `${elementEmployees.name} has a salary of ${elementSalarys.salary}`;
  } catch (error) {
    return "Error";
  }
}

module.exports = {
  resultEmployee,
  getEmployee,
  getSalary,
};
