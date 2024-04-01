const sample2 = require("./sample2");

describe("sample2", () => {
  it("should return the sum of two numbers", () => {
    expect(sample2(2, 3)).toBe(5);
    expect(sample2(-1, 5)).toBe(4);
    expect(sample2(0, 0)).toBe(0);
  });
});
