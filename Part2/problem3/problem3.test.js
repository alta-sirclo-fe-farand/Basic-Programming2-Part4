const frog = require("./problem3");

test("Test 1", () => {
  expect(frog([10, 30, 40, 20])).toEqual(30);
});
test("Test 2", () => {
  expect(frog([30, 10, 60, 10, 60, 50])).toEqual(40);
});
