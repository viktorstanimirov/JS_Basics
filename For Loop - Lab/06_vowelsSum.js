function vovwelsSum(text) {
    const letterValue = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let letter = text[i]

        if (letterValue.hasOwnProperty(letter)) {
            sum += letterValue[letter]
        }
    }
    console.log(sum);
}
