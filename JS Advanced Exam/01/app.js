window.addEventListener("load", solve);

function solve() {
  const inputFields = Array.from(document.querySelector('form').children)
    .filter(el => el.tagName.toLowerCase() == 'input' || el.tagName.toLowerCase() == 'select');
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', (event) => addInfo(event, inputFields));

  function addInfo(event, inputs) { 
    event.preventDefault();

    if (inputs.some(input => input.value.length == 0)) {
      return;
    }

    const ul = document.querySelector('.snowman-preview');
    const li = document.createElement('li');
    const article = document.createElement('article');
    const editButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const div = document.createElement('div');

    li.className = 'snowman-info';
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    nextButton.className = 'next-btn';
    nextButton.textContent = 'Next';
    div.className = 'btn-container';

    for (const input of inputs) {
      const p = document.createElement('p');
      switch (input.id) {
        case 'snowman-name': p.textContent = `Name: ${input.value}`;
          break;
        case 'snowman-height': p.textContent = `Height: ${input.value}`;
          break;
        case 'location': p.textContent = `Location: ${input.value}`;
          break;
        case 'creator-name': p.textContent = `Creator: ${input.value}`;
          break;
        case 'special-attribute': p.textContent = `Attribute: ${input.value}`;
          break;
      }

      article.appendChild(p);
    }

    div.appendChild(editButton);
    div.appendChild(nextButton);
    li.appendChild(article);
    li.appendChild(div);
    ul.appendChild(li);

    const paragraphs = Array.from(article.querySelectorAll('p'));
    editButton.addEventListener('click', () => editInfo(inputFields, paragraphs));
    nextButton.addEventListener('click', () => next('send-btn', 'Send', 'snow-list'));
    inputs.forEach(input => input.value = '');
    addBtn.disabled = true;
  }


  function editInfo(inputs, paragraphs) {
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraphValue = paragraphs[i].textContent.split(': ')[1];

      if (inputs[i].tagName.toLowerCase() == 'input') {
        inputs[i].value = paragraphValue;
        continue;
      }

      const option = Array.from(inputs[i].children).find(option => option.value == paragraphValue);
      option.selected = true;
    }
    addBtn.disabled = false;
    document.querySelector('li').remove();
  }

  function next(className, value, selecor) {
    const list = document.querySelector(`.${selecor}`);
    document.querySelector('li').className = 'snowman-content';
    const information = document.querySelector('li').cloneNode(true);
    document.querySelector('li').remove();
    list.appendChild(information);

    document.querySelector('.btn-container').remove();
    const button = document.createElement('button');
    button.className = className;
    button.textContent = value;
    list.querySelector('article').appendChild(button);
    removeMain();
  }

  function removeMain() {
    const sendButton = document.querySelector('.send-btn');
    const main = document.querySelector('main');
    sendButton.addEventListener('click', () => main.remove());
    document.getElementById('back-img').style.display = 'block';
    const backButton = document.createElement('button');
    backButton.className = 'back-btn';
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => location.reload());
    document.body.appendChild(backButton);
  }
}