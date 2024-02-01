function deleteByEmail() {
    const message = document.getElementById('result');
    const inputField = document.querySelector('input');
    const tableBody = document.querySelector('tbody');
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));
    const mailPattern = /[\w\d_-]+@[\w\d_-]+[.]{1}[\w]{2,}/g;
    Array.from(document.querySelectorAll('tbody tr td'))
        .filter(el => mailPattern.test(el.textContent))
        .map(el => el = el.textContent)
        .forEach((el, i) => {
            if (inputField.value.includes(el)) {
                tableBody.removeChild(tableRows[i]);
                message.textContent = 'Deleted.';
            } else {
                message.textContent = 'Not found.';
            }
        });
}