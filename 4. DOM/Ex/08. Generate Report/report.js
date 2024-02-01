function generateReport() {
    const activeCheckBoxes = [];

    Array.from(document.querySelectorAll('input')).forEach((el, i) => {
        if (el.checked) {
            activeCheckBoxes.push([el.name, i]);
        }
    });

    if (activeCheckBoxes.length == 0) {
        return;
    }

    const tableData = Array.from(document.querySelectorAll('tbody tr'));
    const output = [];

    for (const row of tableData) {
        const object = {};
        for (const box of activeCheckBoxes) {
            const [name, index] = box;
            object[name] = row.children[index].textContent;
        }
        output.push(object)
    }

    document.getElementById('output').textContent = JSON.stringify(output, null, 2);
}