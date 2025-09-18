function tradeCommission(town, sales) {
    const validTowns = ["Sofia", "Varna", "Plovdiv"];
    if (sales < 0 || !validTowns.includes(town)) {
        console.log('error');

    } else if (town == "Sofia") {
        if (0 <= sales && sales <= 500) {
            console.log((sales * 0.05).toFixed(2));
        } else if (500 < sales && sales <= 1000) {
            console.log((sales * 0.07).toFixed(2));
        } else if (1000 < sales && sales <= 10000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.12).toFixed(2));
        }
    } else if (town == "Varna") {
        if (0 <= sales && sales <= 500) {
            console.log((sales * 0.045).toFixed(2));
        } else if (500 < sales && sales <= 1000) {
            console.log((sales * 0.075).toFixed(2));
        } else if (1000 < sales && sales <= 10000) {
            console.log((sales * 0.10).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.13).toFixed(2));
        }
    } else if (town == "Plovdiv") {
        if (0 <= sales && sales <= 500) {
            console.log((sales * 0.055).toFixed(2));
        } else if (500 < sales && sales <= 1000) {
            console.log((sales * 0.08).toFixed(2));
        } else if (1000 < sales && sales <= 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else if (sales > 10000) {
            console.log((sales * 0.145).toFixed(2));
        }
    }
}

tradeCommission("Plovdiv", 1000);