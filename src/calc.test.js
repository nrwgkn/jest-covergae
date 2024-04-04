const calc = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  expect(calc("add")(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(calc("sub")(2, 1)).toBe(1);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(calc("mul")(2, 3)).toBe(6);
});

test("throws an error for an invalid mode", () => {
  expect(() => calc("invalid")).toThrow("Invalid mode");
});
