function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(userInput) {
      const tableData = Array.from(document.querySelectorAll('tbody tr td'));
      userInput = document.getElementById('searchField').value.toLowerCase();

      if (userInput.length > 0) {
         unselectRows(tableData);
         selectRows(tableData, userInput);
         return;
      }

      unselectRows(tableData);
   }

   function selectRows(array, input) {
      array.forEach(el => {
         if (el.textContent.toLowerCase().includes(input)) {
            el.parentNode.classList.add('select');
         }
      });
   }

   function unselectRows(array) {
      array.forEach(el => {
         if (el.parentNode.classList.contains('select')) {
            el.parentNode.classList.remove('select');
         }
      });
   }
}