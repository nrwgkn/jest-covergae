const hello = require("./hello");

test("says hello to the world", () => {
  expect(hello()).toBe("Hello, World!");
});

// test("says hello to someone", () => {
//   expect(hello("Alice")).toBe("Hello, Alice!");
// });
