const { resultEmployee } = require("../app/02_AsyncAwait_N1_EX1");

// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

describe("Lets check the asyncAwait function to match one employee N1 EX1", () => {
  test("Employee with id 1 is Linux Torvalds and has a salary of 4000", async () => {
    try {
      await expect(resultEmployee(1)).resolves.toMatch(
        "Linux Torvalds has a salary of 4000"
      );
    } catch (error) {
      await expect(resultEmployee(5)).rejects.toThrow(error);
    }
  });
});

///PROVES
/* test("The Employee id 1 is Linux Torvalds and has a salary of 4000"),
  async () => {
    const elementEmployees = await getEmployee(1);
    expect(elementEmployees).toBe("Linux Torvalds");
    const elementSalarys = await getSalary(1);
    expect(elementSalarys).toBe("4000");
  };

test("Fails with an error")
  async () => {
    expect.assertions(1);
    try {
      await resultEmployee();
    } catch (error) {
      expect(error).toMatch("Error");
    }
  }; */
