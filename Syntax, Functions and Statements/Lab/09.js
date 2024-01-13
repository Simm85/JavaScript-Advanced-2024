function squareOfStars(number) {
      if (arguments.length === 0) {
            number = 5;
      }

      const printSymbol = '*';
      let printResult = '';

      if (number === 1) {
            return console.log(printSymbol);
      }

      for (let i = 0; i < number; i++) {
            printResult += `${printSymbol} `;
      }

      for (let i = 0; i < number; i++) {
            console.log(printResult.trimEnd());
      }
}
squareOfStars();
//squareOfStars(5);