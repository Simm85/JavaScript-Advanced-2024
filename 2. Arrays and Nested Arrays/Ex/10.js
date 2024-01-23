function ticTacToe(array) {
      const dashBoard = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
      ];

      const X = 'X';
      const O = 'O';
      const playingCoords = array.map(el => el.split(' '));
      const noSpaceLeft = (arr) => arr.every(row => row.every(el => el !== false ? true : false));
      const rowWinByX = (arr) => arr.some(row => row.every(el => el === X));
      const rowWinByO = (arr) => arr.some(row => row.every(el => el === 0));
      const colWin = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                  const colElems = [];
                  for (let j = 0; j < arr[i].length; j++) {
                        colElems.push(arr[j][i]);
                  }
                  const isGameWonByX = colElems.every(el => el === X);
                  const isGameWonByO = colElems.every(el => el === 0);
                  if (isGameWonByX || isGameWonByO) {
                        return true;
                  }
            }
            return false;
      }

      const diagWinForward = (arr) => {
            const diagElems = [];
            let j = 0;
            for (let i = 0; i < arr.length; i++) {
                  diagElems.push(arr[i][j]);
                  j++;
            }
            const isGameWonByX = diagElems.every(el => el === X);
            const isGameWonByO = diagElems.every(el => el === O);
            return isGameWonByO || isGameWonByX;
      }

      const diagWinBackward = (arr) => {
            const diagElems = [];
            let i = 0;
            for (let j = arr.length - 1; j >= 0; j--) {
                  diagElems.push(arr[i][j]);
                  i++;
            }
            const isGameWonByX = diagElems.every(el => el === X);
            const isGameWonByO = diagElems.every(el => el === 0);
            return isGameWonByO || isGameWonByX;
      }

      for (let i = 0; i < playingCoords.length; i++) {
            let [colIndex, rowIndex] = playingCoords[i];
            const placeIsTaken = dashBoard[colIndex][rowIndex] !== false;

            if (placeIsTaken && i !== playingCoords.length - 1) {
                  console.log("This place is already taken. Please choose another!");
                  playingCoords.splice(i, 1);
                  [colIndex, rowIndex] = playingCoords[i];
            }

            i % 2 === 0 ? dashBoard[colIndex][rowIndex] = X : dashBoard[colIndex][rowIndex] = O;

            if (i > 3) {
                  if (
                        colWin(dashBoard) ||
                        diagWinForward(dashBoard) ||
                        diagWinBackward(dashBoard) ||
                        rowWinByX(dashBoard) ||
                        rowWinByO(dashBoard)
                  ) {
                        const winner = dashBoard[colIndex][rowIndex];
                        console.log(`Player ${winner} wins!`);
                        return dashBoard.forEach(row => console.log(row.join('\t')));
                  }
            }

            if (noSpaceLeft(dashBoard)) {
                  console.log('The game ended! Nobody wins :(');
                  return dashBoard.forEach(row => console.log(row.join('\t')));
            }
      }
}

ticTacToe([
      "0 1",
      "0 0",
      "0 2",
      "2 0",
      "1 0",
      "1 1",
      "1 2",
      "2 2",
      "2 1",
      "0 0"
]);

ticTacToe([
      "0 0",
      "0 0",
      "1 1",
      "0 1",
      "1 2",
      "0 2",
      "2 2",
      "1 2",
      "2 2",
      "2 1"
]);

ticTacToe([
      "0 1",
      "0 0",
      "0 2",
      "2 0",
      "1 0",
      "1 2",
      "1 1",
      "2 1",
      "2 2",
      "0 0"
]);


`X	X	X
false	O	O
false	false	false
`