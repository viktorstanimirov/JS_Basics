function cinemaTickets(projectionType, rows, columns) {

    const ticketPrices = {
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.00
    }
    let totalPrice = rows * columns * ticketPrices[projectionType];
    console.log(totalPrice.toFixed(2));
}