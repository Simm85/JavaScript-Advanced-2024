function listProcessor(array) {
      let result = [];
      array.forEach(el => processList(el));

      function processList(string) {
            const [command, word] = string.split(" ");
            if (command == 'add') {
                  return result.push(word);
            } else if (command == 'remove') {
                  return result = result.filter(el => el != word);
            } else {
                  return console.log(result.join(","));
            }
      }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);