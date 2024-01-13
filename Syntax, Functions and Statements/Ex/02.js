function greatestCommonDivisor(num1, num2) {
      const divisors = [];
      const reducedDivisors = [];

      findDivisors(num1, divisors);
      findDivisors(num2, divisors);
      GCD(reduceDivisors(divisors, reducedDivisors));

      function findDivisors(int, array) {
            for (let i = 0; i <= int; i++) {
                  if (int % i === 0) {
                        array.push(i);
                  }
            }
            return array;
      }

      function reduceDivisors(array, reducedArray) {
            for (let i = 0; i < array.length; i++) {
                  for (let j = i + 1; j < array.length; j++) {
                        if (array[i] === array[j]) {
                              reducedArray.push(array[i]);
                        }
                  }
            }
            return reducedArray;
      }

      function GCD(array) {
            array.sort((a, b) => a - b);
            return console.log(array.pop());
      }
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
