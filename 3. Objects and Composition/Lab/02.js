function townPopulation(arr) {
      const townData = {};
      for (const el of arr) {
            let [name, population] = el.split(' <-> ');
            population = Number(population);
            townData.hasOwnProperty(name)
                  ? townData[name] += population
                  : townData[name] = population;
      }

      for (const key in townData) {
            console.log(`${key} : ${townData[key]}`);
      }
}
townPopulation([
      'Istanbul <-> 100000',
      'Honk Kong <-> 2100004',
      'Jerusalem <-> 2352344',
      'Mexico City <-> 23401925',
      'Istanbul <-> 1000'
]);