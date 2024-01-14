function biggerHalf(numbers) {
      let sliceIndex = numbers.length / 2;
      if (!Number.isInteger(sliceIndex)) {
            sliceIndex = Math.floor(sliceIndex);
      }
      return numbers.sort((a, b) => a - b).slice(sliceIndex);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);