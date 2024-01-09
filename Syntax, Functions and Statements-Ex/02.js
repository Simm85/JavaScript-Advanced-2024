function greatestCommonDivisor(num1, num2) {
      const divisors = [];
      findDivisors(num1);
      findDivisors(num2);
      GCD(reduceDivisors(divisors));

      function findDivisors(int) {
            for (let i = 0; i <= int; i++) {
                  if (int % i === 0) {
                        divisors.push(i);
                  }
            }
      }

      function reduceDivisors(array) {
            const redusedDivisors = [];

            for (let i = 0; i < array.length; i++) {
                  for (let j = i + 1; j < array.length; j++) {
                        if (array[i] === array[j]) {
                              redusedDivisors.push(array[i]);
                        }
                  }
            }
            
            return redusedDivisors;
      }

      function GCD(array) {
            array.sort((a, b) => a - b);
            return console.log(array[array.length - 1]);
      }
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
