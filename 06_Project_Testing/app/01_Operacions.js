function add(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

function subtract(num1, num2, num3) {
  let result = num1 - num2 - num3;
  return result;
}

function split(num1, num2) {
  let result = num1 / num2;
  return result;
}

function multiply(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

module.exports = { add, subtract, split, multiply };
