function hotelRoom(month, nights) {
    const prices = {
        "May": { studio: 50, apartment: 65 },
        "October": { studio: 50, apartment: 65 },
        "June": { studio: 75.20, apartment: 68.70 },
        "September": { studio: 75.20, apartment: 68.70 },
        "July": { studio: 76, apartment: 77 },
        "August": { studio: 76, apartment: 77 }
    };

    let studioPrice = prices[month].studio * nights;
    let aprtmentPrice = prices[month].apartment * nights;

    if (nights > 14 && (month == "May" || month == "October")) {
        studioPrice *= 0.70;
    } else if (nights > 7 && (month == "May" || month == "October")) {
        studioPrice *= 0.95;
    } else if (nights > 14 && (month == "June" || month == "September")) {
        studioPrice *= 0.80;
    }
    if (nights > 14) {
        aprtmentPrice *= 0.90
    }

    console.log(`Apartment: ${aprtmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

