function fishingBoat(budget, season, fishermenCount) {
    let boatSeasonPrice = {
        Spring: 3000,
        Summer: 4200,
        Autumn: 4200,
        Winter: 2600
    }
    let totalPrice = boatSeasonPrice[season];

    if (fishermenCount <= 6) {
        totalPrice *= 0.90;
    } else if (fishermenCount <= 11) {
        totalPrice *= 0.85;
    } else if (fishermenCount > 11) {
        totalPrice *= 0.75;
    }
    if (fishermenCount % 2 == 0 && season !== "Autumn") {
        totalPrice *= 0.95;
    }
    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

