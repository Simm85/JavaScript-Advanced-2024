function calculator() {
    return {
        init(num1, num2, result) {
            this.num1 = document.querySelector(num1);
            this.num2 = document.querySelector(num2);
            this.result = document.querySelector(result);
        },

        add() {
            return this.result.value = Number(this.num1.value) + Number(this.num2.value);
        },

        subtract() {
            return this.result.value = Number(this.num1.value) - Number(this.num2.value);
        },
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
console.log(calculate);





