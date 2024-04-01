const sample3 = require("./sample3");

describe("sample3", () => {
  it("should return the sum of two numbers", () => {
    expect(sample3(2, 3)).toBe(5);
    expect(sample3(-1, 5)).toBe(4);
    expect(sample3(0, 0)).toBe(0);
  });
});
