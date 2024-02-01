function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const restData = {
      bestRest: {
         name: '',
         workers: {},
         avgSalary: 0,
         bestSalary: 0,
      },
      defineBestRest(array, string) {
         let sum = 0;
         let salaryCounter = 0;
         let currentBestSalary = 0;

         for (let i = 1; i < array.length; i += 2) {
            let currentSalary = Number(array[i]);

            if (currentBestSalary < currentSalary) {
               currentBestSalary = currentSalary;
            }

            sum += currentSalary;
            salaryCounter++;
         }

         let currentAvgSalary = sum / salaryCounter;

         if (this.bestRest.avgSalary < currentAvgSalary) {
            for (const key in this.bestRest.workers) {
               delete this.bestRest.workers[key];
            }

            this.bestRest.name = string;
            this.bestRest.avgSalary = currentAvgSalary;
            this.bestRest.bestSalary = currentBestSalary;

            for (let i = 0; i < array.length; i++) {
               if (i % 2 == 0) {
                  this.bestRest.workers[array[i]] = Number(array[i + 1]);
               }
            }

            const sortedWorkers = Object.entries(this.bestRest.workers).sort((a, b) => b[1] - a[1]);
            this.bestRest.workers = Object.fromEntries(sortedWorkers);
         }
      }
   }

   function onClick() {
      const input = JSON.parse(document.getElementById('inputs').children[1].value);
      const outputs = document.getElementById('outputs').querySelectorAll('p');
      const [restsOutput, workersOutput] = outputs;

      for (let data of input) {
         data = data.match(/[^-,\s]+/g);

         let restName = data.shift();
         const workersData = data;

         if (!restData.hasOwnProperty(restName)) {
            restData[restName] = [];
         }

         for (const data of workersData) {
            restData[restName].push(data);
         }

         restData.defineBestRest(restData[restName], restName);
      }

      restsOutput.textContent = `Name: ${restData.bestRest.name} Average Salary: ${restData.bestRest.avgSalary.toFixed(2)} Best Salary: ${restData.bestRest.bestSalary.toFixed(2)}`;

      for (const key in restData.bestRest.workers) {
         let currentSalary = restData.bestRest.workers[key];
         workersOutput.textContent += `Name: ${key} With Salary: ${currentSalary} `;
      }
   }
}