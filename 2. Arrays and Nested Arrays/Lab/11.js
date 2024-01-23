function equalNeighbors(matrix) {
      let countOfEquals = 0;

      for (let i = 0; i < matrix.length; i++) {
            let currentArr = matrix[i];
            let secondaryArr = matrix[i + 1];

            currentArr.reduce((acc, el) => {
                  if (acc === el) {
                        countOfEquals++;
                  }
                  return el;
            });

            if (!secondaryArr) {
                  break;
            }

            for (let j = 0; j < currentArr.length; j++) {
                  if (currentArr[j] === secondaryArr[j]) {
                        countOfEquals++;
                  }
            }
      }

      return countOfEquals;
}
equalNeighbors([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]);
equalNeighbors([
      ['2', '3', '4', '7', '0'],
      ['4', '0', '5', '3', '4'],
      ['2', '3', '5', '4', '2'],
      ['9', '8', '7', '5', '4']]);

equalNeighbors([
      ['test', 'yes', 'yo', 'ho'],
      ['well', 'done', 'yo', '6'],
      ['not', 'done', 'yet', '5']]);