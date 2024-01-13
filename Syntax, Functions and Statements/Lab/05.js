function mathOperations(num_1, num_2, operator) {
      let result = 0;
      switch (operator) {
            case '+': result = num_1 + num_2;
                  break;
            case '-': result = num_1 - num_2;
                  break;
            case '*': result = num_1 * num_2;
                  break;
            case '**': result = num_1 ** num_2;
                  break;
            case '/': result = num_1 / num_2;
                  break;
            case '%': result = num_1 % num_2;
                  break;
            default: `${operator} is not supported.`;
      }
      
      console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(3, 5, '**');