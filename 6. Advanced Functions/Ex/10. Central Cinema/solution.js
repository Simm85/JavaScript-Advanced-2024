function solve() {
    const [movieName, hall, ticketPrice, onScreenButton] = Array.from(document.getElementById('container').children);
    const clearButton = document.getElementById('archive').querySelector('button');

    onScreenButton.addEventListener('click', event => addMovies(event));
    clearButton.addEventListener('click', clearArchive);

    function addMovies(event) {
        event.preventDefault();

        if (!movieName.value || !hall.value || !ticketPrice.value || isNaN(ticketPrice.value)) {
            return;
        }

        setMoiveData(movieName.value, hall.value, ticketPrice.value);
        Array.from(document.querySelectorAll('#container input')).forEach(input => input.value = '');
    }

    function setMoiveData(movieName, hall, ticketPrice) {
        const ul = document.getElementById('movies').children[1],
            li = document.createElement('li'),
            span = document.createElement('span'),
            strong = document.createElement('strong'),
            div = document.createElement('div'),
            newStrong = strong.cloneNode(),
            input = document.createElement('input'),
            button = document.createElement('button');

        span.textContent = movieName;
        strong.textContent = `Hall: ${hall}`;
        newStrong.textContent = ticketPrice;
        input.placeholder = 'Tickets Sold';
        button.textContent = 'Archive';

        div.appendChild(newStrong);
        div.appendChild(input);
        div.appendChild(button);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        ul.appendChild(li);

        button.addEventListener('click', function () {
            const thisButton = this;
            calcTotalTicketsPriceThenArchiveMovie(thisButton, input.value, newStrong.textContent);
        });
    }

    function calcTotalTicketsPriceThenArchiveMovie(clickedButton, number, ticketPrice) {
        if (!number || isNaN(number)) {
            return;
        }

        const totalPrice = Number(ticketPrice) * Number(number);
        archiveMovie(clickedButton, totalPrice);
    }

    function archiveMovie(clickedButton, number) {
        const ul = document.getElementById('archive').children[1],
            li = document.createElement('li'),
            span = clickedButton.parentNode.parentNode.children[0].cloneNode(true),
            strong = document.createElement('strong'),
            button = document.createElement('button');

        strong.textContent = `Total amount: ${number.toFixed(2)}`;
        button.textContent = 'Delete';

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(button);
        ul.appendChild(li);
        button.addEventListener('click', () => li.remove());
        clickedButton.parentNode.parentNode.remove();
    }

    function clearArchive() {
        Array.from(document.querySelectorAll('#archive li')).forEach(li => li.remove());
    }
}