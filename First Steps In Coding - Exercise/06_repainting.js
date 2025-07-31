function repainting(requiredNylon, necessaryPaint, thinnerAmount, workingTime) {
    const nylonPrice = 1.5;
    const paintPrice = 14.5;
    const thinnerPrice = 5;
    const bagsPrice = 0.4;

    let nylonCoast = (requiredNylon + 2) * nylonPrice;
    let paintCoast = (necessaryPaint + (necessaryPaint * 0.10)) * paintPrice;
    let thinnerCost = thinnerAmount * thinnerPrice;
    let totalMaterialsPrice = nylonCoast + paintCoast + thinnerCost + bagsPrice;
    let totalWorkerPrice = (totalMaterialsPrice * 0.30) * workingTime;
    let totalPrice = totalMaterialsPrice + totalWorkerPrice;

    console.log(totalPrice);

}

