function basketballEquipment(taxForYear) {
    let shoes = taxForYear - (taxForYear * 0.40);
    let equipment = shoes - (shoes * 0.20);
    let ball = equipment / 4;
    let accessories = ball / 5;

    let totalPrice = taxForYear + shoes + equipment + ball + accessories;
    console.log(totalPrice)
}

