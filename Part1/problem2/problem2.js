function moneyChange(money) {
  let denom = [];
  let denominators = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  denominators.reverse();
  while (!(money == 0)) {
      for (d of denominators) {
          if (money >= d) {
              denom.push(d);
              money = money - d;
              break;
          }
      }
  }
  return denom;
}

module.exports = moneyChange;
