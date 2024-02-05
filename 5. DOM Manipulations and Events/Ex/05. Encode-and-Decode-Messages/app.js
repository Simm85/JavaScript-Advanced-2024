function encodeAndDecodeMessages() {
    const elements = document.querySelector('main').children;
    const encodeArea = elements[0].children[1];
    const encodeBtn = elements[0].children[2];
    const decodeArea = elements[1].children[1];
    const decodeBtn = elements[1].children[2];

    encodeBtn.addEventListener('click', () => encodeMsg(encodeArea, decodeArea));
    decodeBtn.addEventListener('click', () => decodeMsg(decodeArea));

    function encodeMsg(sender, reciever) {
        const encodedMsg = sender.value.split('').reduce((acc, char) => {
            const modIndex = char.charCodeAt(0) + 1;
            acc += String.fromCharCode(modIndex);
            return acc;
        }, '');
        sender.value = '';
        reciever.textContent = encodedMsg;
    }

    function decodeMsg(reciever) {
        reciever.value = reciever.value.split('').reduce((acc, char) => {
            const modIndex = char.charCodeAt(0) - 1;
            acc += String.fromCharCode(modIndex);
            return acc;
        }, '');
    }
}