function breakfastRobot() {
      class Robot {
            constructor() {
                  this.command = null;
                  this.type = null;
                  this.quantity = null;
                  this.ingredients = {
                        protein: 0,
                        carbohydrate: 0,
                        fat: 0,
                        flavour: 0,
                  };
                  this.meals = {
                        apple: {
                              carbohydrate: 1,
                              flavour: 2,
                        },
                        lemonade: {
                              carbohydrate: 10,
                              flavour: 20,
                        },
                        burger: {
                              carbohydrate: 5,
                              fat: 7,
                              flavour: 3,
                        },
                        eggs: {
                              protein: 5,
                              fat: 1,
                              flavour: 1,
                        },
                        turkey: {
                              protein: 10,
                              carbohydrate: 10,
                              fat: 10,
                              flavour: 10,
                        }
                  };
            }

            restock() {
                  this.ingredients[this.type] += this.quantity;
                  return "Success";
            }

            prepare() {
                  const order = Object.assign({}, this.meals[this.type]);
                  for (const key in order) {
                        order[key] *= this.quantity;
                        if (order[key] > this.ingredients[key]) {
                              return `Error: not enough ${key} in stock`;
                        }
                        this.ingredients[key] -= order[key];
                  }
                  return "Success";
            }

            report() {
                  let report = "";
                  for (const key in this.ingredients) {
                        report += `${key}=${this.ingredients[key]} `;
                  }
                  return report.trimEnd();
            }
      }

      const cooker = new Robot();

      return function (str) {
            const [command, type, quantity] = str.split(" ");
            cooker.command = command;
            cooker.type = type;
            cooker.quantity = Number(quantity);

            if (command == "restock") {
                  return cooker.restock();
            } else if (command == "prepare") {
                  return cooker.prepare();
            } else {
                  return cooker.report();
            }
      }
}

const manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

