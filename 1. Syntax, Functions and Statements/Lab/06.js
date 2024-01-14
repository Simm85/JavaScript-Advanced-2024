function sumOfNumbers(num_1, num_2) {
      num_1 = Number(num_1);
      num_2 = Number(num_2);
      let sum = 0;
      for (let i = num_1; i <= num_2; i++) {
            sum += i;
      }
      console.log(sum);
}
sumOfNumbers('-8', '20');