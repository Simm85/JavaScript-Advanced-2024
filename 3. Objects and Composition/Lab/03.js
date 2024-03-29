function cityTaxes(name, population, treasury, taxRate = 10) {
      const city = {
            name,
            population,
            treasury,
            taxRate,
            collectTaxes() {
                  this.treasury += this.population * this.taxRate;
            },
            applyGrowth(percentage) {
                  this.population *= 1 + percentage / 100;
                  this.population = Math.floor(this.population);
            },
            applyRecession(percentage) {
                  this.treasury *= 1 - percentage / 100;
                  this.treasury = Math.ceil(this.treasury);
            }
      }
      return city;
}



