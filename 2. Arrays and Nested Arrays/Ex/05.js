function extractIncreasingSubset(arr) {
      const outputArr = [];

      arr.reduce((acc, number) => {
            if (number >= acc) {
                  outputArr.push(number);
                  acc = number;
            }
            return acc;
      }, 0);

      return outputArr;
}
extractIncreasingSubset([1,
      3,
      8,
      4,
      10,
      12,
      3,
      2,
      24]);

extractIncreasingSubset([20,
      3,
      2,
      15,
      6,
      1]
);

extractIncreasingSubset([1,
      2,
      3,
      4]
);