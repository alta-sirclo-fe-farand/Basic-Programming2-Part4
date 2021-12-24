const simpleEquations = require("./problem1");

test("Test 1", () => {
  expect(simpleEquations(1, 2, 3)).toEqual("no solution");
});
test("Test 2", () => {
  expect(simpleEquations(6, 6, 14)).toEqual("1 2 3");
});
