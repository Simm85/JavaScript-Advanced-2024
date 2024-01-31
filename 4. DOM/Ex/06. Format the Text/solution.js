function solve() {
  const input = document.getElementById('input');
  const outputText = document.getElementById('output');
  const inputText = input.value.split('.').slice(0, -1);
  const isRemainder = inputText.length % 3 == 1;
  const arr = [];

  for (const sentence of inputText) {

    if (inputText.length == 1) {
      outputText.innerHTML = `<p>${sentence}.</p>`;
      return;
    }

    arr.push(sentence);

    if (inputText.length == 2 && arr.length == 2) {
      textProcessing(arr);
    } else if (arr.length == 3 && !isRemainder) {
      textProcessing(arr);
    } else if (isRemainder) {
      const currentIndex = inputText.indexOf(sentence);
      const lastIndex = inputText.length - 1;

      if (currentIndex == lastIndex) {
        outputText.innerHTML += `<p>${sentence}.</p>`;
        return;
      }

      if (arr.length == 3) {
        textProcessing(arr);
      }
    }
  }

  function textProcessing(arr) {
    const txt = arr.reduce((acc, el) => acc += `${el}||`, '').split('||').join('. ').trim();
    outputText.innerHTML += `<p>${txt}</p>`;
    arr.splice(0, arr.length);
  }
}