function wordsUppercase(str) {
      const pattern = /[^\w]+/g;
      const result = str.replace(pattern, ' ')
            .trimEnd()
            .split(' ')
            .map(str => str.toUpperCase()).join(', ');
      return console.log(result);
}
wordsUppercase('Hi, how are you?');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions');
wordsUppercase('hello');