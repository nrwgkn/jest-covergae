const sub = require("./sub");

test("adds 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});

test("subtracts 1 - 2 to equal -1", () => {
  expect(sub(1, 2)).toBe(0);
});
