function calculator(num1, num2, operator) {
    let result;
    let evenOrOdd
    if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    } else if (operator == "%") {
        result = num1 % num2;
    }
    if (result % 2 == 0) {
        evenOrOdd = "even"
    } else {
        evenOrOdd = "odd"
    }
    if (operator == "+" || operator == "-" || operator == "*") {
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    } else if (operator == "/" && num2 !== 0) {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    } else if (operator == "%" && num2 !== 0) {
        console.log(`${num1} % ${num2} = ${result}`);
    }
}
