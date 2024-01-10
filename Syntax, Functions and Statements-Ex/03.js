function sameNumbers(int, booleans = []) {
      console.log(areIntsSame(int, booleans));
      console.log(totalIntSum(int));

      function areIntsSame(n, arr) {
            String(n).split('').reduce((res, el) => {
                  res === el ? arr.push('true') : arr.push('false');
                  return el;
            });

            return !arr.includes('false');
      }

      function totalIntSum(n) {
            return String(n).split('').reduce((sum, el) => sum += Number(el), 0);
      }
}
sameNumbers(2222222);
sameNumbers(1234);
sameNumbers(2468);