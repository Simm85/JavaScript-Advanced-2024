function addAndRemoveElements(arr) {
      let elCounter = 0;
      const outputArr = [];

      for (const el of arr) {
            elCounter++;
            el === 'add' ? outputArr.push(elCounter) : outputArr.pop(elCounter);
      }

      return outputArr.length === 0 ? console.log('Empty') : outputArr.forEach(el => console.log(el));
}
addAndRemoveElements([
      'add',
      'add',
      'remove',
      'add',
      'add']);