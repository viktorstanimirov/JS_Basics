function numberSum(number) {
    let sum = 0;
    let numStr = number.toString();

    for (let i = 0; i < numStr.length; i++) {
        let num = Number(numStr[i]);
        sum += num;
    }

    console.log(`The sum of the digits is:${sum}`);
}