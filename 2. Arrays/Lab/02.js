function lastKNumbersSequence(n, k) {
      const result = [1];
      for (let i = 1; i < n; i++) {
            let sum = 0;
            let resultLength = result.length;

            if (resultLength < k) {
                  for (let j = 0; j < resultLength; j++) {
                        sum += result[j];
                  }
                  result.push(sum);
                  continue;
            }

            let startIndex = resultLength - k;
            let counter = 0;

            while (counter < k) {
                  sum += result[startIndex];
                  startIndex++;
                  counter++;
            }
            result.push(sum);
      }

      return result;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);