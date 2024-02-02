function addItem() {
    const newItem = document.getElementById('newItemText');
    const list = document.getElementById('items');
    const li = document.createElement('li');
    const delButton = document.createElement('a');

    li.textContent = newItem.value;
    delButton.href = '#';
    delButton.textContent = '[Delete]';
    li.appendChild(delButton);
    list.appendChild(li);
    list.addEventListener('click', event => removeItem(event));

    function removeItem(event) {
        if (event.target.tagName.toLowerCase() != 'a') {
            return;
        }
        event.target.parentNode.remove();
    }
}