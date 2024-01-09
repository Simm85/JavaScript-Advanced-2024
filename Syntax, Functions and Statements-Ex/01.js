function fruit(fruit, grams, priceKg) {
      const weight = grams / 1000;
      const money = weight * priceKg;
      console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);