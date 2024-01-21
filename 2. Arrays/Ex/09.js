function magicMatrices(matrix) {
      const mainSum = matrix[0].reduce((acc, n) => acc += n);
      const areRowsMagical = () => {
            for (let i = 0; i < matrix.length; i++) {
                  let currentSum = 0;
                  for (let j = 0; j < matrix[i].length; j++) {
                        currentSum += matrix[i][j];
                  }
                  if (mainSum !== currentSum) {
                        return false;
                  }
            }
            return true;
      }

      const areCowsMagical = () => {
            for (let i = 0; i < matrix.length; i++) {
                  let currentSum = 0;
                  for (let j = 0; j < matrix[i].length; j++) {
                        currentSum += matrix[j][i];
                  }
                  if (mainSum !== currentSum) {
                        return false;
                  }
            }
            return true;
      }
      //  console.log(areRowsMagical());
      //  console.log(areCowsMagical());
      return areCowsMagical() && areRowsMagical();
}
magicMatrices([
      [4, 5, 6],
      [6, 5, 4],
      [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);