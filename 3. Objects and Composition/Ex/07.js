function townsToJSON(arr) {
      const strToArr = (str) => {
            return str.split('|').filter(el => /\w/g.test(el)).map(el => el.trim());
      }
      const tableHeadings = strToArr(arr.shift());
      const [Town, Latitude, Longitude] = tableHeadings;
      const object = { Town, Latitude, Longitude };

      const result = [];

      for (const el of arr) {
            const newObject = Object.assign({}, object);
            let [Town, Latitude, Longitude] = strToArr(el);
            Latitude = Number(Latitude).toFixed(2);
            Longitude = Number(Longitude).toFixed(2);
            newObject.Town = Town;
            newObject.Latitude = Number(Latitude);
            newObject.Longitude = Number(Longitude);
            result.push(newObject);
      }

      return console.log(JSON.stringify(result));
}
townsToJSON([
      '| Town | Latitude | Longitude |',
      '| Sofia | 42.696552 | 23.32601 |',
      '| Beijing | 39.913818 | 116.363625 |'
]);