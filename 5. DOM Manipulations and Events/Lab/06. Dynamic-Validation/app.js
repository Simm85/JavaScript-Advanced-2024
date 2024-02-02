function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]{2,3}/g;
    const input = document.getElementById('email');
    input.addEventListener('change', () => validate(input, pattern));

    function validate(input, regEx) {
        if (regEx.test(input.value)) {
            input.classList.remove('error');
            return;
        }
        input.className = 'error';
    }
}