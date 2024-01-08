function stringLength(...input) {
      const strings = input.filter(data => typeof data === 'string');
      const totalLengthSum = strings.reduce((sum, str) => {
            return sum += str.length;
      }, 0);
      const averageLengthSum = Math.floor(totalLengthSum / strings.length);
      console.log(totalLengthSum);
      console.log(averageLengthSum);
}

stringLength('chocolate', 'ice cream', 'cake', 5);
stringLength('pasta', '5', '22.3');