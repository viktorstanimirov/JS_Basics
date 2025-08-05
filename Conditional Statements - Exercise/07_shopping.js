function shoping(budjet, gpuCount, cpuCount, ramCount) {
    const gpuPrice = 250;
    let cpuPrice = (gpuCount * gpuPrice) * 0.35;
    let ramPrice = (gpuCount * gpuPrice) * 0.10;
    let totalCost = (gpuCount * gpuPrice) + (cpuCount * cpuPrice) + (ramCount * ramPrice);

    if (gpuCount > cpuCount) {
        totalCost = totalCost - (totalCost * 0.15);
    }
    if (totalCost <= budjet) {
        totalCost = budjet - totalCost;
        console.log(`You have ${totalCost.toFixed(2)} leva left!`);
    } else {
        totalCost = totalCost - budjet;
        console.log(`Not enough money! You need ${totalCost.toFixed(2)} leva more!`);
    }
}