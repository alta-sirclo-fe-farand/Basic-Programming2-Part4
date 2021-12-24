const romanNumerals = require("./problem4");

test("Test 1", () => {
  expect(romanNumerals(6)).toEqual("VI");
});
test("Test 2", () => {
  expect(romanNumerals(9)).toEqual("IX");
});
test("Test 3", () => {
  expect(romanNumerals(23)).toEqual("XXIII");
});
test("Test 4", () => {
  expect(romanNumerals(2021)).toEqual("MMXXI");
});
test("Test 5", () => {
  expect(romanNumerals(1646)).toEqual("MDCXLVI");
});
