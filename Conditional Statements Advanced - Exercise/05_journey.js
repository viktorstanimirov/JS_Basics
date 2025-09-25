function journey(budget, season) {
    let destination;
    let totalPrice;
    let place;

    if (season == "summer") {
        place = "Camp";
    } else {
        place = "Hotel";
    }

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season == "summer") {
            totalPrice = budget * 0.30;
        } else {
            totalPrice = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";

        if (season == "summer") {
            totalPrice = budget * 0.40;
        } else {
            totalPrice = budget * 0.80;
        }
    } else {
        destination = "Europe";
        place = "Hotel"
        totalPrice = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${totalPrice.toFixed(2)}`);
}

journey(1500, "summer")