function calc(mode) {
  switch (mode) {
    case "add":
      return (a, b) => a + b;
    case "sub":
      return (a, b) => a - b;
    case "mul":
      return (a, b) => a * b;
    case "div":
      return (a, b) => a / b;
    default:
      throw new Error("Invalid mode");
  }
}

module.exports = calc;
