const { sum } = require("../src/sum");

test("1 + 2 equals to 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("3 + 2 equals to 3", () => {
  expect(sum(3, 2)).toBe(5);
});

test("3 - 1 equals to 3", () => {
  expect(sum(3, -1)).toBe(10);
});
