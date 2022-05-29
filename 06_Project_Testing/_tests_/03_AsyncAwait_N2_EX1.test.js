const { getTheDouble } = require("../app/03_AsyncAwait_N2_EX1");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Lets check the double of a number in 2 seconds", () => {
  test("double of 4 is 8", () => {
    expect(getTheDouble(4)).resolves.toBe(8);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    expect(getTheDouble("xx")).rejects.toMatch("Impossible to operate");
  });
});
