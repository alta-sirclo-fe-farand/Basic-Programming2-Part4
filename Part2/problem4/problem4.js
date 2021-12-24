function romanNumerals(value) {
  let form = [], 
  romanRules = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], 
  romanEquivalent = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  while (!(value == 0)) {
    for (let i = 0; i < romanRules.length; i++) {
      if (value >= romanRules[i]) {
        form.push(romanEquivalent[i]);
        value = value - romanRules[i];
        break;
      }
    }
  }

  return form.join("");
}

module.exports = romanNumerals;
