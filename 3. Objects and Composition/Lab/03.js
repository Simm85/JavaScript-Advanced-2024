function cityTaxes(name, population, treasury, taxRate = 10) {
      const city = {
            name,
            population,
            treasury,
            taxRate,
            collectTaxes: function () {
                  this.treasury += this.population * this.taxRate;
            },
            applyGrowth: function (percentage) {
                  this.population *= 1 + percentage / 100;
                  this.population = Math.floor(this.population);
            },
            applyRecession: function (percentage) {
                  this.treasury *= 1 - percentage / 100;
                  this.treasury = Math.ceil(this.treasury);
            }
      }
      return city;
}



