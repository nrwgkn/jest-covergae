function calc(mode) {
  if (mode === "add") {
    return (a, b) => a + b;
  } else if (mode === "sub") {
    return (a, b) => a - b;
  } else {
    throw new Error("Invalid mode");
  }
}

module.exports = hello;
