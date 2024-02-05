function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('div')).map(div => div.children[2]);
    buttons.forEach(btn => btn.addEventListener('click', (event) => calcTime(event)));

    function calcTime(event) {
        const inputValue = Number(event.target.previousElementSibling.value);

        if (!inputValue) {
            return;
        }

        const multiply = true;

        if (event.target.id == 'daysBtn') {
            calcHours(inputValue, 24);
            calcMinutes(calcHours(inputValue, 24), multiply);
            calcSeconds(calcMinutes(calcHours(inputValue, 24), multiply));
        } else if (event.target.id == 'hoursBtn') {
            calcDays(inputValue);
            calcMinutes(inputValue, multiply);
            calcSeconds(calcMinutes(inputValue, multiply));
        } else if (event.target.id == 'minutesBtn') {
            calcDays(calcHours(inputValue, 60));
            calcHours(inputValue, 60);
            calcSeconds(inputValue);
        } else {
            calcMinutes(inputValue, !multiply);
            calcHours(calcMinutes(inputValue, !multiply), 60);
            calcDays(calcHours(calcMinutes(inputValue, !multiply), 60));
        }
    }


    function calcDays(num) {
        const daysInput = document.getElementById('days');
        return daysInput.value = num / 24;
    }

    function calcHours(num1, num2) {
        const hoursInput = document.getElementById('hours');
        if (num2 == 24) {
            return hoursInput.value = num1 * num2;
        }
        return hoursInput.value = num1 / num2;
    }

    function calcMinutes(num, bool) {
        const minsInput = document.getElementById('minutes');
        if (bool) {
            return minsInput.value = num * 60;
        }
        return minsInput.value = num / 60;
    }

    function calcSeconds(num) {
        const secInput = document.getElementById('seconds');
        return secInput.value = num * 60;
    }
}