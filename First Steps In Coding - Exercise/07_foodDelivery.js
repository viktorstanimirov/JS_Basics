function foodDelivery(chickenCount, fishCount, vegyCount) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const vegyMenuPrice = 8.15;
    const deliveryPrice = 2.50;

    let chickenPrice = chickenCount * chickenMenuPrice;
    let fishPrice = fishCount * fishMenuPrice;
    let vegyPrice = vegyCount * vegyMenuPrice;

    let totalMenuPrice = chickenPrice + fishPrice + vegyPrice;
    let desertPrise = totalMenuPrice * 0.20;
    let totalPrice = totalMenuPrice + desertPrise + deliveryPrice;

    console.log(totalPrice)

}