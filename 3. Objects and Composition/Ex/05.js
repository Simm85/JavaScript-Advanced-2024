function lowestPricesInCities(arr) {
      const result = {};
      for (const el of arr) {
            let [townName, productName, productPrice] = el.split(' | ');
            productPrice = Number(productPrice);
            if (!result.hasOwnProperty(productName)) {
                  result[productName] = [productPrice, townName];
                  continue;
            }
            if (productName && productPrice < result[productName][0]) {
                  result[productName].splice(0, 2);
                  result[productName].push(productPrice, townName);
            }
      }

      for (const key in result) {
            console.log(`${key} -> ${result[key][0]} (${result[key][1]})`);
      }
}
lowestPricesInCities([
      'Sample Town | Sample Product | 1000',
      'Sample Town | Orange | 2',
      'Sample Town | Peach | 1',
      'Sofia | Orange | 3',
      'Sofia | Peach | 2',
      'New York | Sample Product | 1000.1',
      'New York | Burger | 10']);