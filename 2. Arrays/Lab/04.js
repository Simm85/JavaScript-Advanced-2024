function negativePositiveNumbers(numbers) {
    const reorderedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] < 0
            ? reorderedNumbers.unshift(numbers[i])
            : reorderedNumbers.push(numbers[i]);
    }

    reorderedNumbers.forEach(n => console.log(n));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);



