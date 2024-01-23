function printAnArrayWithAGivenDelimiter(arr, delimeter) {
      const result = arr.join(delimeter);
      return console.log(result);
}
printAnArrayWithAGivenDelimiter(['One',
      'Two',
      'Three',
      'Four',
      'Five'],
      '-');