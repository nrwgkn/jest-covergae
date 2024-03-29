const sample = require("./sample");

test("sample", () => {
  expect(sample(1)).toBe("sample1");
});

test("sample", () => {
  expect(sample(2)).toBe("sample2");
});

test("sample", () => {
  expect(sample(0)).toBe("sample0");
});
