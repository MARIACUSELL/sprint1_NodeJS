function getTheDouble(x) {
  return new Promise((resolve, reject) => {
    !isNaN(x)
      ? setTimeout(() => resolve(x * 2), 2000)
      : reject("Impossible to operate");
  });
}

module.exports = { getTheDouble };
