function solve() {
    const inputs = Array.from(document.querySelector('form').children).filter(el => el.localName.match(/input|textarea/g));
    const sections = Array.from(document.querySelectorAll('.wrapper section')).slice(1);
    const [task, description, date] = inputs;
    const [openSec, inProgressSec, completeSec] = sections;
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', e => addTask(e));

    function addTask(e) {
        e.preventDefault();

        if (inputs.some(input => !input.value)) {
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = p.cloneNode();
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const btn2 = btn.cloneNode();

        h3.textContent = task.value;
        p.textContent = `Description: ${description.value}`;
        p2.textContent = `Due Date: ${date.value}`;

        div.className = 'flex';
        btn.className = 'green';
        btn.textContent = 'Start';
        btn2.className = 'red';
        btn2.textContent = 'Delete';

        div.appendChild(btn);
        div.appendChild(btn2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(div);
        openSec.children[1].appendChild(article);
        btn.addEventListener('click', moveRemoveArticle);
        btn2.addEventListener('click', () => removeArticle(article));
    }

    function moveRemoveArticle() {
        const newArticle = this.parentNode.parentNode.cloneNode(true);

        if (this.textContent == 'Start') {
            const [btn, btn2] = Array.from(newArticle.querySelectorAll('button'));
            btn.className = 'red';
            btn.textContent = 'Delete';
            btn2.className = 'orange';
            btn2.textContent = 'Finish';
            inProgressSec.children[1].appendChild(newArticle);
            btn.addEventListener('click', () => removeArticle(newArticle));
            btn2.addEventListener('click', moveRemoveArticle);
        } else {
            newArticle.querySelector('.flex').remove();
            completeSec.children[1].appendChild(newArticle);
        }
    }

    function removeArticle(article) {
        article.remove();
    }
}