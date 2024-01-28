function sumTable() {
      return document.getElementById('sum').textContent = Array.from(document.querySelectorAll('td'))
            .filter(txt => /\d\./g.test(txt.textContent))
            .map(txt => Number(txt.textContent))
            .reduce((acc, n) => acc += n);
}