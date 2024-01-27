function calc(num1, num2, result) {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    result = document.getElementById('sum');
    return result.value = Number(num1) + Number(num2);
}
