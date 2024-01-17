function printEveryNthElement(arr, N) {
      const result = arr.filter((el, i) => i % N === 0);
      return result;
}
printEveryNthElement(['5',
      '20',
      '31',
      '4',
      '20'],
      2
);