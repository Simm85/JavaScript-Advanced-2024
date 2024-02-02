function attachGradientEvents() {
    const hoverArea = document.getElementById('gradient');
    const result = document.getElementById('result');

    hoverArea.addEventListener('mousemove', e => getCoords(e, result));
    hoverArea.addEventListener('mouseout', () => result.textContent = '');

    function getCoords(event, res) {
        let mouseX = event.offsetX / (event.target.clientWidth - 1);
        const percentage = Math.trunc(mouseX * 100);
        res.textContent = percentage + '%';
    }
}