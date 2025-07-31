function toyShop(tripPrice, puzzleCount, dollsCount, bearsCount, minionsCount, trucksCount) {
    const puzzlePrice = 2.60;
    const dollPrice = 3;
    const bearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2;
    let totalMoney;
    let totalToys;
    let totalCost;
    let money;

    totalMoney = (puzzleCount * puzzlePrice) + (dollsCount * dollPrice) + (bearsCount * bearPrice) + (minionsCount * minionPrice) + (trucksCount * truckPrice);
    totalToys = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (totalToys >= 50) {
        totalMoney = totalMoney - (totalMoney * 0.25);
    };

    totalCoast = totalMoney - (totalMoney * 0.10);

    money = totalCost - tripPrice

    if (totalCost >= tripPrice) {
        console.log(`Yes! ${money.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(money).toFixed(2)} lv needed.`)
    }
}


