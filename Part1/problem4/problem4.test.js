const binarySearch = require("./problem4");

test("Test 1", () => {
  expect(binarySearch([1, 1, 3, 5, 5, 6, 7], 3)).toEqual(2);
});
test("Test 2", () => {
  expect(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)).toEqual(3);
});
test("Test 3", () => {
  expect(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)).toEqual(6);
});
test("Test 4", () => {
  expect(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)).toEqual(-1);
});
