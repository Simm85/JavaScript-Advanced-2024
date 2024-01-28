function subtract(num1, num2, res) {
    num1 = Number(document.getElementById('firstNumber').value);
    num2 = Number(document.getElementById('secondNumber').value);
    res = document.getElementById('result');
    return res.textContent = num1 - num2;
}