function storeCatalogue(arr) {
      let sortedStore = {};

      for (const el of arr) {
            const [productName, price] = el.split(' : ');
            const groupTag = productName.charAt(0);
            if (!sortedStore[groupTag]) {
                  sortedStore[groupTag] = [`${productName}: ${price}`];
                  continue;
            }
            sortedStore[groupTag].push(`${productName}: ${price}`)
      }

      sortedStore = Object.entries(sortedStore).sort((a, b) => a[0].localeCompare(b[0]));
      sortedStore = Object.fromEntries(sortedStore);
      for (const key in sortedStore) {
            sortedStore[key].sort((a, b) => a.localeCompare(b));
            console.log(key);
            sortedStore[key].forEach(el => console.log(`  ${el}`));
      }
}
storeCatalogue([
      'Appricot : 20.4',
      'Fridge : 1500',
      'TV : 1499',
      'Deodorant : 10',
      'Boiler : 300',
      'Apple : 1.25',
      'Anti-Bug Spray : 15',
      'T-Shirt : 10'
]);