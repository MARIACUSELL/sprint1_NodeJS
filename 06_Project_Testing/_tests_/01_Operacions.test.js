const { add, subtract, split, multiply } = require("../app/01_Operacions");

describe("function add", () => {
  test("adds 1 + 2 + 5 to result 8", () => {
    expect(add(1, 2, 5)).toBe(8);
  });
});

describe("function subtract", () => {
  test("subtract 10 - 2 - 2 to result 6", () => {
    expect(subtract(10, 2, 2)).toBe(6);
  });
});

describe("function split", () => {
  test("split 10 / 2 to result 5", () => {
    expect(split(10, 2)).toBe(5);
  });
});

describe("function multiply", () => {
  test("multiply 10 * 2 * 2 to result 40", () => {
    expect(multiply(10, 2, 2)).toBe(40);
  });
});
