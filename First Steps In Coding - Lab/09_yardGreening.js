function yardGreening(area) {
    let pricePerSquareMeter = 7.61;
    let totalCost = area * pricePerSquareMeter;
    let discount = totalCost * 0.18;
    let finalPrice = totalCost - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}