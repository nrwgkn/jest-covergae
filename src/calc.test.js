const calc = require("./calc");

test("adds 1 + 2 to equal 3", () => {
  expect(calc("add")(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(calc("sub")(2, 1)).toBe(1);
});
