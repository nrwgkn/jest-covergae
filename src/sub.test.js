const sub = require("./sub");

test("adds 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});

test("adds 1 - 100 to equal 0", () => {
  expect(sub(1, 100)).toBe(0);
});
