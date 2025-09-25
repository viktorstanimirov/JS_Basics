function roomPrice(daysToStay, roomType, evaluation) {
    const prices = {
        "room for one person": 18.00,
        "apartment": 25.00,
        "president apartment": 35.00
    };
    let totalRoomPrice = (daysToStay - 1) * prices[roomType];
    if (daysToStay < 10) {
        if (roomType == "apartment") {
            totalRoomPrice *= 0.70;
        } else if (roomType == "president apartment") {
            totalRoomPrice *= 0.90;
        }
    } else if (daysToStay <= 15) {
        if (roomType == "apartment") {
            totalRoomPrice *= 0.65;
        } else if (roomType == "president apartment") {
            totalRoomPrice *= 0.85;
        }
    } else if (daysToStay > 15) {
        if (roomType == "apartment") {
            totalRoomPrice *= 0.50;
        } else if (roomType == "president apartment") {
            totalRoomPrice *= 0.80;
        }
    }
    if (evaluation == "positive") {
        totalRoomPrice *= 1.25;
    } else if (evaluation == "negative") {
        totalRoomPrice *= 0.90;
    }
    console.log(totalRoomPrice.toFixed(2));

}

roomPrice(30, "president apartment", "negative")

