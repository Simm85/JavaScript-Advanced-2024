function addItem() {
    const txt = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = txt;
    document.getElementById('items').appendChild(li);
}