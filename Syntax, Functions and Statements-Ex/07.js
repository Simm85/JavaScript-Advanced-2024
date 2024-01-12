function cookingByNumber(...args) {
      let [number, ...operations] = args;
      number = Number(number);

      for (const action of operations) {
            switch (action) {
                  case 'chop':
                        number /= 2;
                        break;
                  case 'dice':
                        number = Math.sqrt(number);
                        break;
                  case 'spice':
                        number += 1;
                        break;
                  case 'bake':
                        number *= 3;
                        break;
                  case 'fillet':
                        number -= number * 0.2;
                        break;

                  default: console.log('Invalid action!');
                        break;
            }

            console.log(number);
      }
}
cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');