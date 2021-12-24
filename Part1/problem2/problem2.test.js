const moneyChange = require("./problem2");

test("Test 1", () => {
  expect(moneyChange(123)).toEqual([100, 20, 1, 1, 1]);
});
test("Test 2", () => {
  expect(moneyChange(432)).toEqual([200, 200, 20, 10, 1, 1]);
});
test("Test 3", () => {
  expect(moneyChange(543)).toEqual([500, 20, 20, 1, 1, 1]);
});
test("Test 4", () => {
  expect(moneyChange(7752)).toEqual([5000, 2000, 500, 200, 50, 1, 1]);
});
test("Test 5", () => {
  expect(moneyChange(15321)).toEqual([10000, 5000, 200, 100, 20, 1]);
});
