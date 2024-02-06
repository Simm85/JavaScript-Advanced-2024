function solve() {
  const input = document.querySelector('textarea');
  const [genBtn, buyBtn] = document.querySelectorAll('button');
  genBtn.addEventListener('click', () => generate(input.value));
  buyBtn.addEventListener('click', checkout);

  function generate(arr) {
    const data = JSON.parse(arr);
    for (const obj of data) {
      const { img, name, price, decFactor } = obj;
      genDOMStructure(img, name, price, decFactor);
    }
  }

  function checkout() {
    const checkedInputs = Array.from(document.querySelectorAll('input')).filter(input => input.checked);
    const output = document.querySelectorAll('textarea');

    if (checkedInputs.length == 0) {
      output[1].textContent = '';
      return;
    }

    const furnitures = [];
    let totalPrice = 0;
    let avgFactor = 0;

    for (let i = 0; i < checkedInputs.length; i++) {
      furnitures.push(checkedInputs[i].parentNode.parentNode.children[1].children[0].textContent);
      totalPrice += Number(checkedInputs[i].parentNode.parentNode.children[2].children[0].textContent);
      avgFactor += Number(checkedInputs[i].parentNode.parentNode.children[3].children[0].textContent);
    }

    output[1].textContent = `Bought furniture: ${furnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor / checkedInputs.length}`;
  }

  function genDOMStructure(...data) {
    const tBody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    const p = document.createElement('p');

    for (let i = 0; i <= data.length; i++) {
      const td = document.createElement('td');
      if (i == 0) {
        const image = document.createElement('img');
        image.src = data[i];
        td.appendChild(image);
      } else if (i == data.length) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        td.appendChild(checkbox);
      } else {
        const currentParagraph = p.cloneNode();
        currentParagraph.textContent = data[i];
        td.appendChild(currentParagraph);
      }
      tr.appendChild(td);
    }
    tBody.appendChild(tr);
  }
}
