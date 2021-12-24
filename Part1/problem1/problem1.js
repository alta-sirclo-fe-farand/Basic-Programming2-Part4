function simpleEquations(a, b, c) {
  let possibleCombinations = [];
  for (x = 1; x < c; x++) {
    for (y = 1; y < c; y++) {
      for (z = 1; z < c; z++) {
        if (x**2 + y**2 + z**2 == c) {
          possibleCombinations.push([x,y,z]);
        }
      }
    }
  }

  for (Combination in possibleCombinations) {
    if (Combination[0] * Combination [1] * Combination [2] != b) {
      possibleCombinations.shift();
    }
  }

  for (Combination in possibleCombinations) {
    if (Combination[0] + Combination [1] + Combination [2] != a) {
      possibleCombinations.shift();
    }
  }
  if (possibleCombinations.length == 0) {
    return "no solution";
  }
  return possibleCombinations[0].sort().join(" ");
}

// console.log(simpleEquations(6,6,14));
module.exports = simpleEquations;
