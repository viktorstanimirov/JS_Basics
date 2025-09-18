function calculatePrice(fruit, day, quantity) {
    const weekdayPrices = {
        banana: 2.50,
        apple: 1.20,
        orange: 0.85,
        grapefruit: 1.45,
        kiwi: 2.70,
        pineapple: 5.50,
        grapes: 3.85
    };

    const weekendPrices = {
        banana: 2.70,
        apple: 1.25,
        orange: 0.90,
        grapefruit: 1.60,
        kiwi: 3.00,
        pineapple: 5.60,
        grapes: 4.20
    };

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekends = ["Saturday", "Sunday"];
    let totalPrice = 0

    if (weekdays.includes(day) && fruit in weekdayPrices) {
        totalPrice = weekdayPrices[fruit] * quantity
        console.log(totalPrice.toFixed(2));

    } else if (weekends.includes(day) && fruit in weekendPrices) {
        totalPrice = weekendPrices[fruit] * quantity
        console.log(totalPrice.toFixed(2));

    } else {
        console.log('error');

    }
}
