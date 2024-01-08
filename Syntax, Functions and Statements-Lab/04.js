function circleArea(input) {
      const result = typeof input === 'number'
            ? (Math.PI * Math.pow(input, 2)).toFixed(2)
            : `We can not calculate the circle area, because we receive a ${typeof input}.`;

      console.log(result);
}
circleArea(5);
circleArea('txt');