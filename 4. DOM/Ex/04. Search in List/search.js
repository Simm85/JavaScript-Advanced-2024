function search() {
   const towns = Array.from(document.getElementById('towns').children);
   const searchBar = document.getElementById('searchText');
   const result = document.getElementById('result');
   const matchQuery = ((arr, inputString, counter) => {
      if (inputString.length > 0) {
         result.textContent = '';
         inputString = inputString.toLowerCase();
         arr.filter(el => el.textContent.toLowerCase().includes(inputString));
         arr.forEach(el => {
            el.style.fontWeight = '';
            el.style.textDecoration = '';
         });

         arr.forEach(el => {
            if (el.textContent.toLowerCase().includes(inputString)) {
               counter++;
               result.textContent = `${counter} matches found`;
               el.style.fontWeight = 'bold';
               el.style.textDecoration = 'underline';
            }
         });
         return;
      }

      result.textContent = '';
      arr.forEach(el => {
         el.style.fontWeight = '';
         el.style.textDecoration = '';
      });
   });

   matchQuery(towns, searchBar.value, 0);
}
