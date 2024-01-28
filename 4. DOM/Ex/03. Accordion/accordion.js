function toggle() {
    const button = document.querySelector('.button');
    const txtContainer = document.getElementById('extra');
    if (button.textContent.includes('More')) {
        button.textContent = 'Less';
        txtContainer.style.display = 'block';
        return;
    }

    button.textContent = 'More';
    txtContainer.style.display = 'none';
}