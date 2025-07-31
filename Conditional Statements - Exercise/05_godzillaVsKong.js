function movie(budget, extrasNum, clothingCost) {
    let decorPrice = budget * 0.10;
    let totalClothingCost = clothingCost * extrasNum;

    if (extrasNum > 150) {
        totalClothingCost *= 0.90;
    }

    let totalMovieCost = decorPrice + totalClothingCost;

    if (totalMovieCost > budget) {
        let needed = totalMovieCost - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else {
        let left = budget - totalMovieCost;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }
}
