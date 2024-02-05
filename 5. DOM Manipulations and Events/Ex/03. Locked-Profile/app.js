function lockedProfile() {
    Array.from(document.querySelectorAll('.profile')).forEach(profile => processProfile(profile.children));

    function processProfile(array) {
        const lockBtn = array[2];
        const hiddenData = array[9];
        const toogleBtn = array[10];
        toogleBtn.addEventListener('click', showHideInfo);

        function showHideInfo() {
            if (lockBtn.checked) {
                return;
            }

            if (toogleBtn.textContent == 'Show more') {
                hiddenData.style.display = 'block';
                toogleBtn.textContent = 'Hide it';
                return;
            }

            hiddenData.style.display = 'none';
            toogleBtn.textContent = 'Show more';
        }
    }
}