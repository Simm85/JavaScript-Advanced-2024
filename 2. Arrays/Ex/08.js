function sortAnArrayByTwoCriteria(arr) {
      arr.sort((a, b) => a.localeCompare(b));
      for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                  if (arr[i].length > arr[j].length) {
                        const strToMove = arr.splice(j, 1);
                        arr.splice(i, 0, ...strToMove);
                  }
            }
      }
      return arr.forEach(str => console.log(str));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);