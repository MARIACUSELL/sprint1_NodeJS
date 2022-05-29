const {
  getEmployee,
  getSalary,
} = require("../app/04_PromisesCallbacks_N2_EX3");

jest.mock("../app/04_PromisesCallbacks_N2_EX3");

test("The Employee id 1 is Linux Torvalds and has a salary of 4000", async () => {
  const elementEmployees = await getEmployee(1);
  expect(elementEmployees).toMatch("Linux Torvalds");
  const elementSalarys = await getSalary(1);
  expect(elementSalarys).toMatch("4000");
});

it("Should test my employee selection", () => {
  return someChainPromiseMethod().then((data) => {
    expect(getEmployee(1)).toBeCalleWith("Linux Torvalds");
    expect(getSalary("Linux Torvalds")).toBeCalleWith("4000");
    expect(data).toMatch("Employee: Linux Torvalds has this salary: 4000");
  });
});

// ALTERNATIVA
/* test("Testing the thenables", async () => {
    return await getEmployee(1).then((value1) => {
      return await getSalary(value1).then((value2) => {
        const result = `Employee: ${value1.name} has this salary: ${value2.salary}`;
        expect(result).toMatch(
          "Employee: Linux Torvalds has this salary: 4000"
        );
      });
    });
  }); */
