function rotateArray(arr, N) {
      while (N > 0) {
            const lastEl = arr.pop();
            arr.unshift(lastEl);
            N--;
      }
      return console.log(arr.join(' '));
}
rotateArray([
      'Banana',
      'Orange',
      'Coconut',
      'Apple'], 15);