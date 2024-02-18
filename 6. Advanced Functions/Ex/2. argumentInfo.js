function argumentInfo(...args) {
      const types = [];
      const typesCounter = {};

      args.forEach(arg => {
            let currentType = typeof arg;
            types.push(`${currentType}: ${arg}`);

            if (typesCounter[currentType]) {
                  typesCounter[currentType]++;
            } else {
                  typesCounter[currentType] = 1;
            }
      });

      Object.entries(typesCounter)
            .sort((a, b) => b[1] - a[1])
            .forEach(el => types.push(`${el[0]} = ${el[1]}`));

      types.forEach(el => console.log(el));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });