function frog(jumps) {
  jumps.reverse();
  let jumpsCost = 0, 
  position = 0;

  while (position < jumps.length-1) {
    const oneStep = Math.abs(jumps[position] - jumps[position + 1]);
    if (position == jumps.length-2) {
      position += 1
      jumpsCost += oneStep;
    } else {
      const twoStep = Math.abs(jumps[position] - jumps[position + 2]);
      if (oneStep < twoStep) {
        position += 1
        jumpsCost += oneStep;
      } else {
        position += 2;
        jumpsCost += twoStep;
      }
    }
  }
  return jumpsCost;
}

module.exports = frog;
