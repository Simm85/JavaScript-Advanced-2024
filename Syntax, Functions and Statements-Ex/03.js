function sameNumbers(number) {
      const booleans = [];

      areDigitsSame(number, booleans);
      totalDigitsSum(number);

      function areDigitsSame(n, arr) {
            String(n).split('').reduce((res, el) => {
                  res === el ? arr.push('true') : arr.push('false');
                  return el;
            });

            const result = !arr.includes('false');
            return console.log(result);
      }

      function totalDigitsSum(n) {
            const sum = String(n).split('').reduce((sum, el) => sum += Number(el), 0);
            return console.log(sum);
      }
}
sameNumbers(2222222);
sameNumbers(1234);
sameNumbers(2468);