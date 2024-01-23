function evenPositionElement(arr) {
      const result = arr.filter((el, i) => i % 2 === 0).join(' ');
      return console.log(result);
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);