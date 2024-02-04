function create(words) {
   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', () => p.style.display = 'block');
      document.getElementById('content').appendChild(div);
   }
}