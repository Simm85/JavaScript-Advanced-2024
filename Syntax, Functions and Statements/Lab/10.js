function aggregateElements(array) {
      sumOfNumbers(array);
      sumOfInverseValues(array);
      concatElements(array);

      function sumOfNumbers(numbers) {
            const result = numbers.reduce((res, num) => res += num);
            return console.log(result);
      }

      function concatElements(numbers) {
            const result = numbers.reduce((res, num) => res += String(num));
            return console.log(result);
      }

      function sumOfInverseValues(numbers) {
            const result = numbers.reduce((res, num) => {
                  num = 1 / num;
                  return res += num;
            }, 0);
            return console.log(result);
      }
}
aggregateElements([1, 2, 3]);