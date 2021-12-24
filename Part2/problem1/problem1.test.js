const fibo = require("./problem1");

test("Test 1", () => {
  expect(fibo(0)).toEqual(0);
});
test("Test 2", () => {
  expect(fibo(1)).toEqual(1);
});
test("Test 3", () => {
  expect(fibo(2)).toEqual(1);
});
test("Test 4", () => {
  expect(fibo(3)).toEqual(2);
});
test("Test 5", () => {
  expect(fibo(5)).toEqual(5);
});
test("Test 6", () => {
  expect(fibo(6)).toEqual(8);
});
test("Test 7", () => {
  expect(fibo(7)).toEqual(13);
});
test("Test 8", () => {
  expect(fibo(9)).toEqual(34);
});
test("Test 9", () => {
  expect(fibo(10)).toEqual(55);
});
