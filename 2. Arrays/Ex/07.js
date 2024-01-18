function sortingNumbers(arr) {
      arr.sort((a, b) => a - b);
      for (let i = 1; i <= arr.length; i += 2) {
            const biggestNumber = arr.pop();
            arr.splice(i, 0, biggestNumber);
      }
      return arr;
}
sortingNumbers([1, 7, 1, 2]);
