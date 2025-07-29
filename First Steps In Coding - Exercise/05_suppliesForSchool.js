function schoolSupplies(pens, markers, boardCleanerLiters, disscountProcent) {
    const pensPrice = 5.8
    const markersPrice = 7.2
    const boardCleanerPrice = 1.2

    let pensTotalCoast = pensPrice * pens
    let markersTotalCoast = markersPrice * markers
    let boardCleanerTotalCoast = boardCleanerPrice * boardCleanerLiters
    let disscount = disscountProcent / 100
    let totalPriceWithoutDisscount = pensTotalCoast + markersTotalCoast + boardCleanerTotalCoast
    let totalPrice = totalPriceWithoutDisscount - (totalPriceWithoutDisscount * disscount)

    console.log(totalPrice)

}