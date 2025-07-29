function fishTank(length, width, height, percentage) {
    let aquariumVolume = length * width * height;
    let volumeLiters = aquariumVolume / 1000;
    let occupiedSpace = percentage / 100;
    let litersNeeded = volumeLiters * (1 - occupiedSpace);

    console.log(litersNeeded)
}