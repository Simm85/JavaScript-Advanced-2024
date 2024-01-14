function largestNumber(...numbers) {
      const largestNum = numbers.reduce((res, num) => {
            if (res < num) res = num;
            return res;
      });
      console.log(`The largest number is ${largestNum}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);