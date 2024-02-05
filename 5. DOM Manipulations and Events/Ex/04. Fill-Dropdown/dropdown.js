function addItem() {
    const itemTxt = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const selectBar = document.getElementById('menu');

    const option = document.createElement('option');
    option.value = itemValue.value;
    option.textContent = itemTxt.value;
    selectBar.appendChild(option);
    itemTxt.value = '';
    itemValue.value = '';
}