function extractText(items, textArea) {
    items = Array.from(document.getElementById('items').children);
    textArea = document.getElementById('result');
    for (const item of items) {
        textArea.textContent += item.textContent + '\n';
    }
}