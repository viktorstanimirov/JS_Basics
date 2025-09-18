function newHouse(flowerType, flowerCount, budget) {

    const pricePerFlower = {
        Roses: 5,
        Dahlias: 3.80,
        Tulips: 2.80,
        Narcissus: 3,
        Gladiolus: 2.50
    }

    let totalPrice = flowerCount * pricePerFlower[flowerType]

    if (flowerType == "Roses" && flowerCount > 80) {
        totalPrice = totalPrice * 0.90;
    } else if (flowerType == "Dahlias" && flowerCount > 90) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType == "Tulips" && flowerCount > 80) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType == "Narcissus" && flowerCount < 120) {
        totalPrice = totalPrice * 1.15;
    } else if (flowerType == "Gladiolus" && flowerCount < 80) {
        totalPrice = totalPrice * 1.20;
    }

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}