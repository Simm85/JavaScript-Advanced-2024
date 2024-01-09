function aggregateElements(array) {

      function sumOfNumbers(numbers) {
            return numbers.reduce((res, num) => res += num);
      }

      function sumOfInverseValues(numbers) {
            return numbers.reduce((res, num) => {
                  num = 1 / num;
                  return res += num;
            }, 0);
      }

      function concatElements(numbers) {
            let result = '';
            numbers.forEach(number => result += String(number));
            return result;
      }

      console.log(sumOfNumbers(array));
      console.log(sumOfInverseValues(array));
      console.log(concatElements(array));
}
aggregateElements([1, 2, 3]);