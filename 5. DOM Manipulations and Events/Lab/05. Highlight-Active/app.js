function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));
    const body = document.querySelector('body');
    inputs.forEach(input => input.addEventListener('focus', e => focus(e)));
    inputs.forEach(input => input.addEventListener('blur', e => blur(e)));

    function focus(e) {
        e.target.parentNode.className = 'focused';
    }

    function blur(e) {
        e.target.parentNode.classList.remove('focused');
    }
}