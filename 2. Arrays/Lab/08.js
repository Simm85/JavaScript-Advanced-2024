function processOddPositions(numbers) {
      const result = numbers.filter((n, i) => i % 2 !== 0)
            .map(n => n *= 2)
            .reverse()
            .join(' ');
      return console.log(result);
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);